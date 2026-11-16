
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
    ],
  }),

  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <PageShell>
      <Certificate />
    </PageShell>
  );
}
