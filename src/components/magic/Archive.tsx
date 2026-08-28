import { PenLine, Code2, Users, Library as LibraryIcon, Feather, BookOpen, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const HEAL_URL = "https://qrcbn.com/check/62-6264-2709-644";

export function Archive() {
  return (
    <section id="archive" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="My Digital Archive"
          subtitle="Writings, projects, and moments — all in one constellation."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal key="Writing" delay={0}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <PenLine className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl">Writing</h3>
              <ul className="mt-3 grid gap-2">
                <li>
                  <Link to="/poetry" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                    <span className="text-primary">✦</span>Poetry<Feather className="ml-auto size-3.5 text-primary" />
                  </Link>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>Short Stories
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>Articles
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal key="Projects" delay={110}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <Code2 className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl">Projects</h3>
              <ul className="mt-3 grid gap-2">
                <li>
                  <Link to="/website-apps" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                    <span className="text-primary">✦</span>Website / Apps
                  </Link>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>UI/UX
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>Cybersecurity
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal key="Organizations" delay={220}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <Users className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl">Organizations</h3>
              <ul className="mt-3 grid gap-2">
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Certificates</span></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Documentation</span></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Event Galleries</span></li>
              </ul>
            </article>
          </Reveal>

          <Reveal key="Library" delay={330}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <LibraryIcon className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl">Library</h3>
              <ul className="mt-3 grid gap-2">
                <li>
                  <Link to="/library" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                    <span className="text-primary">✦</span>Book Collection<BookOpen className="ml-auto size-3.5 text-primary" />
                  </Link>
                </li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Reading Notes</span></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Favourite Quotes</span></li>
              </ul>
            </article>
          </Reveal>
        </div>

        <div id="publication" className="mt-20 scroll-mt-28">
          <SectionTitle title="Publication" subtitle="Stories published in print — small worlds folded into paper." />
          <Reveal>
            <article className="glass glass-hover p-5">
              <span className="logo-frame mb-4 size-12"><PenLine className="size-5 text-primary" /></span>
              <h3 className="font-display text-xl leading-tight">“Heal” — Short Story Anthology, Festival Sastra Volume 6</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A published short story anthology featuring my work, released as part of Festival Sastra Volume 6.</p>
              <a href={HEAL_URL} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20">
                QRCBN<ExternalLink className="size-3" />
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-12 flex flex-wrap justify-center gap-3">
          <Button variant="magic" size="pill" asChild><Link to="/library">Open the Library</Link></Button>
          <Button variant="magic" size="pill" asChild><Link to="/contact">Let's Connect</Link></Button>
        </Reveal>
      </div>
    </section>
  );
}
