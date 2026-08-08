REVOKE SELECT ON public.guest_book_entries FROM anon, authenticated;
GRANT SELECT (id, name, message, created_at) ON public.guest_book_entries TO anon, authenticated;