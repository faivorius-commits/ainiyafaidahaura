import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Trophy,
  MapPin,
  Sparkles,
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
    title: "Bronze League",
    organization: "TryHackMe",
    year: "2026",
    description:
      "A milestone in my hands-on cybersecurity learning journey.",
  },
  {
    title: "Chapter Founder",
    organization: "LegallyYouth",
    year: "2026",
    description:
      "Selected as a Chapter Founder for the LegallyYouth YOUth Ambassador Program.",
  },
  {
    title: "Poetry Publication",
    organization: "International Publication",
    year: "2026",
    description:
      "An English poem accepted for publication by an international publication.",
  },
];

function CarouselControls({
  current,
  total,
  onPrevious,
  onNext,
  onSelect,
}: {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-5 flex items-center justify-between">
      <button
        onClick={onPrevious}
        aria-label="Previous"
        className="glass glass-hover flex size-10 items-center justify-center rounded-full transition-transform hover:scale-105"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div className="flex items-center gap-3">
        <span className="font-display text-sm text-primary">
          {String(current + 1).padStart(2, "0")}
        </span>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              aria-label={`Go to item ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === current
                  ? "w-7 bg-primary"
                  : "w-1.5 bg-primary/30"
              }`}
            />
          ))}
        </div>

        <span className="font-display text-sm text-muted-foreground">
          {String(total).padStart(2, "0")}
        </span>
      </div>

      <button
        onClick={onNext}
        aria-label="Next"
        className="glass glass-hover flex size-10 items-center justify-center rounded-full transition-transform hover:scale-105"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}

export function Journey() {
  const [educationIndex, setEducationIndex] = useState(2);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [honorIndex, setHonorIndex] = useState(0);

  const nextEducation = () => {
    setEducationIndex((i) => (i + 1) % education.length);
  };

  const previousEducation = () => {
    setEducationIndex(
      (i) => (i - 1 + education.length) % education.length
    );
  };

  const nextExperience = () => {
    setExperienceIndex((i) => (i + 1) % experiences.length);
  };

  const previousExperience = () => {
    setExperienceIndex(
      (i) => (i - 1 + experiences.length) % experiences.length
    );
  };

  const nextHonor = () => {
    setHonorIndex((i) => (i + 1) % honors.length);
  };

  const previousHonor = () => {
    setHonorIndex((i) => (i - 1 + honors.length) % honors.length
    );
  };

  const currentEducation = education[educationIndex];
  const currentExperience = experiences[experienceIndex];
  const currentHonor = honors[honorIndex];

  return (
    <section id="journey" className="relative px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="My Journey"
          subtitle="The chapters that shaped who I am today."
        />

        {/* ================= EDUCATION ================= */}

        <Reveal>
          <div className="mb-16">
            <div className="mb-5 flex items-center gap-2">
              <GraduationCap className="size-5 text-primary" />
              <h2 className="font-display text-xl text-primary">
                Education
              </h2>
            </div>

            <article className="glass glass-hover min-h-[260px] p-7 md:p-9">
              <div className="flex min-h-[210px] flex-col justify-center text-center">
                <p className="font-display text-2xl text-primary md:text-3xl">
                  {currentEducation.year}
                </p>

                <h3 className="mx-auto mt-3 max-w-xl font-display text-xl leading-snug md:text-2xl">
                  {currentEducation.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {currentEducation.text}
                </p>
              </div>
            </article>

            <CarouselControls
              current={educationIndex}
              total={education.length}
              onPrevious={previousEducation}
              onNext={nextEducation}
              onSelect={setEducationIndex}
            />

            <p className="mt-3 text-center text-[11px] tracking-wide text-muted-foreground/50">
              Swipe / explore each chapter
            </p>
          </div>
        </Reveal>

        {/* ================= EXPERIENCE ================= */}

        <Reveal>
          <div className="mb-16">
            <div className="mb-5 flex items-center gap-2">
              <Briefcase className="size-5 text-primary" />
              <h2 className="font-display text-xl text-primary">
                Experience
              </h2>
            </div>

            <article className="glass glass-hover min-h-[310px] p-6 md:p-8">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4 md:gap-6">
                <div className="logo-frame size-16 shrink-0 overflow-hidden md:size-20">
                  <img
                    src={currentExperience.logo}
                    alt={`${currentExperience.org} logo`}
                    loading="lazy"
                    className="size-full rounded-[inherit] object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl leading-snug md:text-2xl">
                      {currentExperience.position}
                    </h3>

                    <Sparkles className="animate-twinkle mt-1 size-4 shrink-0 text-primary" />
                  </div>

                  <p className="mt-1 text-sm text-primary">
                    {currentExperience.org}
                  </p>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {currentExperience.duration}
                  </p>

                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3 shrink-0" />
                    {currentExperience.location}
                  </p>

                  <span className="mt-4 inline-block rounded-full border border-primary/40 px-3 py-1 text-[11px] tracking-wide text-primary">
                    {currentExperience.type}
                  </span>
                </div>
              </div>

              <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {currentExperience.description}
              </p>
            </article>

            <CarouselControls
              current={experienceIndex}
              total={experiences.length}
              onPrevious={previousExperience}
              onNext={nextExperience}
              onSelect={setExperienceIndex}
            />

            <p className="mt-3 text-center text-[11px] tracking-wide text-muted-foreground/50">
              Swipe / explore each experience
            </p>
          </div>
        </Reveal>

        {/* ================= HONORS ================= */}

        <Reveal>
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Trophy className="size-5 text-primary" />
              <h2 className="font-display text-xl text-primary">
                Honors & Achievements
              </h2>
            </div>

            <article className="glass glass-hover min-h-[270px] p-7 md:p-9">
              <div className="flex min-h-[210px] flex-col items-center justify-center text-center">
                <Trophy className="mb-5 size-8 text-primary" />

                <p className="font-display text-2xl text-primary">
                  {currentHonor.year}
                </p>

                <h3 className="mt-2 font-display text-xl md:text-2xl">
                  {currentHonor.title}
                </h3>

                <p className="mt-1 text-sm text-primary">
                  {currentHonor.organization}
                </p>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {currentHonor.description}
                </p>
              </div>
            </article>

            <CarouselControls
              current={honorIndex}
              total={honors.length}
              onPrevious={previousHonor}
              onNext={nextHonor}
              onSelect={setHonorIndex}
            />

            <p className="mt-3 text-center text-[11px] tracking-wide text-muted-foreground/50">
              Swipe / explore each achievement
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
        }
