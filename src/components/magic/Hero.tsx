import { BookOpen, Trophy, FolderHeart, MailOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import sky from "@/assets/sky.jpg";

const quickLinks = [
  { id: "journey", icon: BookOpen, title: "My Journey", sub: "The story behind who I am today" },
  {
    id: "experience",
    icon: Trophy,
    title: "Experience & Achievement",
    sub: "Things I've done, and proud of",
  },
  {
    id: "archive",
    icon: FolderHeart,
    title: "My Digital Archive",
    sub: "Writings, projects, and moments",
  },
  { id: "contact", icon: MailOpen, title: "Contact Me", sub: "Let's connect and create together" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-5 pt-28 pb-20">
      <img
        src={sky}
        alt=""
        aria-hidden
        width={1024}
        height={1536}
        className="pointer-events-none absolute inset-0 -z-10 size-full object-cover opacity-45"
      />
      <div className="relative mx-auto w-full max-w-xl text-center">
        <Reveal>
          <h1 className="text-6xl font-medium tracking-tight sm:text-7xl">Welcome</h1>
          <p className="mt-2 font-display text-lg italic text-primary">
            ✦ to my little universe ✦
          </p>
        </Reveal>

        <Reveal delay={120} className="my-10 flex justify-center">
          <div className="animate-floaty relative grid size-40 place-items-center rounded-full border border-primary/40 shadow-[0_0_50px_oklch(0.88_0.13_90/25%)]">
            <span className="text-6xl">🪶</span>
            <span className="animate-twinkle absolute -top-1 left-4 text-primary">✦</span>
            <span className="animate-twinkle absolute right-2 bottom-4 text-primary">✦</span>
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
              <a
                href={`#${l.id}`}
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
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">Scroll to explore</p>
      </div>
    </section>
  );
}