import { useState } from "react";
import { ArrowLeft, Feather, Flower2, Leaf, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { poems, type Poem } from "@/lib/poems";

function Ornaments() {
  return (
    <>
      <Flower2
        aria-hidden
        className="pointer-events-none absolute -top-3 -left-3 size-10 rotate-[-18deg] text-[oklch(0.62_0.09_25/45%)]"
      />
      <Leaf
        aria-hidden
        className="pointer-events-none absolute -right-3 -bottom-3 size-10 rotate-[24deg] text-[oklch(0.58_0.08_140/40%)]"
      />
      <span
        aria-hidden
        className="animate-twinkle pointer-events-none absolute top-4 right-5 text-[oklch(0.72_0.11_75/60%)]"
      >
        ✦
      </span>
    </>
  );
}

function PoemSheet({ poem, onBack }: { poem: Poem; onBack: () => void }) {
  let line = 0;
  return (
    <div className="animate-page-open">
      <button
        type="button"
        onClick={onBack}
        className="glass glass-hover mb-6 inline-flex items-center gap-2 px-4 py-2 text-sm"
      >
        <ArrowLeft className="size-4 text-primary" />
        All poems
      </button>

      <article className="paper paper-torn relative mx-auto max-w-2xl px-6 py-12 sm:px-14 sm:py-16">
        <Ornaments />
        <header className="text-center">
          <Feather aria-hidden className="mx-auto size-6 text-[oklch(0.55_0.06_60/70%)]" />
          <h1 className="font-display ink mt-3 text-4xl leading-tight sm:text-5xl">{poem.title}</h1>
          <p className="ink-muted mt-2 text-sm tracking-widest uppercase">{poem.author}</p>
          <div className="ink-muted mx-auto mt-4 flex items-center justify-center gap-2 text-xs">
            <span className="h-px w-10 bg-current opacity-40" />✦
            <span className="h-px w-10 bg-current opacity-40" />
          </div>
        </header>

        <div className="mt-10 grid gap-8">
          {poem.stanzas.map((stanza, si) => (
            <p key={si} className="font-display text-center text-xl leading-relaxed sm:text-2xl">
              {stanza.map((l) => {
                line += 1;
                return (
                  <span
                    key={l + line}
                    className="animate-line-in ink block"
                    style={{ animationDelay: `${180 + line * 70}ms` }}
                  >
                    {l}
                  </span>
                );
              })}
            </p>
          ))}
        </div>

        <footer className="ink-muted mt-12 text-center font-display text-lg italic">
          {poem.date}
        </footer>
      </article>
    </div>
  );
}

export function Poetry() {
  const [active, setActive] = useState<Poem | null>(null);

  return (
    <section id="poetry" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        {active ? (
          <PoemSheet poem={active} onBack={() => setActive(null)} />
        ) : (
          <>
            <SectionTitle
              title="Poetry"
              subtitle="A little collection of poems — written on paper, kept in starlight."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {poems.map((p, i) => (
                <Reveal key={p.slug} delay={i * 110}>
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="paper paper-torn group relative h-full w-full px-6 py-8 text-left transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-[-0.6deg]"
                  >
                    <Ornaments />
                    <Sparkles
                      aria-hidden
                      className="size-5 text-[oklch(0.6_0.08_60/70%)]"
                    />
                    <h2 className="font-display ink mt-3 text-3xl leading-tight">{p.title}</h2>
                    <p className="ink-muted mt-1 text-xs tracking-widest uppercase">{p.author}</p>
                    <p className="font-display ink mt-4 text-lg italic leading-relaxed">
                      “{p.excerpt}”
                    </p>
                    <span className="ink-muted mt-6 block text-xs">{p.date}</span>
                    <span className="ink mt-4 inline-flex items-center gap-1.5 text-sm font-medium group-hover:underline">
                      Read the poem <Feather className="size-4" />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}