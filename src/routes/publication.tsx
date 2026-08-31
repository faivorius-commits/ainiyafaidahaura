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
    ],
  }),
  component: PublicationPage,
});

function PublicationPage() {
  return (
    <PageShell>
      <Publication />
    </PageShell>
  );
}
