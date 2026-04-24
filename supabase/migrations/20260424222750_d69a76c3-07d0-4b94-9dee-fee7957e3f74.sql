ALTER TABLE public.appointment_requests
  ADD CONSTRAINT name_length CHECK (char_length(name) BETWEEN 1 AND 100),
  ADD CONSTRAINT email_length CHECK (char_length(email) BETWEEN 3 AND 255),
  ADD CONSTRAINT phone_length CHECK (char_length(phone) BETWEEN 1 AND 30),
  ADD CONSTRAINT service_length CHECK (char_length(service) BETWEEN 1 AND 100),
  ADD CONSTRAINT preferred_time_length CHECK (char_length(preferred_time) BETWEEN 1 AND 100),
  ADD CONSTRAINT message_length CHECK (message IS NULL OR char_length(message) <= 2000);