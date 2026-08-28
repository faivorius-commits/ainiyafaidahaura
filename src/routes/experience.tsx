import { Honors } from "@/components/magic/Honors";
import { Experience } from "@/components/magic/Experience"; // ✅ Bagian Experience
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Experience /> {/* ✅ MUNCUL BAGIAN EXPERIENCE! */}
        <Honors />    {/* ✅ Tetap tampil Honors */}
      </div>
    </div>
  );
}
