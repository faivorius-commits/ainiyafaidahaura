import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function BackToArchive() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-6xl px-5 pt-8">
      <Link
        to="/archive"
        className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-2.5 text-sm text-muted-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        <span>Back to Digital Archive</span>
      </Link>
    </div>
  );
}
