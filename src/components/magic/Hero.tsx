import { Link } from "@tanstack/react-router";
import { PenLine, FileBadge2, Library, Users } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="px-5 py-20 text-center">
      <h1 className="font-display text-4xl font-bold">Hi, I'm Ainiya F. Haura</h1>
      <p className="mt-4 text-lg text-muted-foreground">Writer, Creator & Youth Advocate</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Reveal delay={0}>
          <Link to="/journey" className="glass glass-hover block rounded-2xl p-5">
            <span className="logo-frame mx-auto mb-4 size-12 flex items-center justify-center">
              <PenLine className="size-5 text-primary" />
            </span>
            <h3 className="font-display text-xl">My Journey</h3>
            <p className="mt-1 text-sm text-muted-foreground">The story behind who I am today</p>
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <Link to="/experience" className="glass glass-hover block rounded-2xl p-5">
            <span className="logo-frame mx-auto mb-4 size-12 flex items-center justify-center">
              <FileBadge2 className="size-5 text-primary" />
            </span>
            <h3 className="font-display text-xl">Experience & Honors</h3>
            <p className="mt-1 text-sm text-muted-foreground">Things I've done, and proud of</p>
          </Link>
        </Reveal>

        <Reveal delay={200}>
          <Link to="/archive" className="glass glass-hover block rounded-2xl p-5">
            <span className="logo-frame mx-auto mb-4 size-12 flex items-center justify-center">
              <Library className="size-5 text-primary" />
            </span>
            <h3 className="font-display text-xl">My Digital Archive</h3>
            <p className="mt-1 text-sm text-muted-foreground">Writings, projects, and moments</p>
          </Link>
        </Reveal>

        <Reveal delay={300}>
          <Link to="/contact" className="glass glass-hover block rounded-2xl p-5">
            <span className="logo-frame mx-auto mb-4 size-12 flex items-center justify-center">
              <Users className="size-5 text-primary" />
            </span>
            <h3 className="font-display text-xl">Contact Me</h3>
            <p className="mt-1 text-sm text-muted-foreground">Let's connect and create together</p>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
