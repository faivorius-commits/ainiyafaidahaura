import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { WebsiteApps } from "@/components/magic/WebsiteApps";

const title = "Website / Apps — Ainiya Faida Haura";
const description = "Kumpulan proyek website dan aplikasi yang telah kubuat.";

export const Route = createFileRoute("/archive/website-apps")({
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
  component: () => (
    <PageShell>
      <WebsiteApps />
    </PageShell>
  ),
});
