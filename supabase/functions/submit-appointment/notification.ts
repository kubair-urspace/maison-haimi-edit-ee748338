export const NOTIFICATION_RECIPIENT = 'DrElizaHaimi@gmail.com';

export interface Appointment {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_time: string;
  message: string | null;
  status: string;
}

export function submissionTime(value: string): string {
  const date = new Date(value);
  const day = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', month: 'short', day: 'numeric', year: 'numeric',
  }).format(date);
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', hour12: true,
  }).format(date);
  return `${day}, ${time}`;
}

export function notificationText(appointment: Appointment): string {
  return [
    'Hi Eliza,', '',
    'You have a new appointment request through your website:', '',
    `Name: ${appointment.name}`,
    `Email: ${appointment.email}`,
    `Phone: ${appointment.phone}`,
    `Service: ${appointment.service}`,
    `Preferred time: ${appointment.preferred_time}`,
    `Message: ${appointment.message?.trim() || 'None'}`, '',
    'Thanks,',
  ].join('\n');
}

export function rawNotification(appointment: Appointment): string {
  const subject = 'New appointment request | Haimi Dental Aesthetics';
  const message = [
    `To: ${NOTIFICATION_RECIPIENT}`, `Subject: ${subject}`,
    `Message-ID: <appointment-${appointment.id}@elizahaimidds.com>`,
    'MIME-Version: 1.0', 'Content-Type: text/plain; charset="UTF-8"',
    '', notificationText(appointment),
  ].join('\r\n');
  return btoa(Array.from(new TextEncoder().encode(message), b => String.fromCharCode(b)).join(''))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}