import {
  PenLine,
  Code2,
  Image as GalleryIcon,
  Library as LibraryIcon,
  Feather,
  BookOpen,
  ExternalLink,
  Camera,
  FlaskConical,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const archiveNodes = [
  {
    title: "Projects",
    description: "Build · Explore · Research",
    icon: Code2,
    position:
      "left-0 top-[27%] sm:left-[5%] sm:top-[30%]",
    delay: 0,
    items: [
      { label: "Cybersecurity", icon: Code2 },
      { label: "Web & Interface Design", icon: Code2, to: "/website-apps" },
      { label: "Research & Analysis", icon: FlaskConical },
    ],
  },
  {
    title: "Writing",
    description: "Poetry · Stories · Articles",
    icon: PenLine,
    position:
      "right-0 top-[27%] sm:right-[5%] sm:top-[30%]",
    delay: 110,
    to: "/poetry",
    items: [
      { label: "Poetry", icon: Feather, to: "/poetry" },
      { label: "Short Stories", icon: PenLine },
      { label: "Articles", icon: PenLine },
    ],
  },
  {
    title: "Gallery",
    description: "Moments · Memories · Milestones",
    icon: GalleryIcon,
    position:
      "left-[3%] bottom-[5%] sm:left-[15%] sm:bottom-[3%]",
    delay: 220,
    items: [
      { label: "Certificates", icon: GalleryIcon },
      { label: "Documentation", icon: Camera, to: "/documentation" },
      { label: "Event Photos", icon: GalleryIcon, to: "/gallery" },
    ],
  },
  {
    title: "Library",
    description: "Books · Notes · Quotes",
    icon: LibraryIcon,
    position:
      "right-[3%] bottom-[5%] sm:right-[15%] sm:bottom-[3%]",
    delay: 330,
    to: "/library",
    items: [
      { label: "Book Collection", icon: BookOpen, to: "/library" },
      { label: "Reading Notes", icon: LibraryIcon },
      { label: "Favourite Quotes", icon: LibraryIcon },
    ],
  },
  {
    title: "Publication",
    description: "Published Works",
    icon: PenLine,
    position:
      "left-1/2 top-0 -translate-x-1/2",
    delay: 440,
    to: "/publication",
    items: [
      {
        label: "Published Works",
        icon: ExternalLink,
        to: "/publication",
      },
    ],
  },
];

export function Archive() {
  return (
    <section
      id="archive"
      className="relative overflow-hidden px-5 py-24"
    >
      {/* =====================================================
          AMBIENT COSMIC LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[520px] w-[520px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none absolute -left-40 top-1/3
          h-80 w-80 rounded-full
          bg-violet-500/10 blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-0
          h-80 w-80 rounded-full
          bg-fuchsia-500/10 blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-5xl">

        {/* =====================================================
            TITLE
        ===================================================== */}

        <SectionTitle
          title="My Digital Archive"
          subtitle="Writings, projects, and moments — all in one constellation."
        />


        {/* =====================================================
            CONSTELLATION
        ===================================================== */}

        <div className="relative mx-auto mt-10 h-[610px] w-full max-w-5xl sm:h-[680px]">

          {/* =================================================
              ORBIT RINGS
          ================================================= */}

          <div
            className="
              pointer-events-none absolute left-1/2 top-1/2
              h-[270px] w-[92%]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              border border-primary/15
              rotate-[8deg]
              animate-[spin_32s_linear_infinite]
            "
          />

          <div
            className="
              pointer-events-none absolute left-1/2 top-1/2
              h-[390px] w-[88%]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              border border-primary/10
              -rotate-[18deg]
              animate-[spin_42s_linear_infinite_reverse]
            "
          />

          <div
            className="
              pointer-events-none absolute left-1/2 top-1/2
              h-[470px] w-[58%]
              -translate-x-1/2 -translate-y-1/2
              rounded-full
              border border-primary/10
              rotate-[65deg]
              animate-[spin_55s_linear_infinite]
            "
          />


          {/* =================================================
              CONSTELLATION LINES
          ================================================= */}

          <svg
            className="
              pointer-events-none absolute inset-0
              h-full w-full
              opacity-40
            "
            viewBox="0 0 1000 680"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="archiveLine"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="currentColor"
                  stopOpacity="0"
                />

                <stop
                  offset="50%"
                  stopColor="currentColor"
                  stopOpacity="0.8"
                />

                <stop
                  offset="100%"
                  stopColor="currentColor"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* Publication → center */}
            <path
              d="M500 80 C500 175 500 235 500 340"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Projects → center */}
            <path
              d="M125 280 C255 290 370 315 500 340"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Writing → center */}
            <path
              d="M875 280 C745 290 630 315 500 340"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Gallery → center */}
            <path
              d="M210 570 C300 475 395 405 500 340"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Library → center */}
            <path
              d="M790 570 C700 475 605 405 500 340"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />
          </svg>


          {/* =================================================
              FLOATING STARS
          ================================================= */}

          <span className="absolute left-[20%] top-[18%] text-primary/70 animate-pulse">
            ✦
          </span>

          <span className="absolute right-[19%] top-[20%] text-primary/50 text-xs animate-pulse [animation-delay:700ms]">
            ✦
          </span>

          <span className="absolute left-[37%] top-[15%] text-primary/50 text-[10px] animate-pulse [animation-delay:1200ms]">
            ✦
          </span>

          <span className="absolute right-[35%] bottom-[24%] text-primary/50 text-xs animate-pulse [animation-delay:400ms]">
            ✦
          </span>

          <span className="absolute left-[28%] bottom-[25%] text-primary/40 text-[10px] animate-pulse [animation-delay:1800ms]">
            ✦
          </span>


          {/* =================================================
              CENTER CONSTELLATION
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

            {/* Outer glow */}

            <div
              className="
                absolute -inset-10
                rounded-full
                bg-primary/10
                blur-2xl
                animate-pulse
              "
            />

            {/* Outer ring */}

            <div
              className="
                absolute -inset-5
                rounded-full
                border border-primary/20
                animate-[spin_12s_linear_infinite]
              "
            />

            {/* Main orb */}

            <div
              className="
                relative flex size-32
                flex-col items-center justify-center
                rounded-full
                border border-primary/50
                bg-background/60
                shadow-[0_0_50px_hsl(var(--primary)/0.22)]
                backdrop-blur-xl
                transition-transform duration-500
                hover:scale-110
              "
            >

              <Sparkles
                className="
                  mb-1 size-7
                  text-primary
                  animate-pulse
                "
              />

              <span className="font-display text-xl text-primary">
                Ainiya
              </span>

              <span className="mt-1 text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                Archive
              </span>

            </div>
          </div>


          {/* =================================================
              ARCHIVE NODES
          ================================================= */}

          {archiveNodes.map((node) => {

            const Icon = node.icon;

            const NodeContent = (
              <>
                {/* glowing aura */}

                <span
                  className="
                    pointer-events-none absolute
                    -inset-3
                    rounded-3xl
                    bg-primary/5
                    opacity-0
                    blur-xl
                    transition-all duration-500
                    group-hover:opacity-100
                  "
                />

                {/* icon */}

                <span
                  className="
                    relative mx-auto flex size-14
                    items-center justify-center
                    rounded-2xl
                    border border-primary/30
                    bg-background/40
                    text-primary
                    shadow-[0_0_25px_hsl(var(--primary)/0.08)]
                    backdrop-blur-md
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:border-primary/70
                    group-hover:shadow-[0_0_35px_hsl(var(--primary)/0.25)]
                  "
                >
                  <Icon className="size-6" />
                </span>

                {/* title */}

                <span
                  className="
                    mt-3 block
                    font-display text-lg
                    text-foreground
                    transition-colors
                    group-hover:text-primary
                  "
                >
                  {node.title}
                </span>

                {/* description */}

                <span className="mt-1 block text-[10px] tracking-wide text-muted-foreground">
                  {node.description}
                </span>

                {/* mini stars */}

                <span className="mx-auto mt-2 block text-[9px] text-primary/60">
                  ✦ · ✦
                </span>
              </>
            );

            return (
              <Reveal
                key={node.title}
                delay={node.delay}
                className={`absolute z-30 ${node.position}`}
              >
                {node.to ? (
                  <Link
                    to={node.to}
                    className="
                      group relative block
                      w-[145px]
                      text-center
                      transition-transform
                      duration-500
                      hover:-translate-y-2
                      sm:w-[180px]
                    "
                  >
                    {NodeContent}
                  </Link>
                ) : (
                  <div
                    className="
                      group relative block
                      w-[145px]
                      text-center
                      transition-transform
                      duration-500
                      hover:-translate-y-2
                      sm:w-[180px]
                    "
                  >
                    {NodeContent}
                  </div>
                )}
              </Reveal>
            );
          })}

        </div>


        {/* =====================================================
            QUICK CATEGORIES
        ===================================================== */}

        <Reveal
          delay={520}
          className="mx-auto mt-2 max-w-2xl"
        >
          <div className="flex flex-wrap justify-center gap-2">

            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
              ✦ Cybersecurity
            </span>

            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
              ✦ Literature
            </span>

            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
              ✦ Research
            </span>

            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-md">
              ✦ Creative Work
            </span>

          </div>
        </Reveal>


        {/* =====================================================
            BUTTONS
        ===================================================== */}

        <Reveal
          delay={600}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Button
            variant="magic"
            size="pill"
            asChild
          >
            <Link to="/library">
              <BookOpen className="mr-2 size-4" />
              Open the Library
            </Link>
          </Button>

          <Button
            variant="magic"
            size="pill"
            asChild
          >
            <Link to="/contact">
              Let's Connect
            </Link>
          </Button>
        </Reveal>

      </div>
    </section>
  );
}
