import { describe, expect, it } from 'vitest';
import { NOTIFICATION_RECIPIENT, submissionTime, notificationText } from '../../supabase/functions/submit-appointment/notification';

describe('appointment notification rules', () => {
  it('sends to the requested owner address', () => {
    expect(NOTIFICATION_RECIPIENT).toBe('Kubair@urspace.ai');
  });
  it('uses New York submission time', () => {
    expect(submissionTime('2026-10-29T12:56:00Z')).toBe('Oct 29, 2026, 8:56 AM');
    expect(submissionTime('2026-10-28T16:20:00Z')).toBe('Oct 28, 2026, 12:20 PM');
  });
  it('uses none for an empty message and preserves new status', () => {
    const text = notificationText({ id: 'test', created_at: '2026-10-29T12:56:00Z', name: 'Test Patient', email: 'patient@example.com', phone: '5551234567', service: 'Other', preferred_time: 'Flexible', message: null, status: 'new' });
    expect(text.split('\n').slice(-2)).toEqual(['Message: none', 'Status: new']);
  });
});