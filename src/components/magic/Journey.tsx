import { useState } from "react";
import {
  MapPin,
  Sparkles,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const education = [
  {
    year: "2015 – 2021",
    title: "Al-Huda Islamic Elementary School",
    text: "Elementary School Diploma.",
  },
  {
    year: "2021 – 2024",
    title: "Sixteen Junior High School Bekasi",
    text: "Middle School Diploma.",
  },
  {
    year: "2024 – 2027",
    title: "Yadika 8 Senior High School",
    text: "High School Diploma.",
  },
];

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

const honors = [
  {
    emoji: "🥇",
    title: "1st Place — National Writing Competition",
    organizer: "Antero Literasi",
    logo: "/images/antero.jpg",
    year: "2026",
  },
  {
    emoji: "🏆",
    title: "Best Analytical Thinking Essay, VERTEX 2026",
    organizer: "PT. Vetrion Amartya Indonesia",
    logo: "/images/vertex.jpg",
    year: "2026",
  },
  {
    emoji: "⭐",
    title: "Best Rookies in Cybersecurity",
    organizer: "Generation Girl Tangerang",
    logo: "/images/generation-girl.jpg",
    year: "2026",
  },
  {
    emoji: "🏆🥉",
    title: "1st Place Bronze League",
    organizer: "TryHackMe",
    logo: "/images/TryHackMe.jpg",
    year: "2026",
  },
  {
    emoji: "🇮🇩",
    title: "Indonesian Student Recognition – Pelajar Merah Putih",
    organizer: "Patriot Pelajar Mahasiswa",
    logo: "/images/pmp.jpg",
    year: "2025",
  },
];

export function Journey() {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [honorIndex, setHonorIndex] = useState(0);

  const experience = experiences[experienceIndex];
  const honor = honors[honorIndex];

  const previousExperience = () => {
    setExperienceIndex((current) =>
      current === 0 ? experiences.length - 1 : current - 1
    );
  };

  const nextExperience = () => {
    setExperienceIndex((current) =>
      current === experiences.length - 1 ? 0 : current + 1
    );
  };

  const previousHonor = () => {
    setHonorIndex((current) =>
      current === 0 ? honors.length - 1 : current - 1
    );
  };

  const nextHonor = () => {
    setHonorIndex((current) =>
      current === honors.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="journey" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="My Journey"
          subtitle="Every experience shapes who I am today."
        />

        {/* EDUCATION */}
        <div className="mb-24">
          <h2 className="font-display mb-10 text-2xl text-primary">
            Education
          </h2>

          <div className="relative pl-10">
            <span
              aria-hidden
              className="absolute bottom-2 left-3 top-2 w-px bg-gradient-to-b from-primary/80 via-accent/60 to-transparent"
              style={{
                animation: "draw-line 2.5s ease-out both",
              }}
            />

            <ul className="grid gap-10">
              {education.map((item, index) => (
                <li key={item.year}>
                  <Reveal
                    delay={index * 120}
                    className="relative"
                  >
                    <span
                      aria-hidden
                      className="animate-twinkle absolute -left-[1.86rem] top-6 size-3 rounded-full bg-primary shadow-[0_0_16px_oklch(0.88_0.13_90/80%)]"
                    />

                    <p className="font-display text-2xl text-gold">
                      {item.year}
                    </p>

                    <p className="font-display mt-1 text-lg leading-snug text-primary">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-24">
          <h2 className="font-display mb-8 text-2xl text-primary">
            Experience
          </h2>

          <Reveal key={experienceIndex}>
            <article className="glass glass-hover p-5">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <div className="logo-frame size-14 shrink-0 overflow-hidden">
                  <img
                    src={experience.logo}
                    alt={`${experience.org} logo`}
                    loading="lazy"
                    className="size-full rounded-[inherit] object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl leading-snug">
                      {experience.position}
                    </h3>

                    <Sparkles className="animate-twinkle mt-1 size-4 shrink-0 text-primary" />
                  </div>

                  <p className="text-sm text-primary">
                    {experience.org}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {experience.duration}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3 shrink-0" />
                    {experience.location}
                  </p>

                  <span className="mt-3 inline-block rounded-full border border-primary/40 px-3 py-1 text-[11px] tracking-wide text-primary">
                    {experience.type}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {experience.description}
              </p>
            </article>
          </Reveal>

          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={previousExperience}
              aria-label="Previous experience"
              className="glass glass-hover flex size-10 items-center justify-center rounded-full"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setExperienceIndex(index)}
                  aria-label={`Go to experience ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === experienceIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextExperience}
              aria-label="Next experience"
              className="glass glass-hover flex size-10 items-center justify-center rounded-full"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            {experienceIndex + 1} / {experiences.length}
          </p>
        </div>

        {/* HONORS */}
        <div>
          <h2 className="font-display mb-8 text-2xl text-primary">
            Honors & Achievements
          </h2>

          <Reveal key={honorIndex}>
            <article className="glass glass-hover p-5">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <div className="logo-frame size-14 shrink-0 overflow-hidden">
                  <img
                    src={honor.logo}
                    alt={`${honor.organizer} logo`}
                    loading="lazy"
                    className="size-full rounded-[inherit] object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      {honor.emoji}
                    </span>

                    <Trophy className="size-4 text-primary" />
                  </div>

                  <h3 className="font-display mt-2 text-lg leading-snug">
                    {honor.title}
                  </h3>

                  <p className="mt-1 text-sm text-primary">
                    {honor.organizer}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {honor.year}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={previousHonor}
              aria-label="Previous honor"
              className="glass glass-hover flex size-10 items-center justify-center rounded-full"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {honors.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setHonorIndex(index)}
                  aria-label={`Go to honor ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === honorIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextHonor}
              aria-label="Next honor"
              className="glass glass-hover flex size-10 items-center justify-center rounded-full"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            {honorIndex + 1} / {honors.length}
          </p>
        </div>
      </div>
    </section>
  );
}
