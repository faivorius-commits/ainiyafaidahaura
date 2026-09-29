import { useState, type CSSProperties } from "react";
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
    accent: "#ec4899",
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

  const bookStyle = {
    "--accent": current.accent,
  } as CSSProperties;

  return (
    <>
      {/* NORMAL WEBSITE BACKGROUND */}
      <section className="relative px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="Publication"
            subtitle="Books, stories, poetry, and pieces of writing preserved in my journey."
          />
        </div>
      </section>

      {/* COSMIC BACKGROUND ONLY AROUND THE BOOK */}
      <section className="publication-archive">
        <div className="archive-stars" />
        <div className="archive-glow archive-glow-one" />
        <div className="archive-glow archive-glow-two" />

        <div className="archive-content">
          <div className="archive-heading">
            <Library size={15} />
            <span>PERSONAL PUBLICATION ARCHIVE</span>
          </div>

          <div className="archive-counter">
            0{active + 1} / 0{publications.length}
          </div>

          {/* BOOK STAGE */}
          <div className="archive-stage">
            <div className="book-shadow" />

            <button
              type="button"
              className="archive-book"
              onClick={() => setOpen(true)}
              aria-label={`Open ${current.title}`}
            >
              <div
                className="book-cover"
                style={bookStyle}
              >
                <div className="book-light" />

                <Sparkles
                  className="book-sparkle"
                  size={27}
                />

                <span className="book-type">
                  {current.type}
                </span>

                <h2>{current.title}</h2>

                <p>{current.subtitle}</p>

                <div className="book-divider" />

                <span className="book-year">
                  {current.year}
                </span>
              </div>
            </button>

            <span className="archive-particle particle-a" />
            <span className="archive-particle particle-b" />
            <span className="archive-particle particle-c" />
          </div>

          {/* INFORMATION */}
          <div className="archive-info">
            <span className="archive-label">
              NOW EXPLORING
            </span>

            <h3>{current.title}</h3>

            <p>{current.description}</p>

            <div className="archive-meta">
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
              type="button"
              className="archive-open"
              onClick={() => setOpen(true)}
            >
              <BookOpen size={15} />
              OPEN PUBLICATION
              <Sparkles size={13} />
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="archive-navigation">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous publication"
            >
              <ArrowLeft size={16} />
            </button>

            <div className="archive-dots">
              {publications.map((publication, index) => (
                <button
                  type="button"
                  key={publication.title}
                  className={
                    index === active
                      ? "archive-dot active"
                      : "archive-dot"
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
              type="button"
              onClick={next}
              aria-label="Next publication"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* PUBLICATION READER */}
      {open && (
        <div className="publication-reader">
          <div className="reader-window">
            <button
              type="button"
              className="reader-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={19} />
            </button>

            <div
              className="reader-cover"
              style={bookStyle}
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
                    <ExternalLink size={13} />
                    VERIFY PUBLICATION
                  </a>
                )}

                <button
                  type="button"
                  className="reader-next"
                  onClick={next}
                >
                  NEXT
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* =================================
           PUBLICATION ARCHIVE
           Cosmic background ONLY here
           ================================= */

        .publication-archive {
          position: relative;
          width: 100%;
          min-height: 720px;
          overflow: hidden;
          padding: 55px 15px 70px;
          color: white;
          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(139, 92, 246, 0.24),
              transparent 34%
            ),
            radial-gradient(
              circle at 10% 70%,
              rgba(76, 29, 149, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 75%,
              rgba(168, 85, 247, 0.14),
              transparent 32%
            ),
            linear-gradient(
              180deg,
              #18052f 0%,
              #0e0320 55%,
              #07020f 100%
            );
        }

        .archive-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.65;
          background-image:
            radial-gradient(
              circle,
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1.5px
            ),
            radial-gradient(
              circle,
              rgba(196, 181, 253, 0.7) 1px,
              transparent 1.5px
            );
          background-size:
            75px 75px,
            135px 135px;
          animation: archiveStars 22s linear infinite;
        }

        .archive-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(110px);
          opacity: 0.15;
        }

        .archive-glow-one {
          top: -160px;
          left: -170px;
          background: #8b5cf6;
        }

        .archive-glow-two {
          right: -180px;
          bottom: -170px;
          background: #ec4899;
        }

        .archive-content {
          position: relative;
          z-index: 2;
          max-width: 950px;
          min-height: 640px;
          margin: 0 auto;
          padding: 28px 22px 32px;
          overflow: hidden;
          border: 1px solid rgba(216, 180, 254, 0.2);
          border-radius: 28px;
          background: rgba(20, 5, 40, 0.42);
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.5),
            inset 0 1px rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
        }

        .archive-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: #d8b4fe;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .archive-counter {
          position: absolute;
          top: 28px;
          right: 25px;
          color: #a78bfa;
          font-family: monospace;
          font-size: 9px;
        }

        /* BOOK */

        .archive-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 360px;
          perspective: 1000px;
        }

        .book-shadow {
          position: absolute;
          bottom: 30px;
          width: 250px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          filter: blur(19px);
          animation: bookShadow 5s ease-in-out infinite;
        }

        .archive-book {
          position: relative;
          width: 215px;
          height: 290px;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          transform: rotateY(-12deg);
          transform-style: preserve-3d;
          animation: floatingBook 5s ease-in-out infinite;
          transition: 0.45s ease;
        }

        .archive-book:hover {
          transform:
            rotateY(-3deg)
            translateY(-12px)
            scale(1.04);
        }

        .book-cover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 24px;
          border: 1px solid var(--accent);
          border-radius: 7px 16px 16px 7px;
          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(168, 85, 247, 0.35),
              transparent 45%
            ),
            linear-gradient(
              145deg,
              #35115c,
              #0b0217
            );
          box-shadow:
            0 0 30px rgba(168, 85, 247, 0.32),
            18px 25px 45px rgba(0, 0, 0, 0.65);
        }

        .book-light {
          position: absolute;
          top: -70px;
          right: -55px;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.27;
          filter: blur(42px);
        }

        .book-sparkle {
          position: relative;
          color: #fbbf24;
          filter: drop-shadow(
            0 0 10px rgba(251, 191, 36, 0.8)
          );
        }

        .book-type {
          position: relative;
          margin-top: 17px;
          color: #c4b5fd;
          font-size: 7px;
          letter-spacing: 0.15em;
          text-align: center;
          text-transform: uppercase;
        }

        .book-cover h2 {
          position: relative;
          margin: 11px 0 6px;
          color: #fef3c7;
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 500;
          text-shadow:
            0 0 17px rgba(251, 191, 36, 0.4);
        }

        .book-cover p {
          position: relative;
          max-width: 165px;
          margin: 0;
          color: #ddd6fe;
          font-size: 8px;
          line-height: 1.5;
          text-align: center;
        }

        .book-divider {
          position: relative;
          width: 68%;
          height: 1px;
          margin-top: 17px;
          background:
            linear-gradient(
              90deg,
              transparent,
              #fbbf24,
              transparent
            );
          box-shadow:
            0 0 10px rgba(251, 191, 36, 0.7);
        }

        .book-year {
          position: relative;
          margin-top: 12px;
          color: #fbbf24;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: 0.2em;
        }

        /* PARTICLES */

        .archive-particle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f9a8d4;
          box-shadow:
            0 0 15px rgba(249, 168, 212, 0.9);
          animation:
            particleFloat
            4s
            ease-in-out
            infinite;
        }

        .particle-a {
          top: 70px;
          left: 30%;
        }

        .particle-b {
          top: 135px;
          right: 27%;
          background: #c4b5fd;
          box-shadow:
            0 0 15px rgba(196, 181, 253, 0.9);
          animation-delay: 0.8s;
        }

        .particle-c {
          bottom: 65px;
          left: 35%;
          background: #fbbf24;
          box-shadow:
            0 0 15px rgba(251, 191, 36, 0.9);
          animation-delay: 1.4s;
        }

        /* INFORMATION */

        .archive-info {
          max-width: 650px;
          margin: 0 auto;
          text-align: center;
        }

        .archive-label {
          color: #a78bfa;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .archive-info h3 {
          margin: 7px 0;
          color: #fef3c7;
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 500;
        }

        .archive-info > p {
          max-width: 550px;
          margin: 0 auto;
          color: #c4b5fd;
          font-size: 12px;
          line-height: 1.8;
        }

        .archive-meta {
          display: flex;
          justify-content: center;
          gap: 42px;
          margin-top: 23px;
        }

        .archive-meta div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .archive-meta span {
          color: #8b5cf6;
          font-size: 7px;
          letter-spacing: 0.15em;
        }

        .archive-meta strong {
          max-width: 170px;
          color: #e9d5ff;
          font-size: 9px;
          font-weight: 500;
        }

        .archive-open {
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
              rgba(124, 58, 237, 0.38),
              rgba(219, 39, 119, 0.18)
            );
          color: #fef3c7;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .archive-open:hover {
          transform: translateY(-3px);
          box-shadow:
            0 0 28px rgba(168, 85, 247, 0.4);
        }

        /* NAVIGATION */

        .archive-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          margin-top: 27px;
        }

        .archive-navigation > button {
          display: grid;
          width: 37px;
          height: 37px;
          place-items: center;
          border: 1px solid rgba(196, 181, 253, 0.28);
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.1);
          color: #ddd6fe;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .archive-navigation > button:hover {
          background: rgba(139, 92, 246, 0.28);
          border-color: #a855f7;
          box-shadow:
            0 0 20px rgba(139, 92, 246, 0.4);
        }

        .archive-dots {
          display: flex;
          gap: 7px;
        }

        .archive-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #4c1d95;
          cursor: pointer;
        }

        .archive-dot.active {
          width: 24px;
          border-radius: 10px;
          background:
            linear-gradient(
              90deg,
              #a855f7,
              #ec4899
            );
          box-shadow:
            0 0 15px rgba(168, 85, 247, 0.8);
        }

        /* READER */

        .publication-reader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(4, 1, 12, 0.88);
          backdrop-filter: blur(18px);
        }

        .reader-window {
          position: relative;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          width: min(850px, 100%);
          min-height: 500px;
          overflow: hidden;
          border: 1px solid rgba(216, 180, 254, 0.3);
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              #1b0733,
              #090313
            );
          box-shadow:
            0 50px 120px rgba(0, 0, 0, 0.8);
          animation:
            readerAppear
            0.3s
            ease;
        }

        .reader-close {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 5;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.3);
          color: #ddd6fe;
          cursor: pointer;
        }

                .reader-cover {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 500px;
          padding: 40px;
          border-right: 1px solid rgba(216, 180, 254, 0.15);
          background:
            linear-gradient(
              145deg,
              #321052,
              #090313
            );
          text-align: center;
        }

        .reader-cover svg {
          color: #fbbf24;
          filter:
            drop-shadow(
              0 0 12px rgba(251, 191, 36, 0.8)
            );
        }

        .reader-cover span {
          margin-top: 20px;
          color: #c4b5fd;
          font-size: 9px;
          letter-spacing: 0.16em;
        }

        .reader-cover h2 {
          margin: 12px 0 8px;
          color: #fef3c7;
          font-family: Georgia, serif;
          font-size: 42px;
          font-weight: 500;
        }

        .reader-cover p {
          max-width: 220px;
          margin: 0;
          color: #c4b5fd;
          font-size: 11px;
          line-height: 1.6;
        }

        .reader-cover strong {
          position: absolute;
          bottom: 30px;
          color: #fbbf24;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .reader-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 55px 45px;
        }

        .reader-small {
          color: #a78bfa;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .reader-page h2 {
          margin: 10px 0;
          color: white;
          font-family: Georgia, serif;
          font-size: 38px;
          font-weight: 500;
        }

        .reader-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 10px 0 18px;
        }

        .reader-line i {
          width: 45px;
          height: 1px;
          background: #a855f7;
        }

        .reader-line svg {
          color: #fbbf24;
        }

        .reader-page > p {
          margin: 0;
          color: #c4b5fd;
          font-size: 13px;
          line-height: 1.9;
        }

        .reader-identifier {
          margin-top: 25px;
          padding: 13px;
          border-left: 2px solid #a855f7;
          background: rgba(139, 92, 246, 0.12);
        }

        .reader-identifier span {
          display: block;
          color: #a78bfa;
          font-size: 8px;
          letter-spacing: 0.15em;
        }

        .reader-identifier strong {
          display: block;
          margin-top: 5px;
          color: #fef3c7;
          font-family: monospace;
          font-size: 12px;
        }

        .reader-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 25px;
        }

        .reader-verify,
        .reader-next {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 40px;
          padding: 10px 15px;
          border-radius: 999px;
          font-size: 9px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .reader-verify {
          border: 1px solid #a855f7;
          background:
            linear-gradient(
              135deg,
              #7c3aed,
              #db2777
            );
          color: white;
        }

        .reader-next {
          border: 1px solid rgba(196, 181, 253, 0.3);
          background: rgba(139, 92, 246, 0.1);
          color: #ddd6fe;
        }

        .reader-verify:hover,
        .reader-next:hover {
          transform: translateY(-2px);
          box-shadow:
            0 0 25px rgba(168, 85, 247, 0.4);
        }

        /* ANIMATIONS */

        @keyframes floatingBook {
          0%,
          100% {
            transform:
              rotateY(-12deg)
              translateY(0);
          }

          50% {
            transform:
              rotateY(-7deg)
              translateY(-15px);
          }
        }

        @keyframes bookShadow {
          0%,
          100% {
            transform: scaleX(1);
            opacity: 0.7;
          }

          50% {
            transform: scaleX(0.8);
            opacity: 0.45;
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform:
              translateY(0)
              scale(1);
            opacity: 0.5;
          }

          50% {
            transform:
              translateY(-25px)
              scale(1.4);
            opacity: 1;
          }
        }

        @keyframes archiveStars {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-80px);
          }
        }

        @keyframes readerAppear {
          from {
            opacity: 0;
            transform: scale(0.94);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* MOBILE */

        @media (max-width: 700px) {
          .publication-archive {
            min-height: 720px;
            padding: 45px 12px 65px;
          }

          .archive-content {
            min-height: 640px;
            padding: 25px 14px 30px;
            border-radius: 24px;
          }

          .archive-heading {
            font-size: 8px;
          }

          .archive-counter {
            position: static;
            margin-top: 10px;
            text-align: center;
          }

          .archive-stage {
            height: 350px;
          }

          .archive-book {
            width: 200px;
            height: 275px;
          }

          .archive-info h3 {
            font-size: 25px;
          }

          .archive-info > p {
            padding: 0 10px;
            font-size: 11px;
          }

          .archive-meta {
            gap: 14px;
          }

          .archive-meta strong {
            max-width: 105px;
            font-size: 8px;
          }

          .archive-open {
            font-size: 8px;
            padding: 10px 15px;
          }

          .archive-navigation {
            margin-top: 24px;
          }

          .publication-reader {
            padding: 12px;
          }

          .reader-window {
            display: block;
            width: 100%;
            max-height: 92vh;
            overflow-y: auto;
            border-radius: 22px;
          }

          .reader-cover {
            min-height: 300px;
            padding: 35px 25px;
            border-right: 0;
            border-bottom: 1px solid rgba(216, 180, 254, 0.15);
          }

          .reader-cover h2 {
            font-size: 34px;
          }

          .reader-cover strong {
            bottom: 20px;
          }

          .reader-page {
            padding: 38px 24px;
          }

          .reader-page h2 {
            font-size: 30px;
          }

          .reader-page > p {
            font-size: 12px;
          }

          .reader-actions {
            flex-direction: column;
          }

          .reader-verify,
          .reader-next {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
   
