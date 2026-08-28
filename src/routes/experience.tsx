import { Experience } from "@/components/magic/Experience";
import { Honors } from "@/components/magic/Honors";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Honors />
      </div>
    </div>
  );
}
