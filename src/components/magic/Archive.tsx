import { useState } from "react";
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
  icon: React.ElementType;
  to?: string;
};

type ArchiveNode = {
  title: string;
  description: string;
  icon: React.ElementType;
  position: string;
  delay: number;
  items: ArchiveItem[];
};

const archiveNodes: ArchiveNode[] = [
  {
    title: "Projects",
    description: "Build · Explore · Research",
    icon: Code2,
    position: "left-0 top-[27%] sm:left-[4%] sm:top-[28%]",
    delay: 0,
    items: [
      {
        label: "Cybersecurity",
        icon: ShieldCheck,
        to: "/cybersecurity",
      },
      {
        label: "App, Website & UI/UX",
        icon: Palette,
        to: "/website-apps",
      },
      {
        label: "Research & Analysis",
        icon: FlaskConical,
        to: "/research",
      },
    ],
  },

  {
    title: "Writing",
    description: "Poetry · Stories · Articles",
    icon: PenLine,
    position: "right-0 top-[27%] sm:right-[4%] sm:top-[28%]",
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
    position: "left-[3%] bottom-[5%] sm:left-[12%] sm:bottom-[3%]",
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
    position: "right-[3%] bottom-[5%] sm:right-[12%] sm:bottom-[3%]",
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
    position: "left-1/2 top-0 -translate-x-1/2",
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
    setOpenNode((current) => (current === title ? null : title));
  };

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

        <div className="relative mx-auto mt-10 h-[680px] w-full max-w-5xl sm:h-[730px]">

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
              h-[500px] w-[65%]
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
              h-full w-full opacity-40
            "
            viewBox="0 0 1000 730"
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

            {/* Publication → Center */}
            <path
              d="M500 65 C500 175 500 250 500 365"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Projects → Center */}
            <path
              d="M120 270 C250 290 375 330 500 365"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Writing → Center */}
            <path
              d="M880 270 C750 290 625 330 500 365"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Gallery → Center */}
            <path
              d="M200 610 C300 500 405 420 500 365"
              fill="none"
              stroke="url(#archiveLine)"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-primary"
            />

            {/* Library → Center */}
            <path
              d="M800 610 C700 500 595 420 500 365"
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

          <span className="absolute left-[19%] top-[18%] text-primary/70 animate-pulse">
            ✦
          </span>

          <span className="absolute right-[19%] top-[19%] text-primary/50 text-xs animate-pulse [animation-delay:700ms]">
            ✦
          </span>

          <span className="absolute left-[36%] top-[13%] text-primary/50 text-[10px] animate-pulse [animation-delay:1200ms]">
            ✦
          </span>

          <span className="absolute right-[34%] bottom-[22%] text-primary/50 text-xs animate-pulse [animation-delay:400ms]">
            ✦
          </span>

          <span className="absolute left-[27%] bottom-[25%] text-primary/40 text-[10px] animate-pulse [animation-delay:1800ms]">
            ✦
          </span>

          <span className="absolute right-[8%] top-[46%] text-primary/40 text-[10px] animate-pulse [animation-delay:2200ms]">
            ✦
          </span>

          {/* =================================================
              CENTER AINIYA
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">

            <div
              className="
                absolute -inset-10
                rounded-full
                bg-primary/10
                blur-2xl
                animate-pulse
              "
            />

            <div
              className="
                absolute -inset-5
                rounded-full
                border border-primary/20
                animate-[spin_12s_linear_infinite]
              "
            />

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
              MAIN ARCHIVE NODES
          ================================================= */}

          {archiveNodes.map((node) => {
            const Icon = node.icon;
            const isOpen = openNode === node.title;

            return (
              <Reveal
                key={node.title}
                delay={node.delay}
                className={`absolute z-30 ${node.position}`}
              >
                <div className="relative">

                  {/* =================================================
                      SUB-NODES
                  ================================================= */}

                  {isOpen && (
                    <div
                      className="
                        absolute left-1/2 top-full
                        z-50 mt-5
                        -translate-x-1/2
                        flex flex-col items-center gap-2
                      "
                    >
                      {node.items.map((item, index) => {
                        const ItemIcon = item.icon;

                        const itemContent = (
                          <>
                            <span
                              className="
                                flex size-8 shrink-0
                                items-center justify-center
                                rounded-full
                                border border-primary/30
                                bg-background/70
                                text-primary
                                backdrop-blur-md
                              "
                            >
                              <ItemIcon className="size-3.5" />
                            </span>

                            <span className="whitespace-nowrap text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
                              {item.label}
                            </span>
                          </>
                        );

                        if (item.to) {
                          return (
                            <Link
                              key={item.label}
                              to={item.to}
                              className="
                                group flex items-center gap-2
                                rounded-full
                                border border-primary/20
                                bg-background/70
                                px-2 py-1.5
                                shadow-[0_0_20px_hsl(var(--primary)/0.08)]
                                backdrop-blur-xl
                                transition-all duration-300
                                hover:-translate-y-1
                                hover:border-primary/60
                                hover:bg-primary/10
                              "
                              style={{
                                animationDelay: `${index * 80}ms`,
                              }}
                            >
                              {itemContent}
                            </Link>
                          );
                        }

                        return (
                          <button
                            key={item.label}
                            type="button"
                            className="
                              group flex items-center gap-2
                              rounded-full
                              border border-primary/20
                              bg-background/70
                              px-2 py-1.5
                              shadow-[0_0_20px_hsl(var(--primary)/0.08)]
                              backdrop-blur-xl
                              transition-all duration-300
                              hover:-translate-y-1
                              hover:border-primary/60
                              hover:bg-primary/10
                            "
                          >
                            {itemContent}
                          </button>
                        );
                      })}
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
                      group relative block
                      w-[145px]
                      text-center
                      sm:w-[180px]
                    "
                  >

                    {/* Glow */}

                    <span
                      className={`
                        pointer-events-none absolute
                        -inset-5
                        rounded-3xl
                        bg-primary/10
                        blur-2xl
                        transition-all duration-500
                        ${isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                      `}
                    />

                    {/* Icon */}

                    <span
                      className={`
                        relative mx-auto flex size-14
                        items-center justify-center
                        rounded-2xl
                        border
                        bg-background/50
                        text-primary
                        backdrop-blur-md
                        transition-all duration-500
                        ${
                          isOpen
                            ? "scale-110 border-primary/80 shadow-[0_0_40px_hsl(var(--primary)/0.3)]"
                            : "border-primary/30 shadow-[0_0_25px_hsl(var(--primary)/0.08)] group-hover:scale-110 group-hover:border-primary/70"
                        }
                      `}
                    >
                      <Icon className="size-6" />
                    </span>

                    {/* Title */}

                    <span
                      className={`
                        mt-3 block
                        font-display text-lg
                        transition-colors
                        ${
                          isOpen
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }
                      `}
                    >
                      {node.title}
                    </span>

                    {/* Description */}

                    <span className="mt-1 block text-[10px] tracking-wide text-muted-foreground">
                      {node.description}
                    </span>

                    {/* Constellation dots */}

                    <span className="mx-auto mt-2 block text-[9px] text-primary/60">
                      {isOpen ? "✦ · ✦ · ✦" : "✦ · ✦"}
                    </span>

                    {/* Open indicator */}

                    <span
                      className={`
                        mx-auto mt-1 block text-[8px]
                        uppercase tracking-[0.18em]
                        transition-colors
                        ${
                          isOpen
                            ? "text-primary"
                            : "text-muted-foreground/50"
                        }
                      `}
                    >
                      {isOpen ? "Close" : "Explore"}
                    </span>
                  </button>
                </div>
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
 
