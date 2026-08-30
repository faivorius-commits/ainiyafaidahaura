import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Documentation } from "@/components/magic/Documentation";

const title = "Documentation — Ainiya Faida Haura";
const description = "Documentation and visual archives of my projects and journey.";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DocumentationPage,
});

function DocumentationPage() {
  return (
    <PageShell>
      <Documentation />
    </PageShell>
  );
}

