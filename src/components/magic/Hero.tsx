import { BookOpen, FileBadge2, FolderHeart, MailOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
const quickLinks = [
  { id: "journey", to: "/journey", icon: BookOpen, title: "My Journey", sub: "The story behind who I am today" },
  {
    id: "experience",
    to: "/experience",
    icon: Trophy,
    title: "Experience & Honors",
    sub: "Things I've done, and proud of",
  },
  {
    id: "archive",
    to: "/archive",
    icon: FolderHeart,
    title: "My Digital Archive",
    sub: "Writings, projects, and moments",
  },
  { id: "contact", to: "/contact", icon: MailOpen, title: "Contact Me", sub: "Let's connect and create together" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-5 pt-28 pb-20">
      <img
        src="/images/sky.jpg"
        alt=""
        aria-hidden
        width={1024}
        height={1536}
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(75% 55% at 50% 45%, oklch(0.18 0.09 293 / 55%), transparent 70%), linear-gradient(180deg, oklch(0.18 0.09 293 / 45%) 0%, oklch(0.2 0.09 293 / 25%) 45%, oklch(0.19 0.09 293 / 70%) 100%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-xl text-center">
        <Reveal>
          <h1 className="text-6xl font-medium tracking-tight sm:text-7xl">Welcome</h1>
          <p className="mt-2 font-display text-lg italic text-primary">
            ✦ to my little universe ✦
          </p>
        </Reveal>

        <Reveal delay={120} className="my-10 flex justify-center">
          <div className="animate-floaty relative grid size-44 place-items-center rounded-full border border-primary/40 p-1.5 shadow-[0_0_50px_oklch(0.88_0.13_90/25%)]">
            <img
              src="/images/ainiya.jpg"
              alt="Portrait of Ainiya Faida Haura"
              width={440}
              height={440}
              className="size-full rounded-full object-cover object-top"
            />
            <span className="animate-twinkle absolute -top-1 left-4 text-primary">✦</span>
            <span className="animate-twinkle absolute right-2 -bottom-1 text-primary">✦</span>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-display text-lg text-primary">✦ Hi I'm ✦</p>
          <p className="font-display mt-1 text-4xl font-medium sm:text-5xl">Ainiya Faida Haura</p>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            I am a young writer and creative thinker who explores the intersection of literature,
            youth advocacy, technology, and digital creativity. I believe in learning continuously,
            creating meaningfully, and using ideas to make an impact.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {quickLinks.map((l, i) => (
            <Reveal key={l.id} delay={i * 90}>
              <Link
                to={l.to}
                className="glass glass-hover flex items-center gap-4 px-4 py-3 text-left"
              >
                <span className="logo-frame size-11 shrink-0">
                  <l.icon className="size-5 text-primary" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="font-display block truncate text-lg">{l.title}</span>
                  <span className="block truncate text-xs text-muted-foreground">{l.sub}</span>
                </span>
                <span className="animate-twinkle shrink-0 text-primary">✦</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">Sign my guest book below ✦</p>
      </div>
    </section>
  );
}
