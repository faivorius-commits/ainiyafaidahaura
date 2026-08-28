import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { WebsiteApps } from "@/components/magic/WebsiteApps";

export const Route = createFileRoute("/archive/website-apps")({
  component: () => (
    <PageShell>
      <WebsiteApps />
    </PageShell>
  ),
});
