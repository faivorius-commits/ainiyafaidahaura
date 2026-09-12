import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import {
  BookOpen,
  FileText,
  FolderHeart,
  MailOpen,
} from "lucide-react";
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

  const next = () => setActiveIndex((current) => (current + 1) % quickLinks.length);
  const previous = () => setActiveIndex((current) => (current - 1 + quickLinks.length) % quickLinks.length);

  const handlePointerDown = (event: PointerEvent) => {
    startX.current = event.clientX;
    moved.current = false;
  };

  const handlePointerMove = (event: PointerEvent) => {
    if (startX.current === null) return;
    if (Math.abs(event.clientX - startX.current) > 12) moved.current = true;
  };

  const handlePointerUp = (event: PointerEvent) => {
    if (startX.current === null) return;
    const distance = event.clientX - startX.current;
    if (Math.abs(distance) > 45) distance < 0 ? next() : previous();
    startX.current = null;
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-28 pb-20"
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
        <Reveal>
          <h1 className="text-6xl font-medium tracking-tight sm:text-7xl">Welcome</h1>
          <p className="mt-2 font-display text-lg italic text-primary">
            ✦ to my little universe ✦
          </p>
        </Reveal>

        <Reveal delay={120} className="my-10 flex justify-center">
          <div className="id-card-scene">
            <div className="id-card">
              <div className="id-card-face id-card-front">
                <img src="images/id-card.png" alt="Digital ID card" />
              </div>
              <div className="id-card-face id-card-back">
                <div className="flex h-full w-full flex-col items-center justify-center p-5 text-center">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-display text-sm text-primary">AFH</span>
                    <span className="text-primary">✦</span>
                  </div>
                  <div className="my-auto">
                    <div className="mb-3 text-3xl text-primary">◈</div>
                    <p className="font-display text-sm tracking-[0.2em] text-primary">DIGITAL IDENTITY</p>
                    <p className="mt-2 font-display text-lg font-medium">AINIYA FAIDA HAURA</p>
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

        <Reveal delay={200}>
          <p className="font-display text-lg text-primary">✦ Hi I'm ✦</p>
          <p className="font-display mt-1 text-4xl font-medium sm:text-5xl">
            Ainiya Faida Haura
          </p>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Somewhere between curiosity and code, I'm discovering the endless possibilities of the digital world.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-8">
          <div
            className="orbit-carousel"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => { startX.current = null; }}
          >
            <div className="orbit-carousel-stage">
              <div className="orbit-carousel-ring" aria-hidden="true" />
              {quickLinks.map((link, index) => {
                const offset = getOffset(index, activeIndex);
                const Icon = link.icon;
                const isActive = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;

                let positionClass = "orbit-position-back";
                if (isActive) positionClass = "orbit-position-active";
                else if (isLeft) positionClass = "orbit-position-left";
                else if (isRight) positionClass = "orbit-position-right";

                const content = (
                  <>
                    <span className="orbit-card-icon"><Icon className="size-5 text-primary" /></span>
                    <span className="orbit-card-content">
                      <span className="font-display block truncate text-base">{link.title}</span>
                      <span className="block truncate text-[10px] text-muted-foreground">{link.sub}</span>
                    </span>
                    <span className="orbit-card-star">✦</span>
                  </>
                );

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    download={link.id === "resume" ? true : undefined}
                    className={`orbit-card ${positionClass} ${isActive ? "orbit-card-active" : ""}`}
                    onClick={(event) => {
                      if (moved.current) {
                        event.preventDefault();
                        moved.current = false;
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
            <div className="orbit-dots" aria-hidden="true">
              {quickLinks.map((_, index) => (
                <span
                  key={index}
                  className={`orbit-dot ${index === activeIndex ? "orbit-dot-active" : ""}`}
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
