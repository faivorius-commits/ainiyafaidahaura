
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { FileText, ArrowUpRight } from "lucide-react";

const title = "Research & Analysis — Ainiya Faida Haura";
const description =
  "Research briefings, international affairs, and policy analysis.";

export const Route = createFileRoute("/research-analysis")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: ResearchAnalysisPage,
});

function ResearchAnalysisPage() {
  return (
    <PageShell>
      <main className="mx-auto min-h-screen max-w-5xl px-5 py-20">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
          Research & Analysis
        </p>

        <h1 className="mb-4 font-display text-4xl text-foreground sm:text-5xl">
          Research, beyond the surface.
        </h1>

        <p className="mb-12 max-w-2xl leading-relaxed text-muted-foreground">
          A collection of research briefings and analytical work
          exploring international affairs, public policy, and
          humanitarian challenges.
        </p>

        <article className="group rounded-2xl border border-primary/20
          bg-background/50 p-6 backdrop-blur-xl transition-all
          duration-300 hover:border-primary/50 sm:p-8">

          <div className="mb-6 flex size-12 items-center
            justify-center rounded-xl border border-primary/20
            bg-primary/10">
            <FileText className="size-5 text-primary" />
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.2em]
            text-muted-foreground">
            International Relations · UNHCR
          </p>

          <h2 className="mb-3 font-display text-2xl text-foreground">
            UNHCR Delegate Research Briefing: Lebanon
          </h2>

          <p className="mb-6 leading-relaxed text-muted-foreground">
            A general briefing examining Lebanon's national context,
            refugee healthcare challenges, international funding,
            diplomatic priorities, and potential approaches to
            shared humanitarian responsibility.
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "Humanitarian Affairs",
              "Country Research",
              "Diplomacy",
              "Healthcare",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/15
                  bg-primary/5 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="/documents/lebanon-unhcr-briefing.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full
              border border-primary/30 px-5 py-2.5 text-sm
              text-primary transition-colors hover:bg-primary/10"
          >
            Read Research Briefing
            <ArrowUpRight className="size-4" />
          </a>
        </article>
      </main>
    </PageShell>
  );
}
