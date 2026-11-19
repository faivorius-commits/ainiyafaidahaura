import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Publication } from "@/components/magic/Publication";

const title = "Publication — Ainiya Faida Haura";
const description = "Stories published in print — small worlds folded into paper.";

export const Route = createFileRoute("/publication")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PublicationPage,
});

function PublicationPage() {
  return (
    <PageShell backToArchive>
      <Publication />
    </PageShell>
  );
}
