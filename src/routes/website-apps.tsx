import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { WebsiteApps } from "@/components/magic/WebsiteApps";

export const Route = createFileRoute("/website-apps")({
  head: () => ({
    meta: [
      { title: "Projects — Ainiya Faida Haura" },
      {
        name: "description",
        content: "Websites and applications created by Ainiya Faida Haura.",
      },
      { property: "og:title", content: "Projects — Ainiya Faida Haura" },
      {
        property: "og:description",
        content: "Websites and applications created by Ainiya Faida Haura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <WebsiteApps />
    </PageShell>
  ),
});
