import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <Reveal className="mb-10 text-center">
      <h2 className="text-gold text-4xl leading-tight font-semibold sm:text-5xl">{title}</h2>
      <div className="mx-auto mt-3 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-primary/50" />
        <span className="text-primary">✦</span>
        <span className="h-px w-12 bg-primary/50" />
      </div>
      {subtitle && (
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      )}
    </Reveal>
  );
}