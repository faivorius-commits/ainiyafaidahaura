import { useEffect, useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "Let's connect",
    href: "mailto:hello@ainiya.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Professional space",
    href: "#",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "Digital diary",
    href: "#",
  },
];

const terminalLines = [
  "> booting access point...",
  "> verifying identity...",
  "> loading communication protocol...",
  "> access granted_",
];

function TerminalIntro({ onComplete }: { onComplete: () => void }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [exiting, setExiting] = useState(false);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
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
            setGranted(true);
          }
        }, 550);
      }
    }, 38);

    return () => clearInterval(typing);
  }, [lineIndex]);

  const handleEnter = () => {
    setExiting(true);

    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <div
      className={`absolute inset-0 z-20 flex items-start justify-center px-4 transition-all duration-700 ${
        exiting ? "scale-95 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{
        paddingTop: "clamp(0.75rem, 3vh, 2.5rem)",
      }}
    >
      <div className="w-full max-w-xl rounded-2xl border border-primary/20 bg-background/60 p-5 shadow-[0_0_80px_hsl(var(--primary)/0.08)] backdrop-blur-xl sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 text-xs text-muted-foreground">
            secure-terminal
          </span>
        </div>

        <div className="min-h-[150px] font-mono text-xs leading-7 text-primary/80 sm:text-sm">
          {terminalLines.slice(0, lineIndex).map((line, index) => (
            <div key={index}>{line}</div>
          ))}

          <div>
            {text}
            <span className="ml-1 animate-pulse">▋</span>
          </div>
        </div>

        {granted && (
          <button
            type="button"
            className="security-enter-button"
            onClick={handleEnter}
          >
            <span>ACCESS THE ARCHIVE</span>
            <span className="security-enter-arrow">→</span>
          </button>
        )}
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <Reveal>
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs tracking-[0.2em] text-primary">
            <ShieldCheck className="h-4 w-4" />
            SECURE CHANNEL
          </div>

          <h2 className="font-serif text-4xl text-foreground sm:text-5xl md:text-6xl">
            Access Point
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            A quiet space for meaningful conversations, collaborations, ideas,
            and digital connections.
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400/80">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            CONNECTION AVAILABLE
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {channels.map((channel, index) => {
          const Icon = channel.icon;

          return (
            <Reveal key={channel.label} delay={index * 0.1}>
              <a
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  channel.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group relative block overflow-hidden rounded-2xl border border-primary/10 bg-background/30 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>

                <div className="text-xs tracking-[0.18em] text-muted-foreground">
                  {channel.label}
                </div>

                <div className="mt-2 font-serif text-xl text-foreground">
                  {channel.value}
                </div>

                <div className="mt-5 h-px w-0 bg-primary/40 transition-all duration-500 group-hover:w-full" />
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.3}>
        <div className="mt-12 text-center">
          <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground sm:text-xs">
            CHANNEL ENCRYPTED · CONNECTION STABLE · READY TO RECEIVE
          </p>
        </div>
      </Reveal>
    </div>
  );
}

export function Contact() {
  const [accessGranted, setAccessGranted] = useState(false);

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] overflow-hidden px-5 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-[15%] top-[30%] h-1.5 w-1.5 animate-ping rounded-full bg-primary/40" />

      <div className="pointer-events-none absolute right-[18%] top-[55%] h-1 w-1 animate-ping rounded-full bg-primary/30 [animation-delay:1s]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:40px_40px]" />

      {!accessGranted && (
        <TerminalIntro onComplete={() => setAccessGranted(true)} />
      )}

      <div
        className={`relative transition-all duration-1000 ${
          accessGranted
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
      >
        <ContactContent />
      </div>
    </section>
  );
}
