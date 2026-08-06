import { Trophy } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const awards = [
  {
    emoji: "🥇",
    title: "1st Ranked — Event Menulis Nasional",
    organizer: "Antero Literasi",
    logo: "/assets/antero.jpg",
    year: "2026",
  },
  {
    emoji: "🏆",
    title: "Best Analytical Thinking",
    organizer: "VERTEX 2026",
    logo: "/assets/vertex.jpg",
    year: "2026",
  },
  {
    emoji: "⭐",
    title: "Best Rookies — Cybersecurity Workshop",
    organizer: "Generation Girl Tangerang",
    logo: "/assets/generation-girl.jpg",
    year: "2026",
  },
];

export function Achievement() {
  return (
    <section id="achievement" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="Achievement" subtitle="Small sparks that keep the fire going." />

        <div className="grid gap-5 sm:grid-cols-2">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 110}>
              <article className="glass glass-hover h-full p-5">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                  <div className="logo-frame size-14 shrink-0 overflow-hidden">
                    <img
                      src={a.logo}
                      alt={`${a.organizer} logo`}
                      loading="lazy"
                      className="size-full rounded-[inherit] object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{a.emoji}</span>
                      <Trophy className="size-4 text-primary" />
                    </div>
                    <h3 className="font-display mt-2 text-lg leading-snug">{a.title}</h3>
                    <p className="mt-1 text-sm text-primary">{a.organizer}</p>
                    <p className="text-xs text-muted-foreground">{a.year}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}