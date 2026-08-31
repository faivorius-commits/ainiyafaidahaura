import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { PenLine, ExternalLink } from "lucide-react";

const HEAL_URL = "https://qrcbn.com/check/62-6264-2709-644";
const SPRING_URL = "";

export function Publication() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Publication"
          subtitle="Stories published in print — small worlds folded into paper."
        />
        <div className="grid gap-5 mt-8">
          <Reveal>
            <article className="glass glass-hover p-5">
              <span className="logo-frame mb-4 size-12">
                <PenLine className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl leading-tight">
                “Heal” — Short Story Anthology, Festival Sastra Volume 6
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                ISBN: <span className="text-xs text-muted-foreground/80">62-6264-2709-644</span>
              </p>
              <a
                href={HEAL_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
              >
                Buka Buku <ExternalLink className="size-3" />
              </a>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="glass glass-hover p-5">
              <span className="logo-frame mb-4 size-12">
                <PenLine className="size-5 text-primary" />
              </span>
              <h3 className="font-display text-xl leading-tight">
                “A Little More Spring” — Poetry Anthology, Her Story In Your Poem
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                ISBN: <span className="text-xs text-muted-foreground/80">978-81-904011-0-4</span>
              </p>
              {SPRING_URL ? (
                <a
                  href={SPRING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  Buka Buku <ExternalLink className="size-3" />
                </a>
              ) : null}
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

