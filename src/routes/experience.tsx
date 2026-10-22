import { Journey } from "@/components/magic/Journey";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";

export const Route = createFileRoute("/experience")({
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <PageShell>
      <Journey />
    </PageShell>
  );
}
