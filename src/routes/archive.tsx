import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Archive } from "@/components/magic/Archive";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "My Digital Archive — Ainiya Faida Haura" },
      { name: "description", content: "Writings, projects, organizations, and a personal library collection." },
      { property: "og:title", content: "My Digital Archive — Ainiya Faida Haura" },
      { property: "og:description", content: "Writings, projects, organizations, and a personal library collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Archive />
    </PageShell>
  ),
});
