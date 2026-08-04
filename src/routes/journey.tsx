import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Journey } from "@/components/magic/Journey";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "My Journey — Ainiya Faida Haura" },
      { name: "description", content: "The story behind who I am today: milestones, turning points, and the path ahead." },
      { property: "og:title", content: "My Journey — Ainiya Faida Haura" },
      { property: "og:description", content: "The story behind who I am today: milestones, turning points, and the path ahead." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Journey />
    </PageShell>
  ),
});
