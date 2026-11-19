import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { BookOpen, Code2, FolderHeart, MailOpen, Star } from "lucide-react";
import { Reveal } from "./Reveal";

type StarUpdate = {
  date: string;
  title: string;
  note: string;
};

// Add personal update entries here when ready.
const starUpdates: StarUpdate[] = [];

const quickLinks = [
  {
    id: "journey",
    href: "/journey",
    icon: BookOpen,
    title: "My Journey",
    sub: "The story behind who I am today",
  },
  {
    id: "projects",
    href: "/website-apps",
    icon: Code2,
    title: "My Projects",
    sub: "Websites and applications I've created",
  },
  {
    id: "archive",
    href: "/archive",
    icon: FolderHeart,
    title: "My Digital Archive",
    sub: "Writings, projects, and moments",
  },
  {
    id: "contact",
    href: "/contact",
    icon: MailOpen,
    title: "Contact Me",
    sub: "Let's connect and create together",
  },
];

function getOffset(index: number, activeIndex: number) {
  let offset = index - activeIndex;

  if (offset > 2) offset -= 4;
  if (offset < -2) offset += 4;

  return offset;
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const moved = useRef(false);

  const next = () => {
    setActiveIndex((current) => (current + 1) % quickLinks.length);
  };

  const prev = () => {
    setActiveIndex(
      (current) => (current - 1 + quickLinks.length) % quickLinks.length
    );
  };

  const handleDown = (e: PointerEvent) => {
    startX.current = e.clientX;
    moved.current = false;
  };

  const handleMove = (e: PointerEvent) => {
    if (
      startX.current !== null &&
      Math.abs(e.clientX - startX.current) > 12
    ) {
      moved.current = true;
    }
  };

  const handleUp = (e: PointerEvent) => {
    if (startX.current === null) return;

    const distance = e.clientX - startX.current;

    if (Math.abs(distance) > 45) {
      if (distance < 0) {
        next();
      } else {
        prev();
      }
    }

    startX.current = null;
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center px-5 pt-28 pb-20"
    >
      <img
        src="/images/sky.jpg"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1536}
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(75% 55% at 50% 45%, oklch(0.18 0.09 293 / 55%), transparent 70%), linear-gradient(180deg, oklch(0.18 0.09 293 / 45%) 0%, oklch(0.2 0.09 293 / 25%) 45%, oklch(0.19 0.09 293 / 70%) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-xl text-center">

        {/* WELCOME */}
        <Reveal>
          <h1 className="text-6xl font-medium tracking-tight sm:text-7xl">
            Welcome
          </h1>

          <p className="mt-2 font-display text-lg italic text-primary">
            ✦ to my little universe ✦
          </p>
        </Reveal>

        {/* DIGITAL ID CARD */}
        <Reveal delay={120} className="my-10 flex justify-center">
          <div className="id-card-scene">
            <div className="id-card">

              {/* FRONT */}
              <div className="id-card-face id-card-front">
                <img
                  src="/images/id-card.png"
                  alt="Digital ID card"
                />
              </div>

              {/* BACK */}
              <div className="id-card-face id-card-back">
                <div className="flex h-full w-full flex-col items-center justify-center p-5 text-center">

                  <div className="flex w-full items-center justify-between">
                    <span className="font-display text-sm text-primary">
                      AFH
                    </span>

                    <span className="text-primary">
                      ✦
                    </span>
                  </div>

                  <div className="my-auto">

                    <div className="mb-3 text-3xl text-primary">
                      ◈
                    </div>

                    <p className="font-display text-sm tracking-[0.2em] text-primary">
                      DIGITAL IDENTITY
                    </p>

                    <p className="mt-2 font-display text-lg font-medium">
                      AINIYA FAIDA HAURA
                    </p>

                    <p className="mt-3 text-[8px] tracking-[0.16em] text-muted-foreground">
                      SHA256: AB29DAF6
                    </p>

                    <div className="mt-5 flex h-8 items-end justify-center gap-[2px]">
                      <span className="h-5 w-[2px] bg-primary/60" />
                      <span className="h-8 w-[3px] bg-primary/80" />
                      <span className="h-6 w-[1px] bg-primary/50" />
                      <span className="h-8 w-[4px] bg-primary/70" />
                      <span className="h-4 w-[2px] bg-primary/50" />
                      <span className="h-7 w-[1px] bg-primary/70" />
                      <span className="h-8 w-[3px] bg-primary/60" />
                      <span className="h-5 w-[2px] bg-primary/80" />
                      <span className="h-7 w-[1px] bg-primary/50" />
                      <span className="h-8 w-[3px] bg-primary/70" />
                      <span className="h-4 w-[2px] bg-primary/60" />
                    </div>

                  </div>

                  <p className="text-[7px] tracking-[0.18em] text-muted-foreground">
                    KEEP EXPLORING · KEEP LEARNING
                  </p>

                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* NAME */}
        <Reveal delay={200}>
          <p className="font-display text-lg text-primary">
            ✦ Hi I'm ✦
          </p>

          <div className="relative mx-auto mt-1 inline-block">

            <span className="sparkle sparkle-1" />
            <span className="sparkle sparkle-2" />
            <span className="sparkle sparkle-3" />
            <span className="sparkle sparkle-4" />
            <span className="sparkle sparkle-5" />
            <span className="sparkle sparkle-6" />
            <span className="sparkle sparkle-7" />
            <span className="sparkle sparkle-8" />

            <p className="relative font-display text-4xl font-medium sm:text-5xl animate-name-starfield animate-star-glow">
              Ainiya Faida Haura
            </p>

          </div>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore my digital journey book!
          </p>
        </Reveal>

        {/* QUICK LINKS */}
        <Reveal delay={300} className="mt-8 mb-8">
          <div
            className="orbit-carousel"
            onPointerDown={handleDown}
            onPointerMove={handleMove}
            onPointerUp={handleUp}
            onPointerCancel={() => {
              startX.current = null;
            }}
          >
            <div className="orbit-carousel-stage">

              <div
                className="orbit-carousel-ring"
                aria-hidden="true"
              />

              {quickLinks.map((link, index) => {
                const offset = getOffset(index, activeIndex);
                const Icon = link.icon;

                const isActive = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;

                let position = "orbit-position-back";

                if (isActive) {
                  position = "orbit-position-active";
                } else if (isLeft) {
                  position = "orbit-position-left";
                } else if (isRight) {
                  position = "orbit-position-right";
                }

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`orbit-card ${position}`}
                    onClick={(e) => {
                      if (moved.current) {
                        e.preventDefault();
                        moved.current = false;
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="orbit-card-icon">
                      <Icon className="size-5 text-primary" />
                    </span>

                    <span className="orbit-card-content">
                      <span className="font-display block truncate text-base">
                        {link.title}
                      </span>

                      <span className="block truncate text-[10px] text-muted-foreground">
                        {link.sub}
                      </span>
                    </span>

                    <span className="orbit-card-star">
                      ✦
                    </span>
                  </a>
                );
              })}

            </div>

            <div className="orbit-dots" aria-hidden="true">
              {quickLinks.map((_, index) => (
                <span
                  key={index}
                  className={`orbit-dot ${
                    index === activeIndex
                      ? "orbit-dot-active"
                      : ""
                  }`}
                />
              ))}
            </div>

          </div>
        </Reveal>

        <section
          aria-labelledby="star-notes-title"
          className="relative mx-auto mt-0 w-full max-w-md px-4 pb-2"
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-background/25 px-6 py-6 text-center shadow-lg backdrop-blur-lg">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[12%] top-[23%] text-primary/60 animate-[twinkle_3.2s_ease-in-out_infinite] motion-reduce:animate-none"
            >
              ✦
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-[13%] top-[27%] text-xs text-primary/50 animate-[twinkle_2.6s_ease-in-out_infinite] motion-reduce:animate-none"
            >
              ✧
            </span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[18%] right-[24%] text-[10px] text-primary/50 animate-[twinkle_3.8s_ease-in-out_infinite] motion-reduce:animate-none"
            >
              ✦
            </span>

            <Star
              aria-hidden="true"
              className="mx-auto mb-1 size-7 fill-primary/25 text-primary animate-[twinkle_2.8s_ease-in-out_infinite] motion-reduce:animate-none"
            />
            <h2
              id="star-notes-title"
              className="font-display text-xl text-foreground"
            >
              Star Notes
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Little moments from my ever-changing universe.
            </p>

            {starUpdates.length > 0 && (
              <div className="mt-5 grid gap-4 text-left">
                {starUpdates.map((update) => (
                  <article
                    key={`${update.date}-${update.title}`}
                    className="border-t border-primary/15 pt-4"
                  >
                    <p className="text-[10px] uppercase text-primary/80">
                      {update.date}
                    </p>
                    <h3 className="mt-1 font-display text-lg text-foreground">
                      {update.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {update.note}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

      </div>
    </section>
  );
          }
