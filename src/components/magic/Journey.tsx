import { useState } from "react";
import {
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const education = [
  { year: "2015 – 2021", title: "Al-Huda Islamic Elementary School", text: "Elementary School Diploma." },
  { year: "2021 – 2024", title: "Sixteen Junior High School Bekasi", text: "Middle School Diploma." },
  { year: "2024 – 2027", title: "Yadika 8 Senior High School", text: "High School Diploma." },
];

const experiences = [
  { position: "Cybersecurity Intern", org: "CodeAlpha", logo: "/images/codealpha.jpg", duration: "August 2026 – September 2026", location: "Remote", type: "Internship", description: "Gained hands-on experience in cybersecurity through practical tasks, security exercises, and real-world learning during a one-month internship." },
  { position: "Content Maker", org: "Srikandi Cahaya Nusantara Batch 2", logo: "/images/scn.jpg", duration: "June 2026 – Present", location: "Indonesia", type: "Organization", description: "Create educational and creative digital content while supporting campaigns for women empowerment and social awareness." },
  { position: "Event Coordinator", org: "Pustaka Sastra Publisher", logo: "/images/pustaka.jpg", duration: "May 2026 – Present", location: "Indonesia", type: "Work", description: "Organize national writing competitions, coordinate participants, and assist in managing literary publishing events." },
  { position: "Event Coordinator", org: "Lamina Press Publisher", logo: "/images/lamina.png", duration: "February 2026 – July 2026", location: "Indonesia", type: "Work", description: "Coordinated literary events, managed schedules, collaborated with committees, and supported publication activities." },
  { position: "Registrar Staff", org: "International Language Programme", logo: "/images/ilp.jpg", duration: "2021 – 2025", location: "Grand Wisata, Indonesia", type: "Part-Time Work", description: "Managed participant registration, administrative tasks, and communication to support international language programs." },
];

const honors = [
  { emoji: "🥇", title: "1st Place — National Writing Competition", organizer: "Antero Literasi", logo: "/images/antero.jpg", year: "2026" },
  { emoji: "🏆", title: "Best Analytical Thinking Essay, VERTEX 2026", organizer: "PT. Vetrion Amartya Indonesia", logo: "/images/vertex.jpg", year: "2026" },
  { emoji: "⭐", title: "Best Rookies in Cybersecurity", organizer: "Generation Girl Tangerang", logo: "/images/generation-girl.jpg", year: "2026" },
  { emoji: "🏆🥉", title: "1st Place Bronze League", organizer: "TryHackMe", logo: "/images/TryHackMe.jpg", year: "2026" },
  { emoji: "🇮🇩", title: "Indonesian Student Recognition – Pelajar Merah Putih", organizer: "Patriot Pelajar Mahasiswa", logo: "/images/pmp.jpg", year: "2025" },
];

export function Journey() {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [honorsOpen, setHonorsOpen] = useState(false);
  const experience = experiences[experienceIndex];

  const previousExperience = () => setExperienceIndex(c => c === 0 ? experiences.length - 1 : c - 1);
  const nextExperience = () => setExperienceIndex(c => c === experiences.length - 1 ? 0 : c + 1);

  return (
    <section id="journey" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="My Journey" subtitle="Every experience shapes who I am today." />

        <div className="mb-24">
          <h2 className="font-display mb-10 text-2xl text-primary">Education</h2>
          <div className="relative pl-10">
            <span aria-hidden className="absolute bottom-2 left-3 top-2 w-px bg-gradient-to-b from-primary/80 via-accent/60 to-transparent" style={{ animation: "draw-line 2.5s ease-out both" }} />
            <ul className="grid gap-10">
              {education.map((item, i) => (
                <li key={item.year}>
                  <Reveal delay={i * 120} className="relative">
                    <span aria-hidden className="animate-twinkle absolute -left-[1.86rem] top-6 size-3 rounded-full bg-primary shadow-[0_0_16px_oklch(0.88_0.13_90/80%)]" />
                    <p className="font-display text-2xl text-gold">{item.year}</p>
                    <p className="font-display mt-1 text-lg leading-snug text-primary">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="font-display mb-8 text-2xl text-primary">Experience</h2>
          <Reveal key={experienceIndex}>
            <article className="glass glass-hover p-5">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <div className="logo-frame size-14 shrink-0 overflow-hidden rounded-lg">
                  <img src={experience.logo} alt={`${experience.org} logo`} loading="lazy" className="size-full object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl leading-snug">{experience.position}</h3>
                    <Sparkles className="animate-twinkle mt-1 size-4 shrink-0 text-primary" />
                  </div>
                  <p className="text-sm text-primary">{experience.org}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{experience.duration}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3 shrink-0" />
                    {experience.location}
                  </p>
                  <span className="mt-3 inline-block rounded-full border border-primary/40 px-3 py-1 text-[11px] tracking-wide text-primary">
                    {experience.type}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
            </article>
          </Reveal>
          <div className="mt-5 flex items-center justify-between">
            <button onClick={previousExperience} aria-label="Previous" className="glass glass-hover flex size-10 items-center justify-center rounded-full">
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex items-center gap-2">
              {experiences.map((_, i) => (
                <button key={i} onClick={() => setExperienceIndex(i)} aria-label={`Go to ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === experienceIndex ? "w-6 bg-primary" : "w-1.5 bg-primary/30"}`} />
              ))}
            </div>
            <button onClick={nextExperience} aria-label="Next" className="glass glass-hover flex size-10 items-center justify-center rounded-full">
              <ChevronRight className="size-5" />
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">{experienceIndex + 1} / {experiences.length}</p>
        </div>

        <div>
          <h2 className="font-display mb-8 text-2xl text-primary">Honors & Achievements</h2>

          {!honorsOpen ? (
            <div className="relative flex justify-center items-start pt-8 pb-32" onClick={() => setHonorsOpen(true)}>
              {honors.map((item, index) => {
                const isTop = index === 0;
                const shiftY = index * 38;
                const shiftX = (index - 2) * 16;
                const rotate = (index - 2) * 2.8;
                const zIndex = honors.length - index;
                return (
                  <div
                    key={item.title}
                    className="absolute w-56 h-40 rounded-xl p-4 transition-all duration-500 ease-out cursor-pointer hover:scale-[1.03]"
                    style={{
                      top: shiftY,
                      left: `calc(50% + ${shiftX}px - 112px)`,
                      zIndex,
                      transform: `rotate(${rotate}deg)`,
                      background: isTop
                        ? "linear-gradient(135deg, rgba(167, 139, 250, 0.55), rgba(96, 165, 250, 0.45), rgba(251, 191, 36, 0.35))"
                        : "linear-gradient(135deg, rgba(167, 139, 250, 0.35), rgba(96, 165, 250, 0.25), rgba(251, 191, 36, 0.25))",
                      border: "1px solid rgba(251, 191, 36, 0.45)",
                      backdropFilter: "blur(14px)",
                      boxShadow: isTop
                        ? "0 0 0 1px rgba(255, 255, 255, 0.3), 0 15px 35px rgba(167, 139, 250, 0.35), 0 0 50px rgba(251, 191, 36, 0.25)"
                        : "0 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2">
                        <div className="logo-frame size-9 shrink-0 overflow-hidden rounded-lg">
                          <img src={item.logo} alt={`${item.organizer} logo`} loading="lazy" className="size-full object-contain" />
                        </div>
                        <span className="text-xl">{item.emoji}</span>
                      </div>
                      <p className="mt-3 font-medium text-white text-sm leading-snug">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[11px] text-amber-200/80">
                        {item.organizer}
                      </p>
                      <p className="mt-auto text-xs text-amber-200/80 font-medium">
                        {item.year}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="pt-56 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-amber-300/30 backdrop-blur-sm">
                  <Sparkles className="size-4 text-amber-300 animate-twinkle" />
                  <span className="text-amber-200/80 text-sm font-medium">Click to reveal all ✨</span>
                  <ChevronDown className="w-4 h-4 text-amber-200/80 animate-bounce" />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {honors.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article
                    className="w-full h-44 rounded-xl p-4 transition-all duration-300 hover:scale-[1.05] cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, rgba(167, 139, 250, 0.45), rgba(96, 165, 250, 0.35), rgba(251, 191, 36, 0.25))",
                      border: "1px solid rgba(251, 191, 36, 0.45)",
                      backdropFilter: "blur(14px)",
                      boxShadow: "0 10px 25px rgba(167, 139, 250, 0.25), 0 0 1px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-2">
                        <div className="logo-frame size-9 shrink-0 overflow-hidden rounded-lg">
                          <img src={item.logo} alt={`${item.organizer} logo`} loading="lazy" className="size-full object-contain" />
                        </div>
                        <span className="text-xl">{item.emoji}</span>
                      </div>
                      <p className="mt-3 font-medium text-white text-sm leading-snug">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[11px] text-amber-200/80">
                        {item.organizer}
                      </p>
                      <p className="mt-auto text-xs text-amber-200/80 font-medium">
                        {item.year}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
              <div className="col-span-full flex justify-center mt-4">
                <button
                  onClick={() => setHonorsOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-amber-300/30 text-amber-200/80 text-sm hover:text-amber-200 transition-colors"
                >
                  <ChevronUp className="w-4 h-4" />
                  Collapse
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
