import { Honors } from "@/components/magic/Honors";
import { Experience } from "@/components/magic/Experience";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell>
      <Experience />
      <Honors />
    </PageShell>
  );
}
