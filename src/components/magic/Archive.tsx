import { PenLine, Code2, Award, Library as LibraryIcon, FileText, Image, BookOpen, Bookmark, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Link } from "@tanstack/react-router";
import { Documentation } from "./Documentation";

export function Archive() {
  return (
    <section id="archive" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="My Digital Archive"
          subtitle="Writings, projects, and moments — all in one constellation."
        />

        <div className="grid gap-5">
          {/* PROJECTS */}
          <Reveal key="Projects" delay={0}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <Code2 className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl">Projects</h3>
              <ul className="mt-3 grid gap-2">
                <li>
                  <Link to="/website-apps" className="flex items-center justify-between text-muted-foreground transition-colors hover:text-primary">
                    <span className="flex items-center gap-2"><span className="text-primary">✦</span>Website / Apps</span>
                    <span>&lt;/&gt;</span>
                  </Link>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">✦</span>UI/UX
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">✦</span>Cybersecurity
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>

          {/* HONORS */}
          <Reveal key="Honors" delay={100}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <Award className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl">Honors</h3>
              <ul className="mt-3 grid gap-2">
                <li>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">✦</span>Certificates
                  </span>
                </li>
                <li>
                  <Link to="#documentation" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                    <span className="text-primary">✦</span>Documentation
                  </Link>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">✦</span>Event Galleries
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>

          {/* LIBRARY */}
          <Reveal key="Library" delay={200}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <LibraryIcon className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl">Library</h3>
              <ul className="mt-3 grid gap-2">
                <li>
                  <span className="flex items-center justify-between text-muted-foreground">
                    <span className="flex items-center gap-2"><span className="text-primary">✦</span>Book Collection</span>
                    <BookOpen size={16} className="text-primary" />
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">✦</span>Reading Notes
                  </span>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary">✦</span>Favourite Quotes
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>
        </div>

        {/* DOCUMENTATION */}
        <div className="mt-12">
          <Documentation />
        </div>
      </div>
    </section>
  );
}
