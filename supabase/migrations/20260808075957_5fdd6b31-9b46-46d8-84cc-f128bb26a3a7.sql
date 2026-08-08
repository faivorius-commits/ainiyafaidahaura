CREATE TABLE public.guest_book_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.guest_book_entries TO anon;
GRANT SELECT, INSERT ON public.guest_book_entries TO authenticated;
GRANT ALL ON public.guest_book_entries TO service_role;

ALTER TABLE public.guest_book_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read guest book entries"
ON public.guest_book_entries FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "Anyone can leave a guest book entry"
ON public.guest_book_entries FOR INSERT
TO anon, authenticated
WITH CHECK (char_length(name) BETWEEN 1 AND 80 AND char_length(message) BETWEEN 1 AND 2000);

ALTER PUBLICATION supabase_realtime ADD TABLE public.guest_book_entries;