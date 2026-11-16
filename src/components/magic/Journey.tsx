
import { useRef, useState } from "react";
import type { TouchEvent } from "react";
import {
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Gamepad2,
  BookOpen,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const education = [
  {
    year: "2024 – 2027",
    title: "Yadika 8 Senior High School",
    text: "High School Diploma.",
  },
  {
    year: "2027 – Present",
    title: "President University",
    text: "Bachelor of Computer Science.",
  },
];

type ExperienceDocumentation = {
  image?: string;
  link?: string;
  linkLabel?: string;
};

type JourneyExperience = {
  position: string;
  org: string;
  logo: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  documentation?: ExperienceDocumentation;
};

const experiences: JourneyExperience[] = [
  {
    position: "IT Division Team",
    org: "Economics Policy Lab",
    logo: "/images/epl.jpg",
    duration: "October 2026 – Present",
    location: "Indonesia",
    type: "Part-time Work",
    description:
      "Managed and optimized the digital infrastructure for Economics Policy Lab, ensuring seamless platform operations to support youth-led economic policy research and public education initiatives.",
    documentation: {
    link: "https://economic-policy-lab.cloud",
    linkLabel: "Visit The Creation",
  },
  },
  {
    position: "IT Division Team",
    org: "YouthFunded",
    logo: "/images/youthfunded.jpg",
    duration: "October 2026 – Present",
    location: "Indonesia",
    type: "Part-time Work",
    description:
      "Managed and optimized the digital infrastructure for YouthFunded, supporting its digital infrastructure and online initiatives.",
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
    org: "Pustaka Sastra Publisher",
    logo: "/images/pustaka.jpg",
    duration: "May 2026 – Present",
    location: "Indonesia",
    type: "Work",
    description:
      "Organize national writing competitions, coordinate participants, and assist in managing literary publishing events.",
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
    position: "Registrar Staff",
    org: "International Language Programme",
    logo: "/images/ilp.jpg",
    duration: "2021 – 2025",
    location: "Grand Wisata, Indonesia",
    type: "Part-Time Work",
    description:
      "Managed participant registration, administrative tasks, and communication to support international language programs.",
  },
];

const favoriteBooks = [
  {
    title: "Heal",
    subtitle: "Short Stories Anthology",
    author: "Ainiya Faida Haura & Other Contributing Writers",
    year: "2026",
    language: "Indonesian",
    category: "Short Story Anthology",
    cover: "/images/books/heal-cover.jpg",
    description:
      "An anthology of short stories inspired by emotional wounds, trauma, and experiences that can reflect real life.",
    comment:
      "Being part of this anthology as one of its contributing writers makes it especially meaningful to me. I love its thoughtful layout and the emotional depth of the stories, many of which draw inspiration from real experiences of pain and trauma.",
  },
  {
    title: "Witchcraft",
    subtitle: "A Handbook of Magic, Spells, and Potions",
    author: "Anastasia Greywolf",
    year: "2016",
    language: "English / Indonesian",
    category: "Mysticism · Folklore · Witchcraft",
    cover: "/images/books/witchcraft1.jpg",
    description:
      "A collection of knowledge about spells, potions, and mystical magical traditions from different parts of the world.",
    comment:
      "I have always been curious about mystical subjects, and this book offers a refreshing change of pace from my busy everyday life. It introduces ideas about spells, potions, and magical traditions from different parts of the world. Beyond the knowledge I gained, it also reminds me of the importance of believing in myself.",
  },
];

const games = [
  {
    title: "Minecraft",
    genre: "Sandbox · Survival",
    description:
      "A world of creativity, exploration, and endless possibilities.",
    image: "/images/games/minecraft.jpg",
    number: "01",
  },
  {
    title: "Desire",
    genre: "Adventure · Indie",
    description:
      "A unique narrative experience told through the perspective of a color-blind boy.",
    image: "/images/games/desire.jpg",
    number: "02",
  },
  {
    title: "ALTER EGO",
    genre: "Psychological · Interactive Fiction",
    description:
      "An introspective experience exploring identity, personality, and self-discovery.",
    image: "/images/games/alter-ego.jpg",
    number: "03",
  },
  {
    title: "PUBG",
    genre: "Battle Royale · Action",
    description:
      "A competitive survival experience built around strategy and teamwork.",
    image: "/images/games/pubg.jpg",
    number: "04",
  },
  {
    title: "Once Human",
    genre: "Open World · Survival",
    description:
      "A mysterious post-apocalyptic world filled with exploration and discovery.",
    image: "/images/games/once-human.jpg",
    number: "05",
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
  const [bookIndex, setBookIndex] = useState(0);
  const [honorsOpen, setHonorsOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);

  const experience = experiences[experienceIndex]!;

  const previousExperience = () =>
    setExperienceIndex((c) =>
      c === 0 ? experiences.length - 1 : c - 1
    );

  const nextExperience = () =>
    setExperienceIndex((c) =>
      c === experiences.length - 1 ? 0 : c + 1
    );

  const previousBook = () =>
    setBookIndex((c) =>
      c === 0 ? favoriteBooks.length - 1 : c - 1
    );

  const nextBook = () =>
    setBookIndex((c) =>
      c === favoriteBooks.length - 1 ? 0 : c + 1
    );

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const difference = touchStartX.current - endX;

    if (difference > 45) nextBook();
    if (difference < -45) previousBook();

    touchStartX.current = null;
  };

  return (
    <section id="journey" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">

        <SectionTitle
          title="My Journey"
          subtitle="My interest in the digital world began at an early age. Growing up, I was already familiar with computers and spent much of my time exploring games. What started as a childhood pastime gradually became part of my everyday life, and even today, gaming remains one of my interests."
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
              style={{ animation: "draw-line 2.5s ease-out both" }}
            />

            <ul className="grid gap-10">
              {education.map((item, i) => (
                <li key={item.year}>
                  <Reveal delay={i * 120} className="relative">
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
                <div className="logo-frame size-14 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={experience.logo}
                    alt={`${experience.org} logo`}
                    loading="lazy"
                    className="size-full object-contain"
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

              {experience.documentation?.image && (
              <img
              src={experience.documentation.image}
              alt={`${experience.org} documentation`}
              loading="lazy"
              className="mt-4 max-h-36 w-auto max-w-full rounded-md object-cover"
  />
)}

{experience.documentation?.link && (
  <a
    href={experience.documentation.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-flex text-sm text-primary transition-colors hover:text-accent hover:underline"
  >
    {experience.documentation.linkLabel || "View documentation"}
  </a>
)}
            </article>
          </Reveal>

          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={previousExperience}
              aria-label="Previous experience"
              className="glass glass-hover flex size-10 items-center justify-center rounded-full"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {experiences.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setExperienceIndex(i)}
                  aria-label={`Go to experience ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === experienceIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <button
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

        {/* BOOKS I LOVE */}
        <div className="mb-24">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl text-primary">
                Books I Love
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A collection of stories, ideas, and perspectives that stay with me.
              </p>
            </div>

            <BookOpen className="size-6 shrink-0 text-primary/70" />
          </div>

          <div
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${favoriteBooks.length * 100}%`,
                transform: `translateX(-${bookIndex * (100 / favoriteBooks.length)}%)`,
              }}
            >
              {favoriteBooks.map((book, index) => (
                <div
                  key={book.title}
                  className="w-1/2 shrink-0 px-1"
                >
                  <article className="glass glass-hover h-full overflow-hidden rounded-2xl p-5 sm:p-7">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-center">

                      {/* BOOK COVER */}
                      <div className="relative mx-auto w-full max-w-[220px]">
                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-amber-300/20 blur-2xl" />

                        <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-black/20 shadow-2xl">
                          <img
                            src={book.cover}
                            alt={`${book.title} book cover`}
                            loading="lazy"
                            className="aspect-[3/4] w-full object-contain transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* BOOK DETAILS */}
                      <div className="flex min-w-0 flex-col">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                            Favorite Read
                          </span>

                          <span className="font-display text-sm text-gold">
                            {String(index + 1).padStart(2, "0")} / {String(favoriteBooks.length).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="font-display text-3xl leading-tight text-primary">
                          {book.title}
                        </h3>

                        <p className="mt-1 font-display text-lg italic text-gold">
                          {book.subtitle}
                        </p>

                        <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                          <p>
                            <span className="text-primary">Author:</span>{" "}
                            {book.author}
                          </p>
                          <p>
                            <span className="text-primary">Published:</span>{" "}
                            {book.year}
                          </p>
                          <p>
                            <span className="text-primary">Language:</span>{" "}
                            {book.language}
                          </p>
                        </div>

                        <div className="mt-4">
                          <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] tracking-wide text-primary">
                            {book.category}
                          </span>
                        </div>

                        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                          {book.description}
                        </p>

                        <div className="mt-5 border-l-2 border-primary/50 pl-4">
                          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gold">
                            My Thoughts
                          </p>

                          <p className="font-display text-base italic leading-relaxed text-foreground/90">
                            “{book.comment}”
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* BOOK NAVIGATION */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={previousBook}
              aria-label="Previous book"
              className="glass glass-hover flex size-10 items-center justify-center rounded-full transition-transform hover:-translate-x-1"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {favoriteBooks.map((book, index) => (
                <button
                  key={book.title}
                  onClick={() => setBookIndex(index)}
                  aria-label={`Go to book ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === bookIndex
                      ? "w-8 bg-primary"
                      : "w-1.5 bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextBook}
              aria-label="Next book"
              className="glass glass-hover flex size-10 items-center justify-center rounded-full transition-transform hover:translate-x-1"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            {String(bookIndex + 1).padStart(2, "0")} /{" "}
            {String(favoriteBooks.length).padStart(2, "0")}
            {" · Swipe to explore"}
          </p>
        </div>

        {/* FAVORITE GAMES */}
        <div className="mb-24">
          <div className="mb-8 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl text-primary">
                Favorite Games
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A few worlds I enjoy exploring.
              </p>
            </div>

            <Gamepad2 className="size-6 shrink-0 text-primary/70" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {games.map((game, index) => (
              <Reveal key={game.title} delay={index * 90}>
                <article className="glass glass-hover group relative h-full overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/9] overflow-hidden bg-primary/10">
                    <img
                      src={game.image}
                      alt={`${game.title} game artwork`}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <span className="absolute right-4 top-4 font-display text-sm tracking-widest text-white/70">
                      {game.number}
                    </span>

                    <h3 className="absolute bottom-4 left-5 font-display text-2xl text-white">
                      {game.title}
                    </h3>
                  </div>

                  <div className="p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-primary/80">
                      {game.genre}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {game.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* HONORS & ACHIEVEMENTS */}
        <div>
          <h2 className="font-display mb-8 text-2xl text-primary">
            Honors & Achievements
          </h2>

          {!honorsOpen ? (
            <div
              className="relative flex cursor-pointer items-start justify-center pt-8 pb-32"
              onClick={() => setHonorsOpen(true)}
            >
              {honors.map((item, index) => {
                const isTop = index === 0;
                const shiftY = index * 38;
                const shiftX = (index - 2) * 16;
                const rotate = (index - 2) * 2.8;
                const zIndex = honors.length - index;

                return (
                  <div
                    key={item.title}
                    className="absolute h-40 w-56 rounded-xl p-4 transition-all duration-500 ease-out hover:scale-[1.03]"
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
                    <div className="flex h-full flex-col">
                      <div className="flex items-center gap-2">
                        <div className="logo-frame size-9 shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={item.logo}
                            alt={`${item.organizer} logo`}
                            loading="lazy"
                            className="size-full object-contain"
                          />
                        </div>

                        <span className="text-xl">{item.emoji}</span>
                      </div>

                      <p className="mt-3 text-sm font-medium leading-snug text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[11px] text-amber-200/80">
                        {item.organizer}
                      </p>

                      <p className="mt-auto text-xs font-medium text-amber-200/80">
                        {item.year}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="relative z-10 pt-56">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-5 py-2.5 backdrop-blur-sm">
                  <Sparkles className="size-4 animate-twinkle text-amber-300" />
                  <span className="text-sm font-medium text-amber-200/80">
                    Click to reveal all ✨
                  </span>
                  <ChevronDown className="size-4 animate-bounce text-amber-200/80" />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {honors.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <article
                    className="h-44 w-full cursor-pointer rounded-xl p-4 transition-all duration-300 hover:scale-[1.05]"
                    style={{
                      background: "linear-gradient(135deg, rgba(167, 139, 250, 0.45), rgba(96, 165, 250, 0.35), rgba(251, 191, 36, 0.25))",
                      border: "1px solid rgba(251, 191, 36, 0.45)",
                      backdropFilter: "blur(14px)",
                      boxShadow: "0 10px 25px rgba(167, 139, 250, 0.25), 0 0 1px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <div className="flex h-full flex-col">
                      <div className="flex items-center gap-2">
                        <div className="logo-frame size-9 shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={item.logo}
                            alt={`${item.organizer} logo`}
                            loading="lazy"
                            className="size-full object-contain"
                          />
                        </div>

                        <span className="text-xl">{item.emoji}</span>
                      </div>

                      <p className="mt-3 text-sm font-medium leading-snug text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[11px] text-amber-200/80">
                        {item.organizer}
                      </p>

                      <p className="mt-auto text-xs font-medium text-amber-200/80">
                        {item.year}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}

              <div className="col-span-full mt-4 flex justify-center">
                <button
                  onClick={() => setHonorsOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-white/5 px-5 py-2.5 text-sm text-amber-200/80 transition-colors hover:text-amber-200"
                >
                  <ChevronUp className="size-4" />
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
