import { useState } from "react";
import { ArrowLeft, BookOpen, Download } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { BookReader } from "./BookReader";
import { books, type Book } from "@/lib/books";

export function Library() {
  const [active, setActive] = useState<Book | null>(null);

  return (
    <section id="library" className="relative px-5 py-24">
      <div className="mx-auto max-w-4xl">
        {active ? (
          <div className="animate-page-open">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActive(null)}
                className="glass glass-hover inline-flex items-center gap-2 px-4 py-2 text-sm"
              >
                <ArrowLeft className="size-4 text-primary" />
                All books
              </button>
              <a
                href={active.file}
                download
                className="glass glass-hover inline-flex items-center gap-2 px-4 py-2 text-sm"
              >
                <Download className="size-4 text-primary" />
                Download
              </a>
            </div>
            <h1 className="font-display text-3xl leading-tight">{active.title}</h1>
            <p className="mb-5 text-sm text-primary">{active.author}</p>
            <BookReader book={active} />
          </div>
        ) : (
          <>
            <SectionTitle
              title="Library"
              subtitle="Books I keep close — read them right here, on warm paper light."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {books.map((b, i) => (
                <Reveal key={b.slug} delay={i * 90}>
                  <button
                    type="button"
                    onClick={() => setActive(b)}
                    className="glass glass-hover flex h-full w-full items-start gap-4 p-5 text-left"
                  >
                    <span className="logo-frame size-12 shrink-0">
                      <BookOpen className="size-5 text-primary" />
                    </span>
                    <span className="min-w-0">
                      <h3 className="font-display text-lg leading-tight">{b.title}</h3>
                      <p className="text-xs text-primary">{b.author}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{b.note}</p>
                      <span className="mt-3 inline-block text-xs tracking-widest uppercase text-primary">
                        Read {b.format}
                      </span>
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
