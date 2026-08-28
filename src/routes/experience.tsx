import { Honors } from "@/components/magic/Honors";
import { Journey } from "@/components/magic/Journey";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="min-h-screen px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        >
          ← Back to home
        </Link>

        <Journey />
        <Experience & Honors/>
      </div>
    </div>
  );
}
