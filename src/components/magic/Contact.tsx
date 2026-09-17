import { useEffect, useState } from "react";
import { Instagram, Linkedin, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const channels = [
  {
    icon: Mail,
    number: "01",
    label: "EMAIL",
    value: "ainiyafaidahaura@gmail.com",
    description: "Open a direct communication channel",
    href: "mailto:ainiyafaidahaura@gmail.com",
    action: "SEND SIGNAL",
  },
  {
    icon: Linkedin,
    number: "02",
    label: "LINKEDIN",
    value: "Ainiya Faida Haura",
    description: "Connect through my professional network",
    href: "https://www.linkedin.com/in/ainiyafaidahaura",
    action: "CONNECT",
  },
  {
    icon: Instagram,
    number: "03",
    label: "INSTAGRAM",
    value: "@fiivoor",
    description: "Enter my visual universe",
    href: "https://www.instagram.com/fiivoor",
    action: "ENTER",
  },
];

const terminalLines = [
  "> booting access point...",
  "> verifying identity...",
  "> establishing communication channels...",
  "> connection ready_",
];

function TerminalTyping({ onComplete }: { onComplete: () => void }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      setDone(true);
      onComplete();
      return;
    }

    const currentLine = terminalLines[lineIndex];
    let characterIndex = 0;

    const typing = setInterval(() => {
      setText(currentLine.slice(0, characterIndex + 1));
      characterIndex++;

      if (characterIndex >= currentLine.length) {
        clearInterval(typing);

        setTimeout(() => {
          if (lineIndex < terminalLines.length - 1) {
            setLineIndex((prev) => prev + 1);
            setText("");
          } else {
            setDone(true);
            onComplete();
          }
        }, 500);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [lineIndex, onComplete]);

  return (
    <div className="space-y-1 font-mono text-[10px] tracking-wide text-muted-foreground">
      {terminalLines.slice(0, lineIndex).map((line) => (
        <div key={line}>
          <span className="text-primary">{line.slice(0, 1)}</span>
          {line.slice(1)}
        </div>
      ))}

      {!done && (
        <div>
          <span className="text-primary">{text.slice(0, 1)}</span>
          {text.slice(1)}
          <span className="ml-0.5 animate-pulse text-primary">▌</span>
        </div>
      )}

      {done && (
        <div className="animate-pulse">
          <span className="text-primary">&gt;</span> connection ready
          <span className="ml-1 text-primary">▌</span>
        </div>
      )}
    </div>
  );
}

export function Contact() {
  const [terminalComplete, setTerminalComplete] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] overflow-hidden px-5 py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[20%] size-80 -translate-x-1/2 animate-pulse rounded-full bg-primary/10 blur-[110px]" />
        <div className="absolute left-[8%] top-[25%] size-1.5 animate-ping rounded-full bg-primary" />
        <div className="absolute right-[12%] top-[40%] size-1 animate-ping rounded-full bg-primary [animation-delay:1.2s]" />
        <div className="absolute bottom-[20%] left-[20%] size-1 animate-ping rounded-full bg-primary [animation-delay:2s]" />
        <div className="absolute bottom-[30%] right-[22%] size-1.5 animate-ping rounded-full bg-primary [animation-delay:1.6s]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="mx-auto max-w-xl">
          <div className="rounded-xl border border-border/60 bg-background/30 p-5 text-left shadow-[0_0_50px_hsl(var(--primary)/0.05)] backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 border-b border-border/50 pb-3">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
              <span className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
                ACCESS_POINT.exe
              </span>
              <span className="ml-auto font-mono text-[8px] text-primary">
                ONLINE
              </span>
            </div>

            <TerminalTyping
              onComplete={() => setTerminalComplete(true)}
            />
          </div>
        </div>

        {terminalComplete && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Reveal delay={100}>
              <div className="mt-10 text-center">
                <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-primary">
                  <ShieldCheck className="size-3.5" />
                  SECURE CHANNEL
                  <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                </div>

                <h2 className="font-display text-5xl tracking-tight md:text-6xl">
                  Access{" "}
                  <span className="italic text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.25)]">
                    Point
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                  A professional point of contact for collaboration,
                  opportunities, and meaningful connections.
                  <br />
                  Select your preferred channel.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="my-10 flex items-center justify-center gap-3 font-mono text-[9px] tracking-[0.18em] text-muted-foreground">
                <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                SYSTEM ONLINE
                <span className="text-border">/</span>
                03 CHANNELS AVAILABLE
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {channels.map((channel, i) => {
                const Icon = channel.icon;

                return (
                  <Reveal key={channel.label} delay={350 + i * 150}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group relative block h-full overflow-hidden rounded-2xl border border-border/70 bg-background/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/50 hover:bg-primary/[0.04] hover:shadow-[0_25px_70px_-30px_hsl(var(--primary)/0.5)]"
                    >
                      <span className="pointer-events-none absolute left-0 top-0 h-px w-full -translate-x-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

                      <span className="pointer-events-none absolute -right-20 -top-20 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="mb-8 flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                            CHANNEL_{channel.number}
                          </span>

                          <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                        </div>

                        <div className="mb-6 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.18)]">
                          <Icon className="size-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="font-mono text-[10px] tracking-[0.22em] text-primary">
                          {channel.label}
                        </div>

                        <div className="mt-2 truncate font-display text-lg">
                          {channel.value}
                        </div>

                        <p className="mt-3 min-h-10 text-xs leading-5 text-muted-foreground">
                          {channel.description}
                        </p>

                        <div className="mt-7 flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                          <span className="size-1.5 rounded-full bg-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_10px_hsl(var(--primary))]" />
                          {channel.action}
                          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            _
                          </span>
                        </div>
                      </div>

                      <span className="absolute bottom-0 left-0 h-px w-0 bg-primary shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-700 group-hover:w-full" />
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={850}>
              <div className="mt-14 text-center font-mono text-[9px] tracking-[0.18em] text-muted-foreground">
                <span className="text-primary">&gt;</span>{" "}
                awaiting your signal
                <span className="ml-1 animate-pulse text-primary">▌</span>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-10 text-center">
      <p className="font-display text-lg">
        Made with curiosity, imagination, and a little bit of magic ✨
      </p>

      <p className="mt-2 font-mono text-[10px] tracking-wider text-muted-foreground">
        © 2026 Ainiya Faida Haura · CONNECTION TERMINATED_
      </p>
    </footer>
  );
                  }
