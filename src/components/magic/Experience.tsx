import { MapPin, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
const experiences = [
  {
    position: "Registrar Staff",
    org: "International Language Programme",
    logo: "/images/ilp.jpg",
    duration: "2021 – 2025",
    location: "Grand Wisata, Indonesia",
    type: "Part-Time Work",
    description:
      "Managed participant registration, administrative tasks, and communication to support international language programs.",
  },
  {
    position: "Member",
    org: "Pelajar Merah Putih Batch 3",
    logo: "/images/pmp.jpg",
    duration: "December 2025 – Present",
    location: "Indonesia",
    type: "Organization",
    description:
      "Active member participating in youth empowerment programs, leadership development, and national collaborations.",
  },
  {
    position: "Content Maker",
    org: "Srikandi Cahaya Nusantara Batch 2",
    logo: "/images/scn.jpg",
    duration: "June 2026 – Present",
    location: "Indonesia",
    type: "Organization",
    description:
      "Create educational and creative digital content while supporting campaigns for women empowerment and social awareness.",
  },
  {
    position: "Event Coordinator",
    org: "Lamina Press Publisher",
    logo: "/images/lamina.png",
    duration: "February 2026 – July 2026",
    location: "Indonesia",
    type: "Work",
    description:
      "Coordinated literary events, managed schedules, collaborated with committees, and supported publication activities.",
  },
  {
    position: "Event Coordinator",
    org: "Pustaka Sastra Publisher",
    logo: "/images/pustaka.jpg",
    duration: "May 2026 – Present",
    location: "Indonesia",
    type: "Work",
    description:
      "Organize national writing competitions, coordinate participants, and assist in managing literary publishing events.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Experience"
          subtitle="Roles, organizations, and the places that shaped my craft."
        />

        <div className="grid gap-5">
          {experiences.map((e, i) => (
            <Reveal key={`${e.position}-${e.org}`} delay={i * 90}>
              <article className="glass glass-hover p-5">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                  <div className="logo-frame size-14 shrink-0 overflow-hidden">
                    <img
                      src={e.logo}
                      alt={`${e.org} logo`}
                      loading="lazy"
                      className="size-full rounded-[inherit] object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl leading-snug">{e.position}</h3>
                      <Sparkles className="animate-twinkle mt-1 size-4 shrink-0 text-primary" />
                    </div>
                    <p className="text-sm text-primary">{e.org}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.duration}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3 shrink-0" />
                      {e.location}
                    </p>
                    <span className="mt-3 inline-block rounded-full border border-primary/40 px-3 py-1 text-[11px] tracking-wide text-primary">
                      {e.type}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}