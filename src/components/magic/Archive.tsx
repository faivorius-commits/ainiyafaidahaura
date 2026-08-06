import { PenLine, Code2, Users, Library, BookOpen, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const categories = [
  { icon: PenLine, title: "Writing", items: ["Poetry", "Short Stories", "Articles"] },
  {
    icon: Code2,
    title: "Projects",
    items: ["Portfolio Website", "Mobile Apps", "UI/UX", "Cybersecurity"],
  },
  {
    icon: Users,
    title: "Organizations",
    items: ["Certificates", "Documentation", "Event Galleries"],
  },
  {
    icon: Library,
    title: "Library",
    items: ["Book Collection", "Reading Notes", "Favourite Quotes"],
  },
];

const books = [
  { title: "Laut Bercerita", author: "Leila S. Chudori", note: "Sejarah yang ditulis dengan luka dan cinta." },
  { title: "Bumi Manusia", author: "Pramoedya Ananta Toer", note: "Tentang keberanian melawan ketidakadilan." },
  { title: "Atomic Habits", author: "James Clear", note: "Perubahan kecil, hasil yang luar biasa." },
  { title: "The Little Prince", author: "Antoine de Saint-Exupéry", note: "Yang penting tak terlihat oleh mata." },
  { title: "Filosofi Teras", author: "Henry Manampiring", note: "Menenangkan pikiran ala Stoa." },
  { title: "Norwegian Wood", author: "Haruki Murakami", note: "Melankoli yang indah dan sunyi." },
];

const projects = [
  {
    title: "Cozy Teddy Town — Minisuperasep",
    url: "https://minisuperasep-town-vercel.app",
    label: "minisuperasep-town-vercel.app",
    description:
      "Cozy web application where users build friendships with virtual teddy bears by reading daily letters, collecting unique characters, and tracking their progress through an interactive, responsive interface. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  },
];

export function Archive() {
  return (
    <section id="archive" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="My Digital Archive"
          subtitle="Writings, projects, and moments — all in one constellation."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <article className="glass glass-hover h-full p-5">
                <span className="logo-frame mb-4 size-12">
                  <c.icon className="size-5 text-primary" />
                </span>
                <h3 className="font-display text-xl">{c.title}</h3>
                <ul className="mt-3 grid gap-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionTitle
            title="Projects"
            subtitle="Things I built with code, curiosity, and a bit of magic."
          />
          <div className="grid gap-4">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="glass glass-hover h-full p-5">
                  <span className="logo-frame mb-4 size-12">
                    <Code2 className="size-5 text-primary" />
                  </span>
                  <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                  >
                    {p.label}
                    <ExternalLink className="size-3" />
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            title="Library"
            subtitle="A little shelf of books that shaped the way I think and write."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {books.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <article className="glass glass-hover flex h-full items-start gap-4 p-4">
                  <span className="logo-frame size-12 shrink-0">
                    <BookOpen className="size-5 text-primary" />
                  </span>
                  <span className="min-w-0">
                    <h3 className="font-display text-lg leading-tight">{b.title}</h3>
                    <p className="text-xs text-primary">{b.author}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{b.note}</p>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Button variant="magic" size="pill" asChild>
            <Link to="/contact">Let's Connect</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}