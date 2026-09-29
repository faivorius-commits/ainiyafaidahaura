import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  FileText,
  Library,
  Sparkles,
  X,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";

type Publication = {
  title: string;
  subtitle: string;
  type: string;
  year: string;
  identifierLabel: string;
  identifier: string;
  description: string;
  url?: string;
  accent: string;
};

const publications: Publication[] = [
  {
    title: "Heal",
    subtitle: "Festival Sastra Volume 6",
    type: "Short Story Anthology",
    year: "2026",
    identifierLabel: "QRCBN",
    identifier: "62-6264-2709-644",
    description:
      "A short story published as part of Festival Sastra Volume 6.",
    url: "https://qrcbn.com/check/62-6264-2709-644",
    accent: "#a855f7",
  },
  {
    title: "A Little More Spring",
    subtitle: "Her Story In Your Poem",
    type: "Poetry Anthology",
    year: "2026",
    identifierLabel: "ISBN",
    identifier: "978-81-904011-0-4",
    description:
      "A poetry anthology featuring stories and voices expressed through poetry.",
    accent: "#c084fc",
  },
];

export function Publication() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const current = publications[active];

  const previous = () => {
    setActive(
      (active - 1 + publications.length) % publications.length
    );
    setOpen(false);
  };

  const next = () => {
    setActive((active + 1) % publications.length);
    setOpen(false);
  };

  return (
    <>
      {/* NORMAL WEBSITE BACKGROUND */}
      <section className="publication-intro">
        <div className="publication-intro-inner">
          <SectionTitle
            title="Publication"
            subtitle="Books, stories, poetry, and pieces of writing preserved in my journey."
          />
        </div>
      </section>

      {/* COSMIC BACKGROUND ONLY FOR THE BOOK AREA */}
      <section className="publication-book-area">
        <div className="publication-cosmic-bg" />

        <div className="publication-content">
          <div className="publication-heading">
            <Library size={15} />
            <span>PERSONAL PUBLICATION ARCHIVE</span>
          </div>

          <div className="publication-counter">
            0{active + 1} / 0{publications.length}
          </div>

          {/* BOOK */}
          <div className="publication-stage">
            <div className="book-shadow" />

            <button
              className="publication-book"
              onClick={() => setOpen(true)}
              aria-label={`Open ${current.title}`}
            >
              <div
                className="publication-book-cover"
                style={{
                  borderColor: current.accent,
                  boxShadow: `
                    0 0 28px ${current.accent}55,
                    15px 22px 45px rgba(0,0,0,.65)
                  `,
                }}
              >
                <div
                  className="book-glow"
                  style={{
                    background: current.accent,
                  }}
                />

                <Sparkles
                  className="book-sparkle"
                  size={26}
                />

                <span className="book-type">
                  {current.type}
                </span>

                <h2>{current.title}</h2>

                <p>{current.subtitle}</p>

                <div
                  className="book-divider"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      transparent,
                      ${current.accent},
                      transparent
                    )`,
                  }}
                />

                <span className="book-year">
                  {current.year}
                </span>
              </div>
            </button>

            <span className="archive-particle particle-one" />
            <span className="archive-particle particle-two" />
            <span className="archive-particle particle-three" />
          </div>

          {/* INFORMATION */}
          <div className="publication-info">
            <span className="publication-label">
              NOW EXPLORING
            </span>

            <h3>{current.title}</h3>

            <p>{current.description}</p>

            <div className="publication-meta">
              <div>
                <span>TYPE</span>
                <strong>{current.type}</strong>
              </div>

              <div>
                <span>YEAR</span>
                <strong>{current.year}</strong>
              </div>

              <div>
                <span>{current.identifierLabel}</span>
                <strong>{current.identifier}</strong>
              </div>
            </div>

            <button
              className="publication-open"
              onClick={() => setOpen(true)}
            >
              <BookOpen size={15} />
              OPEN PUBLICATION
              <Sparkles size={13} />
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="publication-navigation">
            <button
              onClick={previous}
              aria-label="Previous publication"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="publication-dots">
              {publications.map((publication, index) => (
                <button
                  key={publication.title}
                  className={
                    index === active
                      ? "publication-dot active"
                      : "publication-dot"
                  }
                  onClick={() => {
                    setActive(index);
                    setOpen(false);
                  }}
                  aria-label={`Select ${publication.title}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next publication"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* READER MODAL */}
      {open && (
        <div className="publication-reader">
          <div className="reader-window">
            <button
              className="reader-close"
              onClick={() => setOpen(false)}
              aria-label="Close publication"
            >
              <X size={19} />
            </button>

            <div
              className="reader-cover"
              style={{
                borderColor: `${current.accent}55`,
              }}
            >
              <FileText size={29} />

              <span>{current.type}</span>

              <h2>{current.title}</h2>

              <p>{current.subtitle}</p>

              <strong>{current.year}</strong>
            </div>

            <div className="reader-page">
              <span className="reader-small">
                PUBLICATION ARCHIVE
              </span>

              <h2>{current.title}</h2>

              <div className="reader-line">
                <i />
                <Sparkles size={12} />
                <i />
              </div>

              <p>{current.description}</p>

              <div className="reader-identifier">
                <span>{current.identifierLabel}</span>
                <strong>{current.identifier}</strong>
              </div>

              <div className="reader-actions">
                {current.url && (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noreferrer"
                    className="reader-verify"
                  >
                    <ExternalLink size={14} />
                    VERIFY PUBLICATION
                  </a>
                )}

                <button
                  className="reader-next"
                  onClick={next}
                >
                  NEXT
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ================================
           NORMAL WEBSITE AREA
           ================================ */

        .publication-intro {
          position: relative;
          width: 100%;
          padding: 70px 20px 55px;
        }

        .publication-intro-inner {
          max-width: 900px;
          margin: 0 auto;
        }


        /* ================================
           COSMIC ONLY AROUND THE BOOK
           ================================ */

        .publication-book-area {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 30px 15px 70px;
        }

        .publication-cosmic-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(126, 34, 206, 0.22),
              transparent 32%
            ),
            radial-gradient(
              circle at 15% 70%,
              rgba(88, 28, 135, 0.16),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(147, 51, 234, 0.12),
              transparent 30%
            ),
            linear-gradient(
              180deg,
              rgba(20, 8, 40, 0.98),
              rgba(8, 3, 18, 0.98)
            );
        }

        .publication-cosmic-bg::before {
          content: "";
          position: absolute;
          inset: 0;

          background-image:
            radial-gradient(
              circle,
              rgba(255,255,255,.85) 1px,
              transparent 1.5px
            ),
            radial-gradient(
              circle,
              rgba(196,181,253,.6) 1px,
              transparent 1.5px
            );

          background-size:
            75px 75px,
            130px 130px;

          background-position:
            10px 20px,
            40px 60px;

          opacity: .55;

          animation: starsMove 22s linear infinite;
        }

        .publication-content {
          position: relative;
          z-index: 2;

          max-width: 950px;
          min-height: 650px;

          margin: 0 auto;
          padding: 28px 24px 35px;

          overflow: hidden;

          border: 1px solid rgba(216,180,254,.2);
          border-radius: 28px;

          background: rgba(20, 5, 40, .42);

          box-shadow:
            0 35px 90px rgba(0,0,0,.45),
            inset 0 1px rgba(255,255,255,.05);

          backdrop-filter: blur(10px);
        }

        .publication-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          color: #d8b4fe;

          font-size: 9px;
          font-weight: 700;
          letter-spacing: .2em;
        }

        .publication-counter {
          position: absolute;
          top: 28px;
          right: 28px;

          color: #a78bfa;

          font-family: monospace;
          font-size: 9px;
        }


        /* ================================
           BOOK
           ================================ */

        .publication-stage {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          height: 350px;

          perspective: 1000px;
        }

        .book-shadow {
          position: absolute;
          bottom: 25px;

          width: 245px;
          height: 38px;

          border-radius: 50%;

          background: rgba(0,0,0,.65);

          filter: blur(18px);

          animation: bookShadow 5s ease-in-out infinite;
        }

        .publication-book {
          position: relative;

          width: 205px;
          height: 285px;

          padding: 0;

          border: 0;
          background: transparent;

          cursor: pointer;

          transform-style: preserve-3d;

          animation: floatingBook 5s ease-in-out infinite;

          transition: .45s ease;
        }

        .publication-book:hover {
          transform:
            rotateY(-4deg)
            translateY(-10px)
            scale(1.04);
        }

        .publication-book-cover {
          position: absolute;
          inset: 0;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          padding: 22px;

          border-width: 1px;
          border-style: solid;

          border-radius: 7px 15px 15px 7px;

          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(168,85,247,.35),
              transparent 44%
            ),
            linear-gradient(
              145deg,
              #321052,
              #0a0215
            );

          box-shadow:
            inset 5px 0 15px rgba(255,255,255,.03);
        }

        .book-glow {
          position: absolute;

          top: -65px;
          right: -55px;

          width: 160px;
          height: 160px;

          border-radius: 50%;

          opacity: .24;

          filter: blur(42px);
        }

        .book-sparkle {
          position: relative;

          color: #fbbf24;

          filter:
            drop-shadow(
              0 0 10px
              rgba(251,191,36,.8)
            );
        }

        .book-type {
          position: relative;

          margin-top: 16px;

          color: #c4b5fd;

          font-size: 7px;
          letter-spacing: .15em;
          text-align: center;
          text-transform: uppercase;
        }

        .publication-book-cover h2 {
          position: relative;

          margin: 10px 0 5px;

          color: #fef3c7;

          font-family: Georgia, serif;

          font-size: 29px;
          font-weight: 500;

          text-shadow:
            0 0 15px
            rgba(251,191,36,.35);
        }

        .publication-book-cover p {
          position: relative;

          max-width: 155px;

          margin: 0;

          color: #ddd6fe;

          font-size: 8px;
          line-height: 1.5;
          text-align: center;
        }

        .book-divider {
          position: relative;

          width: 65%;
          height: 1px;

          margin-top: 15px;

          box-shadow:
            0 0 10px
            rgba(251,191,36,.5);
        }

        .book-year {
          position: relative;

          margin-top: 11px;

          color: #fbbf24;

          font-family: monospace;

          font-size: 8px;
          letter-spacing: .2em;
        }


        /* ================================
           PARTICLES
           ================================ */

        .archive-particle {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #f9a8d4;

          box-shadow:
            0 0 14px
            rgba(249,168,212,.9);

          animation:
            particleFloat
            4s
            ease-in-out
            infinite;
        }

        .particle-one {
          top: 65px;
          left: 30%;
        }

        .particle-two {
          top: 125px;
          right: 27%;

          background: #c4b5fd;

          box-shadow:
            0 0 14px
            rgba(196,181,253,.9);

          animation-delay: .8s;
        }

        .particle-three {
          bottom: 60px;
          left: 35%;

          background: #fbbf24;

          box-shadow:
            0 0 14px
            rgba(251,191,36,.9);

          animation-delay: 1.4s;
        }


        /* ================================
           INFORMATION
           ================================ */

        .publication-info {
          max-width: 650px;

          margin: 0 auto;

          text-align: center;
        }

        .publication-label {
          color: #a78bfa;

          font-size: 8px;
          font-weight: 700;

          letter-spacing: .2em;
        }

        .publication-info h3 {
          margin: 7px 0;

          color: #fef3c7;

          font-family: Georgia, serif;

          font-size: 27px;
          font-weight: 500;
        }

        .publication-info > p {
          max-width: 550px;

          margin: 0 auto;

          color: #c4b5fd;

          font-size: 12px;
          line-height: 1.8;
        }

        .publication-meta {
          display: flex;
          justify-content: center;

          gap: 40px;

          margin-top: 22px;
        }

        .publication-meta div {
          display: flex;
          flex-direction: column;

          gap: 5px;
        }

        .publication-meta span {
          color: #8b5cf6;

          font-size: 7px;
          letter-spacing: .15em;
        }

        .publication-meta strong {
          max-width: 170px;

          color: #e9d5ff;

          font-size: 9px;
          font-weight: 500;
        }

        .publication-open {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          margin-top: 23px;

          padding: 11px 18px;

          border: 1px solid #a855f7;
          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              rgba(124,58,237,.35),
              rgba(219,39,119,.18)
            );

          color: #fef3c7;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: .1em;

          cursor: pointer;

          transition: .3s ease;
        }

        .publication-open:hover {
          transform: translateY(-3px);

          box-shadow:
            0 0 25px
            rgba(168,85,247,.35);
        }


        /* ================================
           NAVIGATION
           ================================ */

        .publication-navigation {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 22px;

          margin-top: 27px;
        }

        .publication-navigation > button {
          display: grid;

          width: 36px;
          height: 36px;

          place-items: center;

          border: 1px solid
            rgba(196,181,253,.28);

          border-radius: 50%;

          background:
            rgba(139,92,246,.1);

          color: #ddd6fe;

          cursor: pointer;

          transition: .3s ease;
        }

        .publication-navigation > button:hover {
          background:
            rgba(139,92,246,.25);

          border-color: #a855f7;

          box-shadow:
            0 0 18px
            rgba(139,92,246,.35);
        }

        .publication-dots {
          display: flex;
          gap: 7px;
        }

        .publication-dot {
          width: 7px;
          height: 7px;

          padding: 0;

          border: 0;
          border-radius: 50%;

          background: #4c1d95;

          cursor: pointer;
        }

        .publication-dot.active {
          width: 24px;

          border-radius: 10px;

          background:
            linear-gradient(
              90deg,
              #a855f7,
              #ec4899
            );

          box-shadow:
            0 0 12px
            rgba(168,85,247,.7);
        }


        /* ================================
           READER
           ================================ */

        .publication-reader {
          position: fixed;
          inset: 0;

          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          background:
            rgba(4,1,12,.82);

          backdrop-filter: blur(15px);
        }

        .reader-window {
          position: relative;

          display: grid;

          grid-template-columns:
            .8f
