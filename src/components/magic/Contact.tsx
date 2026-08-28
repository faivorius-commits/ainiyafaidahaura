import { Instagram, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const channels = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@fiivoor",
    href: "https://www.instagram.com/fiivoor",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Ainiya Faida Haura",
    href: "https://www.linkedin.com/in/ainiyafaidahaura",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ainiyafaidahaura@gmail.com",
    href: "mailto:ainiyafaidahaura@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24">
      <div className="mx-auto max-w-xl text-center">
        <SectionTitle
          title="Let's Connect"
          subtitle="Feel free to reach out through these platforms."
        />

        <div className="grid gap-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass glass-hover flex items-center gap-4 px-5 py-4 text-left"
              >
                <span className="logo-frame size-12 shrink-0">
                  <c.icon className="size-5 text-primary" />
                </span>
                <span className="min-w-0">
                  <span className="font-display block text-lg">{c.label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{c.value}</span>
                </span>
                <span className="animate-twinkle ml-auto shrink-0 text-primary">✦</span>
              </a>
            </Reveal>
          ))}
        </div>
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
      <p className="mt-2 text-xs text-muted-foreground">© 2026 Ainiya Faida Haura</p>
    </footer>
  );
}
