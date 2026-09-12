import { PenLine, Code2, Image as GalleryIcon, Library as LibraryIcon, Feather, BookOpen, ExternalLink, Camera, FlaskConical } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function Archive() {
  return (
    <section id="archive" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="My Digital Archive" subtitle="Writings, projects, and moments — all in one constellation." />
        <div className="grid gap-5 sm:grid-cols-2">
          {/* PROJECTS */}
          <Reveal key="Projects" delay={0}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12"><Code2 className="size-5 text-primary" /></span>
              <h3 className="font-display text-xl">Projects</h3>
              <ul className="mt-3 grid gap-2">
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Cybersecurity</span></li>
                <li><Link to="/website-apps" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><span className="text-primary">✦</span>Web, App & Interface Design<Code2 className="ml-auto size-3.5 text-primary" /></Link></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Research & Analysis<FlaskConical className="ml-auto size-3.5 text-primary" /></span></li>
              </ul>
            </article>
          </Reveal>

          {/* WRITING */}
          <Reveal key="Writing" delay={110}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12"><PenLine className="size-5 text-primary" /></span>
              <h3 className="font-display text-xl">Writing</h3>
              <ul className="mt-3 grid gap-2">
                <li><Link to="/poetry" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><span className="text-primary">✦</span>Poetry<Feather className="ml-auto size-3.5 text-primary" /></Link></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Short Stories</span></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Articles</span></li>
              </ul>
            </article>
          </Reveal>

          {/* GALLERY */}
          <Reveal key="Gallery" delay={220}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12"><GalleryIcon className="size-5 text-primary" /></span>
              <h3 className="font-display text-xl">Gallery</h3>
              <ul className="mt-3 grid gap-2">
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Certificates</span></li>
                <li><Link to="/documentation" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><span className="text-primary">✦</span>Documentation<Camera className="ml-auto size-3.5 text-primary" /></Link></li>
                <li><Link to="/gallery" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><span className="text-primary">✦</span>Event Photos<GalleryIcon className="ml-auto size-3.5 text-primary" /></Link></li>
              </ul>
            </article>
          </Reveal>

          {/* LIBRARY */}
          <Reveal key="Library" delay={330}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12"><LibraryIcon className="size-5 text-primary" /></span>
              <h3 className="font-display text-xl">Library</h3>
              <ul className="mt-3 grid gap-2">
                <li><Link to="/library" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><span className="text-primary">✦</span>Book Collection<BookOpen className="ml-auto size-3.5 text-primary" /></Link></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Reading Notes</span></li>
                <li><span className="flex items-center gap-2 text-sm text-muted-foreground"><span className="text-primary">✦</span>Favourite Quotes</span></li>
              </ul>
            </article>
          </Reveal>

          {/* PUBLICATION */}
          <Reveal key="Publication" delay={440}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12"><PenLine className="size-5 text-primary" /></span>
              <h3 className="font-display text-xl">Publication</h3>
              <ul className="mt-3 grid gap-2">
                <li>
                  <Link to="/publication" className="flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-primary">
                    <span className="flex items-center gap-2"><span className="text-primary">✦</span>Published Works</span>
                    <ExternalLink size={14} className="text-primary" />
                  </Link>
                </li>
              </ul>
            </article>
          </Reveal>
        </div>

        {/* BUTTON */}
        <Reveal delay={550} className="mt-12 flex flex-wrap justify-center gap-3">
          <Button variant="magic" size="pill" asChild><Link to="/library">Open the Library</Link></Button>
          <Button variant="magic" size="pill" asChild><Link to="/contact">Let's Connect</Link></Button>
        </Reveal>
      </div>
    </section>
  );
}
