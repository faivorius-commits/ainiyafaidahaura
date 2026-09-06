import { Journey } from "@/components/magic/Journey";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";

export const Route = createFileRoute("/journey")({
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <PageShell>
      <Journey />
    </PageShell>
  );
}
