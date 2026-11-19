
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/magic/PageShell";
import { Certificate } from "@/components/magic/Certificate";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Ainiya Faida Haura" },
      {
        name: "description",
        content: "Certificates and achievements.",
      },
      { property: "og:title", content: "Certificates — Ainiya Faida Haura" },
      { property: "og:description", content: "Certificates and achievements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <PageShell backToArchive>
      <Certificate />
    </PageShell>
  );
}
