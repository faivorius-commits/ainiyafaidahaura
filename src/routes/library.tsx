import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Library } from "@/components/magic/Library";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Library — Ainiya Faida Haura" },
      {
        name: "description",
        content: "A shelf of books you can read right on the page — philosophy, fantasy, and study companions.",
      },
      { property: "og:title", content: "Library — Ainiya Faida Haura" },
      {
        property: "og:description",
        content: "A shelf of books you can read right on the page — philosophy, fantasy, and study companions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Library />
    </PageShell>
  ),
});
