import {
  Users,
  Handshake,
  MonitorPlay,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

const categories = [
  {
    title: "Forums & Conferences",
    description:
      "Model United Nations, youth forums, and international conferences.",
    icon: Users,
    activities: [
      {
        title: "World Online MUN - GYDMUN",
        year: "2026",
        role: "Delegate of Lebanon",
        image: "/images/WOMUN-GYDMUN-Lebanon-UNHCR.jpg",
      },
      {
        title: "Indonesia Malaysia Youth Forum 2026",
        year: "2026",
        role: "Participant",
        image: "/images/imyf-2026.jpg",
      },
    ],
  },
  {
    title: "Organizational Memberships & Committees",
    description:
      "Social contributions, volunteering, and community involvement.",
    icon: Users,
    activities: [
      {
        title: "Committees Team - BATIKARA 2026",
        year: "2026",
        role: "Content Maker",
        image: "/images/batikara2026.jpg",
      },
      {
        title: "Committees Team - ECOCRAFT 2026",
        year: "2026",
        role: "Publication, Design, and Documentation Team",
        image: "/images/ecocraft2026.jpg",
      },
      ],
      },
  {
    title: "Volunteering",
    description:
      "Social contributions, volunteering, and community involvement.",
    icon: Handshake,
    activities: [
      {
        title: "2000s Gateaway to Advocacy Campaign",
        year: "2026",
        role: "Campaign Volunteer",
        image: "/images/GTA-Participant.jpg",
      },
      {
        title: "Advocare Community Support Drive 2026",
        year: "2026",
        role: "Donator",
        image: "/images/advocare-donator-acsd2026.jpg",
      },
    ],
  },
  {
    title: "Training, Schools & Workshops",
    description:
      "Learning experiences, workshops, and professional development.",
    icon: MonitorPlay,
    activities: [
      {
        title: "ASEAN Cybersecurity School x HCSS x Binus University 2026",
        year: "2026",
        role: "Participant",
        image: "/images/CSASEAN26.jpg",
      },
      {
        title: "Fundamental of Cybersecurity Workshop - GenG Tangerang",
        year: "2026",
        role: "Participant & Awardee",
        image: "/images/cyberworkshop-GenG.jpg",
      },
         {
        title: "CEO Academy 2026 - ousean",
        year: "2026",
        role: "Participant & Awardee",
        image: "/images/ceo-academy-2026.jpg",
      },
    ],
  },
  {
    title: "Youth Programs & Competition",
    description:
      "Youth leadership programs, fellowships, and development initiatives.",
    icon: CalendarDays,
    activities: [
      {
        title: "FOBIO 2026 (National Biology Photography Competition) - HIMAPBIOUKI",
        year: "2026",
        role: "Participant & Awardee",
        image: "/images/FOBIO2026.jpg",
      },
      {
        title: "International Youth Day- UNA Indonesia",
        year: "2026",
        role: "Youth Program Participant",
        image: "/images/UNAI-IYD2026.jpg",
      },
    ],
  },
];

type Activity = (typeof categories)[number]["activities"][number];

function ActivityCarousel({
  activities,
}: {
  activities: Activity[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-5 w-full min-w-0">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">
          {activities.length} experiences
        </span>

        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous activity"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            <ChevronLeft size={15} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next activity"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex w-full min-w-0 gap-3 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {activities.map((activity) => (
          <article
            key={activity.title}
            className="w-[78%] min-w-[78%] max-w-[230px] shrink-0 snap-start overflow-hidden rounded-xl border border-primary/15 bg-background/60 transition hover:border-primary/40"
          >
            <div className="aspect-[16/9] w-full overflow-hidden bg-primary/5">
              <img
                src={activity.image}
                alt={activity.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-3">
              <span className="text-[10px] tracking-wider text-primary">
                {activity.year}
              </span>

              <h4 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug">
                {activity.title}
              </h4>

              <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                {activity.role}
              </p>
            </div>
          </article>
        ))}
      </div>

      {activities.length > 1 && (
        <p className="mt-1 text-[10px] text-muted-foreground/60">
          Swipe to explore more →
        </p>
      )}
    </div>
  );
}

export function Activities() {
  return (
    <section className="relative w-full max-w-full overflow-hidden px-4 py-16 sm:px-5 sm:py-24">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-5xl min-w-0">
        <SectionTitle
          title="Activities"
          subtitle="A collection of experiences, initiatives, and contributions."
        />

        <div className="mt-9 grid w-full min-w-0 grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.title} delay={index * 100}>
                <div className="group w-full min-w-0 overflow-hidden rounded-2xl border border-primary/15 bg-card/50 p-4 transition-all duration-300 hover:border-primary/40 sm:p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mb-5 sm:h-12 sm:w-12">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-base font-semibold sm:text-lg">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {category.description}
                  </p>

                  <ActivityCarousel activities={category.activities} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
