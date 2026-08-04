import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const milestones = [
  {
    year: "2021",
    text: "Beginning my journey through international education and language services.",
  },
  {
    year: "2025",
    text: "Joined Pelajar Merah Putih Batch 3 and started becoming active in youth communities.",
  },
  {
    year: "2026",
    text: "Expanded into literature, technology, youth advocacy, cybersecurity, creative writing, digital projects, and international volunteering.",
  },
  {
    year: "Future",
    text: "Building impactful innovations that combine creativity, technology, and meaningful social impact.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="My Journey" subtitle="Every experience shapes who I am today." />

        <div className="relative pl-10">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-3 w-px origin-top bg-gradient-to-b from-primary/80 via-accent/60 to-transparent"
            style={{ animation: "draw-line 2.5s ease-out both" }}
          />
          <ul className="grid gap-8">
            {milestones.map((m, i) => (
              <li key={m.year}>
                <Reveal delay={i * 120} className="relative">
                  <span
                    aria-hidden
                    className="animate-twinkle absolute top-6 -left-[1.86rem] size-3 rounded-full bg-primary shadow-[0_0_16px_oklch(0.88_0.13_90/80%)]"
                  />
                  <div className="glass glass-hover p-5">
                    <p className="font-display text-gold text-2xl">{m.year}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}