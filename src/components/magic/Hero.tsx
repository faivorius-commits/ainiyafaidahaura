import { Link } from "@tanstack/react-router";
import { PenLine, Code2, Users, Library, FileBadge2 } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="px-5 py-20 text-center">
      <h1 className="font-display text-4xl font-bold">Hi, I'm Ainiya F. Haura</h1>
      <p className="mt-4 text-lg text-muted-foreground">Writer, Creator & Youth Advocate</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal delay={0}>
          <Link to="/journey" className="glass glass-hover block rounded-2xl p-5">
            <PenLine className="mx-auto size-8 text-primary" />
            <span className="mt-2 block font-display">My Journey</span>
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <Link to="/experience" className="glass glass-hover block rounded-2xl p-5">
            <FileBadge2 className="mx-auto size-8 text-primary" />
            <span className="mt-2 block font-display">Experience & Honors</span>
          </Link>
        </Reveal>

        <Reveal delay={200}>
          <Link to="/archive" className="glass glass-hover block rounded-2xl p-5">
            <Library className="mx-auto size-8 text-primary" />
            <span className="mt-2 block font-display">Digital Archive</span>
          </Link>
        </Reveal>

        <Reveal delay={300}>
          <Link to="/contact" className="glass glass-hover block rounded-2xl p-5">
            <Users className="mx-auto size-8 text-primary" />
            <span className="mt-2 block font-display">Contact Me</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
