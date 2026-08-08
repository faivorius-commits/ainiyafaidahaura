import { PenLine, Code2, Users, Library as LibraryIcon, ExternalLink, Feather, BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const HEAL_URL =
  "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fqrcbn%2Ecom%2Fcheck%2F62-6264-2709-644&urlhash=G5Vl&mt=1teoDSHvMUFvAMyOZvTZKRUxfUz4YPNmGS4c-mKdGl4mahs4VpEYYkKu1GMpQesvw9lXmzcm70BmZtLe2zgqEuvDcSHA&isSdui=true";

const categories = [
  { icon: PenLine, title: "Writing", items: ["Articles"] },
  {
    icon: Code2,
    title: "Projects",
    items: ["UI/UX", "Cybersecurity"],
  },
  {
    icon: Users,
    title: "Organizations",
    items: ["Certificates", "Documentation", "Event Galleries"],
  },
  {
    icon: LibraryIcon,
    title: "Library",
    items: ["Reading Notes", "Favourite Quotes"],
  },
];

const projects = [
  {
    title: "Cozy Teddy Town — Minisuperasep",
    url: "https://minisuperasep-town.vercel.app",
    label: "minisuperasep-town.vercel.app",
    image: "/images/teddy-town-logo.jpg",
    description:
      "Cozy web application where users build friendships with virtual teddy bears by reading daily letters, collecting unique characters, and tracking their progress through an interactive, responsive interface.",
  },
  {
    title: "Save The Light: Protect The Deer",
    image: "/images/save-the-light.jpg",
    description: "Protect the magical deer from red eyes.",
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
                  {c.title === "Writing" && (
                    <>
                      <li>
                        <Link
                          to="/poetry"
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          <span className="text-primary">✦</span>
                          Poetry
                          <Feather className="ml-auto size-3.5 text-primary" />
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#short-stories"
                          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          <span className="text-primary">✦</span>
                          Short Stories
                        </a>
                      </li>
                    </>
                  )}
                  {c.title === "Projects" && (
                    <li>
                      <a
                        href="#projects"
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <span className="text-primary">✦</span>
                        Website / Apps
                      </a>
                    </li>
                  )}
                  {c.title === "Library" && (
                    <li>
                      <Link
                        to="/library"
                        className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <span className="text-primary">✦</span>
                        Book Collection
                        <BookOpen className="ml-auto size-3.5 text-primary" />
                      </Link>
                    </li>
                  )}
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

        <div id="short-stories" className="mt-20 scroll-mt-28">
          <SectionTitle
            title="Short Stories"
            subtitle="Stories published in print — small worlds folded into paper."
          />
          <Reveal>
            <article className="glass glass-hover p-5">
              <span className="logo-frame mb-4 size-12">
                <PenLine className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl leading-tight">
                “Heal” — Short Story Anthology, Festival Sastra Volume 6
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A published short story anthology featuring my work, released as part of Festival
                Sastra Volume 6.
              </p>
              <a
                href={HEAL_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                QRCBN
                <ExternalLink className="size-3" />
              </a>
            </article>
          </Reveal>
        </div>

        <div id="projects" className="mt-20 scroll-mt-28">
          <SectionTitle
            title="Projects — Website / Apps"
            subtitle="Things I built with code, curiosity, and a bit of magic."
          />
          <div className="grid gap-4">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="glass glass-hover h-full p-5">
                  <span className="logo-frame mb-4 size-12 overflow-hidden p-0">
                    <img src={p.image} alt={p.title} className="size-full object-cover" />
                  </span>
                  <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                  {p.url && p.label && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      {p.label}
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="mt-12 flex flex-wrap justify-center gap-3">
          <Button variant="magic" size="pill" asChild>
            <Link to="/library">Open the Library</Link>
          </Button>
          <Button variant="magic" size="pill" asChild>
            <Link to="/contact">Let's Connect</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
