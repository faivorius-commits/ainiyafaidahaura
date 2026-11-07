import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Activities } from "@/components/magic/Activities";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Activities — Ainiya Faida Haura" },
      {
        name: "description",
        content: "Explore activities, forums, volunteering, workshops, campaigns, and youth programs.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <Activities />
    </PageShell>
  ),
});
