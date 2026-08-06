import { useState, type FormEvent } from "react";
import { Sparkles, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Entry = { id: number; name: string; message: string; date: string; fresh?: boolean };

const initialEntries: Entry[] = [
  {
    id: 1,
    name: "Nadia",
    message: "Your writing always feels like moonlight on paper. Keep shining! ✨",
    date: "July 2026",
  },
];

export function GuestBook() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setEntries((prev) => [
      {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        date: "Just now",
        fresh: true,
      },
      ...prev,
    ]);
    setName("");
    setEmail("");
    setMessage("");
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
                className="border-primary/30 bg-background/20"
              />
            </div>
            <Button type="submit" variant="magic" size="pill" className="justify-self-center">
              <Send className="size-4" />
              Send Message
            </Button>
          </form>
        </Reveal>

        <h3 className="font-display mt-12 mb-5 text-center text-2xl">Recent Messages</h3>
        <ul className="grid gap-4">
          {entries.map((entry) => (
            <li key={entry.id} className="glass glass-hover relative overflow-hidden p-5">
              {entry.fresh && (
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
                <span className="ml-auto shrink-0 text-xs text-muted-foreground">{entry.date}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}