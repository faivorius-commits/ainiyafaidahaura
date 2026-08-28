import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Experience } from "@/components/magic/Experience";
import { Honors } from "@/components/magic/Honors";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Honors — Ainiya Faida Haura" },
      { name: "description", content: "Roles, organizations, competitions and awards I am proud of." },
      { property: "og:title", content: "Experience & Honors — Ainiya Faida Haura" },
      { property: "og:description", content: "Roles, organizations, competitions and awards I am proud of." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Experience />
      <Honors />
    </PageShell>
  ),
});
