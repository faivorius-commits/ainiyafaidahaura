
import {
  Users,
  Handshake,
  MonitorPlay,
  Megaphone,
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
        title: "World Online MUN",
        year: "2026",
        role: "Delegate",
        image: "/images/doc-2.jpg",
      },
      {
        title: "Indonesia–Malaysia Youth Forum",
        year: "2026",
        role: "Youth Forum Participant",
        image: "/images/doc-3.jpg",
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
        title: "ECOCRAFT",
        year: "2026",
        role: "Publication, Design, and Documentation Team",
        image: "/images/doc-4.jpg",
      },
      {
        title: "Batikara",
        year: "2026",
        role: "Content Maker",
        image: "/images/doc-3.jpg",
      },
    ],
  },
  {
    title: "Webinars & Workshops",
    description:
      "Learning experiences, workshops, and professional development.",
    icon: MonitorPlay,
    activities: [
      {
        title: "ASEAN Cyber School",
        year: "2026",
        role: "Participant",
        image: "/images/doc-5.jpg",
      },
      {
        title: "Generation Girl Tangerang",
        year: "2026",
        role: "Best Rookies in Cybersecurity",
        image: "/images/doc-6.jpg",
      },
      {
        title: "ASEAN AI Career Readiness",
        year: "2026",
        role: "Program Participant",
        image: "/images/doc-1.jpg",
      },
    ],
  },
  {
    title: "Campaigns & Advocacy",
    description:
      "Initiatives, awareness campaigns, and advocacy projects.",
    icon: Megaphone,
    activities: [
      {
        title: "Our Isyarat",
        year: "2026",
        role: "Campaign Participant",
        image: "/images/doc-2.jpg",
      },
    ],
  },
  {
    title: "Youth Programs",
    description:
      "Youth leadership programs, fellowships, and development initiatives.",
    icon: CalendarDays,
    activities: [
      {
        title: "UNA Indonesia IYD",
        year: "2026",
        role: "Youth Program Participant",
        image: "/images/doc-4.jpg",
      },
      {
        title: "IYC 14",
        year: "2026",
        role: "Online Delegate",
        image: "/images/doc-5.jpg",
      },
    ],
  },
];

function ActivityCarousel({
  activities,
}: {
  activities: (typeof categories)[number]["activities"];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {activities.length} experiences
        </span>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll activities left"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll activities right"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {activities.map((activity) => (
          <article
            key={activity.title}
            className="w-[220px] min-w-[220px] snap-start overflow-hidden rounded-xl border border-primary/15 bg-background/60 transition hover:border-primary/40 sm:w-[240px] sm:min-w-[240px]"
          >
            <div className="aspect-[16/10] overflow-hidden bg-primary/5">
              <img
                src={activity.image}
                alt={activity.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-4">
              <span className="text-xs tracking-wider text-primary">
                {activity.year}
              </span>

              <h4 className="mt-1 line-clamp-2 text-sm font-semibold">
                {activity.title}
              </h4>

              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {activity.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Activities() {
  return (
    <section className="relative overflow-hidden px-5 py-24">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionTitle
          title="Activities"
          subtitle="A collection of experiences, initiatives, and contributions."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.title} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-primary/15 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
