import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Contact } from "@/components/magic/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Me — Ainiya Faida Haura" },
      { name: "description", content: "Let's connect and create together — Instagram, LinkedIn, and email." },
      { property: "og:title", content: "Contact Me — Ainiya Faida Haura" },
      { property: "og:description", content: "Let's connect and create together — Instagram, LinkedIn, and email." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Contact />
    </PageShell>
  ),
});
