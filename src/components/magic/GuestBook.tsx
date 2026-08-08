import { useEffect, useState, type FormEvent } from "react";
import { Sparkles, Send, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { sendGuestBookMessage } from "@/lib/guestbook.functions";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Entry = { id: string; name: string; message: string; created_at: string };

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export function GuestBook() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [freshId, setFreshId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sendMessage = useServerFn(sendGuestBookMessage);

  useEffect(() => {
    let cancelled = false;
    supabase
      .from("guest_book_entries")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        if (!cancelled && data) setEntries(data as Entry[]);
      });

    const channel = supabase
      .channel("guest-book")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "guest_book_entries" },
        (payload) => {
          const row = payload.new as Entry;
          setEntries((prev) => (prev.some((e) => e.id === row.id) ? prev : [row, ...prev]));
        },
      )
      .subscribe();

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setStatus("sending");
    const payload = { name: name.trim(), email: email.trim(), message: message.trim() };
    try {
      const { data, error } = await supabase
        .from("guest_book_entries")
        .insert({ name: payload.name, email: payload.email || null, message: payload.message })
        .select("id, name, message, created_at")
        .single();
      if (error) throw error;

      const row = data as Entry;
      setEntries((prev) => (prev.some((en) => en.id === row.id) ? prev : [row, ...prev]));
      setFreshId(row.id);
      setName("");
      setEmail("");
      setMessage("");
      setStatus("sent");

      try {
        await sendMessage({ data: payload });
      } catch (mailErr) {
        console.error(mailErr);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="guestbook" className="relative px-5 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionTitle
          title="Guest Book"
          subtitle="Leave a little spark before you drift away."
        />

        <Reveal>
          <form onSubmit={onSubmit} className="glass grid gap-4 p-6">
            <div className="grid gap-2">
              <Label htmlFor="gb-name">Name</Label>
              <Input
                id="gb-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                maxLength={80}
                className="border-primary/30 bg-background/20"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gb-email">Email</Label>
              <Input
                id="gb-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                maxLength={160}
                className="border-primary/30 bg-background/20"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="gb-message">Message</Label>
              <Textarea
                id="gb-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write something magical…"
                rows={4}
                required
                maxLength={2000}
                className="border-primary/30 bg-background/20"
              />
            </div>
            <Button
              type="submit"
              variant="magic"
              size="pill"
              disabled={status === "sending"}
              className="justify-self-center"
            >
              {status === "sending" ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Send className="size-4" />
              )}
              {status === "sending" ? "Sending…" : "Send Message"}
            </Button>
            {status === "sent" && (
              <p className="text-center text-sm text-primary">
                ✦ Thank you! Your message has been added.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-destructive">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </Reveal>

        <h3 className="font-display mt-12 mb-5 text-center text-2xl">Recent Messages</h3>
        <ul className="grid gap-4">
          {entries.length === 0 && (
            <li className="text-center text-sm text-muted-foreground">
              No messages yet — be the first to leave one ✦
            </li>
          )}
          {entries.map((entry) => (
            <li key={entry.id} className="glass glass-hover relative overflow-hidden p-5">
              {freshId === entry.id && (
                <span
                  aria-hidden
                  className="animate-sparkle-pop pointer-events-none absolute inset-0 grid place-items-center text-4xl text-primary"
                >
                  ✦
                </span>
              )}
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 shrink-0 text-primary" />
                <p className="font-display truncate text-lg">{entry.name}</p>
                <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                  {formatDate(entry.created_at)}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
