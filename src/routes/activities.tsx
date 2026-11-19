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
      { property: "og:title", content: "Activities — Ainiya Faida Haura" },
      {
        property: "og:description",
        content: "Explore activities, forums, volunteering, workshops, campaigns, and youth programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell backToArchive>
      <Activities />
    </PageShell>
  ),
});
