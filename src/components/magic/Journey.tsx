import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const milestones = [
  { year: "2009", text: "Lahir" },
  { year: "2015 – 2021", text: "Al-Huda Islamic Elementary School" },
  { year: "2021 – 2024", text: "Sixteen Junior Highschool Bekasi" },
  { year: "2024 – 2027", text: "Yadika 8 Senior Highschool" },
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