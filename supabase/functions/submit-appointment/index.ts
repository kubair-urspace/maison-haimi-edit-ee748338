import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3';
import { rawNotification } from './notification.ts';

const schema = z.object({
  name: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(50),
  service: z.enum(['Cosmetic/Aesthetic Dentistry', 'Veneers or Same-Day Crowns', 'Full Mouth Reconstruction', 'Dental Implants', 'Invisalign Consultation', 'Dental Sleep Medicine', 'In-Office Teeth Whitening', 'Other']),
  preferred_time: z.enum(['Morning (8am - 12pm)', 'Afternoon (12pm - 3pm)', 'Late Afternoon (3pm - 5pm)', 'Flexible']),
  message: z.string().trim().max(5000).nullable().optional(),
}).strict();

const respond = (data: unknown, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return respond({ error: 'Method not allowed' }, 405);
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) return respond({ error: 'Please check your appointment details.' }, 400);
    const url = Deno.env.get('SUPABASE_URL');
    const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!url || !key) return respond({ error: 'Appointment storage unavailable' }, 503);
    // Intentionally public: visitors do not need an account to request an appointment.
    // The recipient and status are server-controlled, never supplied by the visitor.
    const db = createClient(url, key);
    const { data: appointment, error } = await db.from('appointment_requests')
      .insert({ ...parsed.data, message: parsed.data.message || null, status: 'new' })
      .select().single();
    if (error || !appointment) return respond({ error: 'Could not save appointment request' }, 500);
    const apiKey = Deno.env.get('LOVABLE_API_KEY');
    const gmailKey = Deno.env.get('GOOGLE_MAIL_API_KEY');
    if (!apiKey || !gmailKey) {
      console.error('Appointment saved; Gmail credentials unavailable', appointment.id);
      return respond({ saved: true, notificationSent: false });
    }
    try {
      const response = await fetch('https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'X-Connection-Api-Key': gmailKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({ raw: rawNotification(appointment) }),
      });
      if (!response.ok) {
        const details = await response.text();
        console.error(`Gmail notification failed [${response.status}]: ${details}`);
        return respond({ saved: true, notificationSent: false, notificationError: { status: response.status, details } });
      }
      const sent = await response.json();
      console.info('Appointment notification sent', JSON.stringify({ appointmentId: appointment.id, gmailMessageId: sent.id }));
      return respond({ saved: true, notificationSent: true });
    } catch {
      console.error('Appointment saved; email connection failed', appointment.id);
      return respond({ saved: true, notificationSent: false });
    }
  } catch {
    return respond({ error: 'Unable to process request' }, 400);
  }
});