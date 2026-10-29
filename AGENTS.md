# Project rules
- Handle appointment form submissions in the submit-appointment Edge Function, saving the request before sending a fixed-recipient Gmail notice; this keeps credentials server-only and preserves leads if email delivery fails.
- Keep notification formatting in the function's local notification module so timezone and recipient rules can be tested independently of external services.