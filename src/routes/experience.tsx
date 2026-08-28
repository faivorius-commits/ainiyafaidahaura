// ✅ IMPORT SUDAH DIPERBAIKI — sesuai nama file baru
import { Honors } from "@/components/magic/Honors";
import { createFileRoute } from "@tanstack/start";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Honors /> {/* ✅ Komponen sudah diganti jadi Honors */}
      </div>
    </div>
  );
}
