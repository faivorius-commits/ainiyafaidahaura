import { useState, type ElementType } from "react";
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
  ShieldCheck,
  Palette,
  FileText,
  ScrollText,
  Quote,
  Award,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

type ArchiveItem = {
  label: string;
  icon: ElementType;
  to?: string;
};

type ArchiveNode = {
  title: string;
  description: string;
  icon: ElementType;
  position: string;
  delay: number;
  items: ArchiveItem[];
};

const archiveNodes: ArchiveNode[] = [
  {
    title: "Projects",
    description: "Build · Explore · Research",
    icon: Code2,
    position: "left-[2%] top-[27%] sm:left-[5%] sm:top-[29%]",
    delay: 0,
    items: [
      {
        label: "Cybersecurity",
        icon: ShieldCheck,
      },
      {
        label: "App, Website & UI/UX",
        icon: Palette,
        to: "/website-apps",
      },
      {
        label: "Research & Analysis",
        icon: FlaskConical,
      },
    ],
  },

  {
    title: "Writing",
    description: "Poetry · Stories · Articles",
    icon: PenLine,
    position: "right-[2%] top-[27%] sm:right-[5%] sm:top-[29%]",
    delay: 110,
    items: [
      {
        label: "Poetry",
        icon: Feather,
        to: "/poetry",
      },
      {
        label: "Short Stories",
        icon: ScrollText,
      },
      {
        label: "Articles",
        icon: FileText,
      },
    ],
  },

  {
    title: "Gallery",
    description: "Moments · Memories · Milestones",
    icon: GalleryIcon,
    position: "left-[4%] bottom-[5%] sm:left-[13%] sm:bottom-[4%]",
    delay: 220,
    items: [
      {
        label: "Certificates",
        icon: Award,
      },
      {
        label: "Documentation",
        icon: Camera,
        to: "/documentation",
      },
      {
        label: "Event Photos",
        icon: GalleryIcon,
        to: "/gallery",
      },
    ],
  },

  {
    title: "Library",
    description: "Books · Notes · Quotes",
    icon: LibraryIcon,
    position: "right-[4%] bottom-[5%] sm:right-[13%] sm:bottom-[4%]",
    delay: 330,
    items: [
      {
        label: "Book Collection",
        icon: BookOpen,
        to: "/library",
      },
      {
        label: "Reading Notes",
        icon: LibraryIcon,
      },
      {
        label: "Favourite Quotes",
        icon: Quote,
      },
    ],
  },

  {
    title: "Publication",
    description: "Published Works",
    icon: PenLine,
    position: "left-1/2 top-[2%] -translate-x-1/2",
    delay: 440,
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
  const [openNode, setOpenNode] = useState<string | null>(null);

  const toggleNode = (title: string) => {
    setOpenNode((current) =>
      current === title ? null : title
    );
  };

  return (
    <section
      id="archive"
      className="relative overflow-hidden px-5 py-24"
    >
      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none absolute left-1/2 top-1/2
          h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none absolute -left-40 top-1/3
          h-80 w-80
          rounded-full
          bg-violet-500/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-0
          h-80 w-80
          rounded-full
          bg-fuchsia-500/10
          blur-[100px]
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
            CONSTELLATION AREA
        ===================================================== */}

        <div
          className="
            relative mx-auto mt-10
            h-[700px] w-full
            max-w-5xl
            sm:h-[740px]
          "
        >

          {/* =================================================
              ORBIT 1
          ================================================= */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2
              h-[270px] w-[92%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border border-primary/15
              rotate-[8deg]
              animate-[spin_35s_linear_infinite]
            "
          />

          {/* =================================================
              ORBIT 2
          ================================================= */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2
              h-[410px] w-[88%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border border-primary/10
              -rotate-[18deg]
              animate-[spin_45s_linear_infinite_reverse]
            "
          />

          {/* =================================================
              ORBIT 3
          ================================================= */}

          <div
            className="
              pointer-events-none absolute
              left-1/2 top-1/2
              h-[520px] w-[65%]
              -translate-x-1/2
              -translate-y-1/2
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
              pointer-events-none absolute
              inset-0
              h-full w-full
              opacity-35
            "
            viewBox="0 0 1000 740"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Publication → Center */}

            <path
              d="M500 70 C500 175 500 260 500 370"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="text-primary"
            />

            {/* Projects → Center */}

            <path
              d="M120 270 C250 295 380 335 500 370"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="text-primary"
            />

            {/* Writing → Center */}

            <path
              d="M880 270 C750 295 620 335 500 370"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="text-primary"
            />

            {/* Gallery → Center */}

            <path
              d="M210 625 C310 510 410 425 500 370"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="text-primary"
            />

            {/* Library → Center */}

            <path
              d="M790 625 C690 510 590 425 500 370"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="text-primary"
            />
          </svg>

          {/* =================================================
              FLOATING STARS
          ================================================= */}

          <span className="absolute left-[18%] top-[17%] text-primary/70 animate-pulse">
            ✦
          </span>

          <span className="absolute left-[35%] top-[12%] text-[10px] text-primary/50 animate-pulse">
            ✦
          </span>

          <span className="absolute right-[18%] top-[19%] text-xs text-primary/50 animate-pulse [animation-delay:700ms]">
            ✦
          </span>

          <span className="absolute left-[27%] bottom-[25%] text-[10px] text-primary/40 animate-pulse [animation-delay:1200ms]">
            ✦
          </span>

          <span className="absolute right-[28%] bottom-[22%] text-xs text-primary/50 animate-pulse [animation-delay:500ms]">
            ✦
          </span>

          <span className="absolute right-[8%] top-[47%] text-[10px] text-primary/40 animate-pulse [animation-delay:1800ms]">
            ✦
          </span >

          {/* =================================================
              CENTER AINIYA
          ================================================= */}

          <div
            className="
              absolute
              left-1/2 top-1/2
              z-20
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* Glow */}

            <div
              className="
                absolute -inset-12
                rounded-full
                bg-primary/10
                blur-3xl
                animate-pulse
              "
            />

            {/* Rotating ring */}

            <div
              className="
                absolute -inset-5
                rounded-full
                border border-primary/20
                animate-[spin_14s_linear_infinite]
              "
            />

            {/* Center orb */}

            <div
              className="
                relative flex size-32
                flex-col
                items-center
                justify-center
                rounded-full
                border border-primary/50
                bg-background/70
                shadow-[0_0_50px_hsl(var(--primary)/0.25)]
                backdrop-blur-xl
                transition-transform
                duration-500
                hover:scale-110
              "
            >
              <Sparkles
                className="
                  mb-1
                  size-7
                  text-primary
                  animate-pulse
                "
              />

              <span
                className="
                  font-display
                  text-xl
                  text-primary
                "
              >
                Ainiya
              </span>

              <span
                className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-muted-foreground
                "
              >
                Archive
              </span>
            </div>
          </div>

                    {/* =================================================
              MAIN CONSTELLATION NODES
          ================================================= */}

          {archiveNodes.map((node) => {
            const isOpen = openNode === node.title;

            return (
              <Reveal
                key={node.title}
                delay={node.delay}
                className={`absolute z-30 ${node.position}`}
              >
                <div className="relative flex flex-col items-center">

                  {/* =================================================
                      SUB NODES
                  ================================================= */}

                  {isOpen && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-40
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                    >
                      <div
                        className="
                          relative
                          flex
                          min-w-[190px]
                          flex-col
                          gap-2
                        "
                      >

                        {/* Connecting glow */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-[-20px]
                            rounded-3xl
                            bg-primary/10
                            blur-2xl
                          "
                        />

                        {node.items.map((item, index) => {
                          const ItemIcon = item.icon;

                          const content = (
                            <>
                              <span
                                className="
                                  flex size-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  border-primary/20
                                  bg-primary/10
                                "
                              >
                                <ItemIcon className="size-3.5 text-primary" />
                              </span>

                              <span className="flex-1 text-left">
                                {item.label}
                              </span>

                              {item.to && (
                                <ExternalLink
                                  className="
                                    size-3
                                    shrink-0
                                    text-primary/70
                                  "
                                />
                              )}
                            </>
                          );

                          if (item.to) {
                            return (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="
                                  relative
                                  z-50
                                  flex
                                  items-center
                                  gap-2
                                  rounded-xl
                                  border
                                  border-primary/20
                                  bg-background/85
                                  px-3
                                  py-2
                                  text-xs
                                  text-muted-foreground
                                  shadow-lg
                                  backdrop-blur-xl
                                  transition-all
                                  duration-300
                                  hover:-translate-y-1
                                  hover:border-primary/50
                                  hover:bg-primary/10
                                  hover:text-primary
                                "
                                style={{
                                  animationDelay: `${index * 70}ms`,
                                }}
                              >
                                {content}
                              </Link>
                            );
                          }

                          return (
                            <div
                              key={item.label}
                              className="
                                relative
                                z-50
                                flex
                                cursor-default
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-primary/10
                                bg-background/80
                                px-3
                                py-2
                                text-xs
                                text-muted-foreground
                                shadow-lg
                                backdrop-blur-xl
                              "
                              style={{
                                animationDelay: `${index * 70}ms`,
                              }}
                            >
                              {content}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      MAIN NODE
                  ================================================= */}

                  <button
                    type="button"
                    onClick={() => toggleNode(node.title)}
                    aria-expanded={isOpen}
                    className="
                      group
                      relative
                      flex
                      size-[92px]
                      flex-col
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-primary/30
                      bg-background/75
                      shadow-[0_0_30px_hsl(var(--primary)/0.12)]
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:scale-110
                      hover:border-primary/60
                      hover:shadow-[0_0_45px_hsl(var(--primary)/0.25)]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-primary/40
                      sm:size-[108px]
                    "
                  >

                    {/* Node glow */}

                    <span
                      className="
                        pointer-events-none
                        absolute
                        -inset-2
                        rounded-full
                        border
                        border-primary/10
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                    {/* Active ring */}

                    {isOpen && (
                      <span
                        className="
                          pointer-events-none
                          absolute
                          -inset-3
                          rounded-full
                          border
                          border-primary/40
                          animate-pulse
                        "
                      />
                    )}

                    {/* Icon */}

                    <span
                      className="
                        relative
                        mb-1
                        flex
                        size-9
                        items-center
                        justify-center
                        rounded-full
                        bg-primary/10
                      "
                    >
                      <node.icon
                        className="
                          size-4
                          text-primary
                          transition-transform
                          duration-500
                          group-hover:scale-110
                        "
                      />
                    </span>

                    {/* Title */}

                    <span
                      className="
                        relative
                        font-display
                        text-sm
                        text-foreground
                        sm:text-base
                      "
                    >
                      {node.title}
                    </span>

                    {/* Small indicator */}

                    <span
                      className="
                        absolute
                        -bottom-5
                        left-1/2
                        -translate-x-1/2
                        whitespace-nowrap
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-muted-foreground/60
                        transition-colors
                        group-hover:text-primary/80
                      "
                    >
                      {isOpen ? "Close" : "Explore"}
                    </span>
                  </button>

                  {/* =================================================
                      NODE DESCRIPTION
                  ================================================= */}

                  {!isOpen && (
                    <span
                      className="
                        pointer-events-none
                        mt-7
                        max-w-[130px]
                        text-center
                        text-[9px]
                        leading-relaxed
                        text-muted-foreground/60
                        transition-colors
                        duration-300
                        group-hover:text-muted-foreground
                      "
                    >
                      {node.description}
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}

          {/* =================================================
              CENTER LABEL
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[58%]
              z-10
              -translate-x-1/2
              whitespace-nowrap
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-muted-foreground/40
            "
          >
            My Universe of Ideas
          </div>

          {/* =================================================
              CONSTELLATION PARTICLES
          ================================================= */}

          <span
            className="
              absolute
              left-[8%]
              top-[42%]
              size-1
              rounded-full
              bg-primary/50
              shadow-[0_0_10px_hsl(var(--primary)/0.6)]
              animate-pulse
            "
          />

          <span
            className="
              absolute
              left-[42%]
              top-[5%]
              size-1.5
              rounded-full
              bg-primary/60
              shadow-[0_0_12px_hsl(var(--primary)/0.7)]
              animate-pulse
              [animation-delay:900ms]
            "
          />

          <span
            className="
              absolute
              right-[10%]
              top-[38%]
              size-1
              rounded-full
              bg-primary/50
              shadow-[0_0_10px_hsl(var(--primary)/0.6)]
              animate-pulse
              [animation-delay:500ms]
            "
          />

          <span
            className="
              absolute
              left-[44%]
              bottom-[8%]
              size-1
              rounded-full
              bg-primary/40
              shadow-[0_0_10px_hsl(var(--primary)/0.5)]
              animate-pulse
              [animation-delay:1500ms]
            "
          />
                    {/* =================================================
              END OF CONSTELLATION
          ================================================= */}

        </div>

        {/* =====================================================
            QUICK ACCESS
        ===================================================== */}

        <Reveal
          delay={550}
          className="mt-4 flex flex-wrap justify-center gap-3"
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
              <Sparkles className="mr-2 size-4" />
              Let's Connect
            </Link>
          </Button>
        </Reveal>

        {/* =====================================================
            ARCHIVE FOOTNOTE
        ===================================================== */}

        <Reveal
          delay={650}
          className="mt-8 text-center"
        >
          <p
            className="
              text-xs
              tracking-wide
              text-muted-foreground/50
            "
          >
            Every idea leaves a little light behind.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
