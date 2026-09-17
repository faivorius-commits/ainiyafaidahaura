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

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[85vh] overflow-hidden px-5 py-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 size-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute left-[10%] top-[20%] size-1 animate-pulse rounded-full bg-primary" />
        <div className="absolute right-[15%] top-[35%] size-1 animate-pulse rounded-full bg-primary [animation-delay:1s]" />
        <div className="absolute bottom-[20%] left-[25%] size-1 animate-pulse rounded-full bg-primary [animation-delay:2s]" />
        <div className="absolute bottom-[30%] right-[25%] size-1 animate-pulse rounded-full bg-primary [animation-delay:1.5s]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Terminal header */}
        <Reveal>
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-primary">
              <ShieldCheck className="size-3.5 animate-pulse" />
              SECURE CHANNEL
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            </div>

            <div className="mb-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
              &gt; initializing_connection...
            </div>

            <h2 className="font-display text-5xl tracking-tight md:text-6xl">
              Access <span className="italic text-primary">Point</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              A direct gateway into Ainiya's universe.
              <br />
              Choose a channel to establish a connection.
            </p>
          </div>
        </Reveal>

        {/* Terminal status */}
        <Reveal delay={150}>
          <div className="mb-8 rounded-xl border border-border/60 bg-black/10 px-4 py-3 font-mono text-[10px] text-muted-foreground backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start">
              <span>
                <span className="text-primary">&gt;</span> IDENTITY:{" "}
                <span className="text-foreground">AINIYA</span>
              </span>
              <span>
                <span className="text-primary">&gt;</span> STATUS:{" "}
                <span className="text-primary">READY</span>
              </span>
              <span>
                <span className="text-primary">&gt;</span> CHANNELS:{" "}
                <span className="text-foreground">03</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Connection cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = channel.icon;

            return (
              <Reveal key={channel.label} delay={250 + i * 120}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border/70 bg-background/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-primary/[0.04] hover:shadow-[0_20px_60px_-25px_hsl(var(--primary)/0.35)]"
                >
                  {/* Scan line */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-px -translate-x-full bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  {/* Glow */}
                  <span className="pointer-events-none absolute -right-16 -top-16 size-32 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                        CHANNEL_{channel.number}
                      </span>

                      <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    <div className="mb-6 flex size-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/10">
                      <Icon className="size-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    <div className="font-mono text-xs tracking-[0.2em] text-primary">
                      {channel.label}
                    </div>

                    <div className="mt-2 truncate font-display text-lg">
                      {channel.value}
                    </div>

                    <p className="mt-3 min-h-10 text-xs leading-5 text-muted-foreground">
                      {channel.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 font-mono text-[9px] tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-primary">
                      <span className="size-1.5 rounded-full bg-muted-foreground transition-colors group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary))]" />
                      {channel.action}
                      <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        _
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Footer terminal message */}
        <Reveal delay={700}>
          <div className="mt-12 text-center font-mono text-[10px] tracking-[0.15em] text-muted-foreground">
            <span className="text-primary">&gt;</span> connection_ready
            <span className="ml-1 inline-block animate-pulse">▌</span>
          </div>
        </Reveal>
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
