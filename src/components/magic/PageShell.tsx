import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { MagicBackground } from "./MagicBackground";
import { Navbar } from "./Navbar";
import { Footer } from "./Contact";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MagicBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="mx-auto max-w-3xl px-5">
          <Link
            to="/"
            className="glass glass-hover inline-flex items-center gap-2 px-4 py-2 text-sm"
          >
            <ArrowLeft className="size-4 text-primary" />
            Back to home
          </Link>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
