import { Journey } from "@/components/magic/Journey";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Achievements — Ainiya Faida Haura" },
      {
        name: "description",
        content: "Explore Ainiya Faida Haura's experience, achievements, and milestones.",
      },
      {
        property: "og:title",
        content: "Experience & Achievements — Ainiya Faida Haura",
      },
      {
        property: "og:description",
        content: "Explore Ainiya Faida Haura's experience, achievements, and milestones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <PageShell>
      <Journey />
    </PageShell>
  );
}
