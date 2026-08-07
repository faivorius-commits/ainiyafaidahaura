import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Poetry } from "@/components/magic/Poetry";

const title = "Poetry — Ainiya Faida Haura";
const description =
  "A collection of poems by Ainiya Faida Haura, read on warm paper pages — starting with 'Semicolon'.";

export const Route = createFileRoute("/poetry")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Poetry />
    </PageShell>
  ),
});