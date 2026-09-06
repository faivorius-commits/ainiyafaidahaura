import { useRef, useState } from "react";
import {
  BookOpen,
  FolderHeart,
  MailOpen,
  ShieldCheck,
  Download,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const quickLinks = [
  {
    id: "cybersecurity",
    to: "/cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    sub: "Learning, challenges, and technical growth",
  },
  {
    id: "journey",
    to: "/journey",
    icon: BookOpen,
    title: "My Journey",
    sub: "The story behind who I am today",
  },
  {
    id: "archive",
    to: "/archive",
    icon: FolderHeart,
    title: "My Digital Archive",
    sub: "Writings, projects, and moments",
  },
  {
    id: "contact",
    to: "/contact",
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

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + quickLinks.length) % quickLinks.length,
    );
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    startX.current = event.clientX;
    moved.current = false;
  };

  const handlePointerMove = (event: React.PointerEvent) => {
    if (startX.current === null) return;

    if (Math.abs(event.clientX - startX.current) > 12) {
      moved.current = true;
    }
  };

  const handlePointerUp = (event: React.PointerEvent) => {
    if (startX.current === null) return;

    const distance = event.clientX - startX.current;

    if (Math.abs(distance) > 45) {
      if (distance < 0) {
        next();
      } else {
        previous();
      }
    }

    startX.current = null;
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-28 pb-20"
    >
      {/* Background */}
      <img
        src="/images/sky.jpg"
        alt=""
        aria-hidden
        width={1024}
        height={1536}
        className="pointer-events-none absolute inset-0 -z-20 size-full object-cover opacity-40"
      />

      <div
        aria-hidden
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

        {/* ========================= */}
        {/* ID CARD */}
        {/* ========================= */}

        <Reveal delay={120} className="my-10 flex justify-center">
          <div className="id-card-float">
            <div className="id-card-scene">
              <div className="id-card">
                {/* FRONT */}
                <div className="id-card-face id-card-front">
                  <img
                    src="/images/id-card.png"
                    alt="Ainiya Faida Haura digital ID card"
                    className="id-card-image"
                  />

                  {/* Shine */}
                  <span
                    aria-hidden
                    className="id-card-shine"
                  />
                </div>

                {/* BACK */}
                <div className="id-card-face id-card-back">
                  <div className="id-back-inner">
                    <div className="id-back-top">
                      <span>AFH</span>
                      <span>✦</span>
                    </div>

                    <div className="id-back-symbol">
                      ◈
                    </div>

                    <p className="id-back-title">
                      DIGITAL IDENTITY
                    </p>

                    <p className="id-back-code">
                      SHA256: AB29DAF6
                    </p>

                    <div className="id-back-lines">
                      <span />
                      <span />
                      <span />
                    </div>

                    <p className="id-back-footer">
                      AINIYA FAIDA HAURA
                    </p>
                  </div>

                  {/* Shine on back */}
                  <span
                    aria-hidden
                    className="id-card-shine"
                  />
                </div>
              </div>
            </div>

            {/* Decorative stars */}
            <span
              aria-hidden
              className="id-card-star id-card-star-one animate-twinkle"
            >
              ✦
            </span>

            <span
              aria-hidden
              className="id-card-star id-card-star-two animate-twinkle"
            >
              ✦
            </span>

            <span
              aria-hidden
              className="id-card-star id-card-star-three animate-twinkle"
            >
              ✧
            </span>
          </div>
        </Reveal>

        {/* Introduction */}
        <Reveal delay={200}>
          <p className="font-display text-lg text-primary">
            ✦ Hi I'm ✦
          </p>

          <p className="font-display mt-1 text-4xl font-medium sm:text-5xl">
            Ainiya Faida Haura
          </p>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Somewhere between curiosity and code, I'm discovering the
            endless possibilities of the digital world.
          </p>
        </Reveal>

        {/* ========================= */}
        {/* QUICK LINKS */}
        {/* ========================= */}

        <Reveal delay={300} className="mt-8">
          <div
            className="orbit-carousel"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              startX.current = null;
            }}
          >
            <div className="orbit-carousel-stage">
              <div className="orbit-carousel-ring" aria-hidden />

              {quickLinks.map((link, index) => {
                const offset = getOffset(index, activeIndex);
                const Icon = link.icon;

                const isActive = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;

                let positionClass = "orbit-position-back";

                if (isActive) {
                  positionClass = "orbit-position-active";
                }

                if (isLeft) {
                  positionClass = "orbit-position-left";
                }

                if (isRight) {
                  positionClass = "orbit-position-right";
                }

                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    className={`orbit-card ${positionClass} ${
                      isActive ? "orbit-card-active" : ""
                    }`}
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
                  </Link>
                );
              })}
            </div>

            <div className="orbit-dots" aria-hidden>
              {quickLinks.map((link, index) => (
                <span
                  key={link.id}
                  className={`orbit-dot ${
                    index === activeIndex ? "orbit-dot-active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
                              }
