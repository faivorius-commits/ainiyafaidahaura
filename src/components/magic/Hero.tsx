import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { BookOpen, FileText, FolderHeart, MailOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import { FeaturedHighlights } from "./FeaturedHighlights";

const quickLinks = [
  {
    id: "journey",
    href: "/journey",
    icon: BookOpen,
    title: "My Journey",
    sub: "The story behind who I am today",
  },
  {
    id: "resume",
    href: "/Ainiya-Faida-Haura-CV.pdf",
    icon: FileText,
    title: "My Resume",
    sub: "A glimpse into my experience and skills",
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

  const next = () =>
    setActiveIndex((current) => (current + 1) % quickLinks.length);

  const prev = () =>
    setActiveIndex(
      (current) => (current - 1 + quickLinks.length) % quickLinks.length,
    );

  const handleDown = (event: PointerEvent) => {
    startX.current = event.clientX;
    moved.current = false;
  };

  const handleMove = (event: PointerEvent) => {
    if (
      startX.current !== null &&
      Math.abs(event.clientX - startX.current) > 12
    ) {
      moved.current = true;
    }
  };

  const handleUp = (event: PointerEvent) => {
    if (startX.current === null) return;

    const distance = event.clientX - startX.current;

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
        {/* Welcome */}
        <Reveal>
          <h1 className="text-6xl font-medium tracking-tight sm:text-7xl">
            Welcome
          </h1>

          <p className="mt-2 font-display text-lg italic text-primary">
            ✦ to my little universe ✦
          </p>
        </Reveal>

        {/* ORIGINAL ID CARD */}
        <Reveal delay={120} className="my-10 flex justify-center">
          <div className="id-card-scene">
            <div className="id-card">
              <div className="id-card-face id-card-front">
                <img
                  src="/images/id-card.png"
                  alt="Ainiya Faida Haura digital ID card"
                />
              </div>

              <div className="id-card-face id-card-back">
                <div className="id-card-back-content">
                  <div className="id-card-back-star">✦</div>

                  <p className="font-display text-sm tracking-[0.25em] text-primary">
                    AINIYA
                  </p>

                  <p className="mt-2 text-xs text-muted-foreground">
                    Writer · Creator · Dreamer
                  </p>

                  <div className="id-card-back-line" />

                  <p className="text-[9px] tracking-[0.16em] text-muted-foreground">
                    LEARNING · DREAMING · ACHIEVING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Introduction */}
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

            <p className="relative animate-name-starfield animate-star-glow font-display text-4xl font-medium sm:text-5xl">
              Ainiya Faida Haura
            </p>
          </div>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Somewhere between curiosity and code, I'm discovering the endless
            possibilities of the digital world.
          </p>
        </Reveal>

        {/* Navigation Cards */}
        <Reveal delay={300} className="mt-8 mb-16">
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
              <div className="orbit-carousel-ring" aria-hidden="true" />

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
                    download={link.id === "resume" ? true : undefined}
                    className={`orbit-card ${position}`}
                    onClick={(event) => {
                      if (moved.current) {
                        event.preventDefault();
                        moved.current = false;
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="orbit-card-icon">
                      <Icon className="size-5 text-primary" />
                    </span>

                    <span className="orbit-card-content">
                      <span className="block truncate font-display text-base">
                        {link.title}
                      </span>

                      <span className="block truncate text-[10px] text-muted-foreground">
                        {link.sub}
                      </span>
                    </span>

                    <span className="orbit-card-star">✦</span>
                  </a>
                );
              })}
            </div>

            <div className="orbit-dots" aria-hidden="true">
              {quickLinks.map((_, index) => (
                <span
                  key={index}
                  className={`orbit-dot ${
                    index === activeIndex ? "orbit-dot-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <FeaturedHighlights />
    </section>
  );
                    }
