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

  return (
    <>
      <section className="relative px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            title="Publication"
            subtitle="Books, stories, poetry, and pieces of writing preserved in my journey."
          />
        </div>
      </section>

      <section className="publication-archive">
        <div className="archive-stars" />
        <div className="archive-glow glow-one" />
        <div className="archive-glow glow-two" />

        <div className="archive-content">
          <div className="archive-heading">
            <Library size={16} />
            <span>PERSONAL PUBLICATION ARCHIVE</span>
          </div>

          <div className="archive-counter">
            0{active + 1} / 0{publications.length}
          </div>

          <div className="archive-stage">
            <div className="book-shadow" />

            <button
              className="archive-book"
              onClick={() => setOpen(true)}
              aria-label={`Open ${current.title}`}
            >
              <div
                className="book-cover"
                style={
                  {
                    "--accent": current.accent,
                  } as React.CSSProperties
                }
              >
                <div className="book-light" />

                <Sparkles
                  className="book-sparkle"
                  size={28}
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
              className="archive-open"
              onClick={() => setOpen(true)}
            >
              <BookOpen size={16} />
              OPEN PUBLICATION
              <Sparkles size={14} />
            </button>
          </div>

          <div className="archive-navigation">
            <button
              onClick={previous}
              aria-label="Previous publication"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="archive-dots">
              {publications.map((publication, index) => (
                <button
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
              onClick={next}
              aria-label="Next publication"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {open && (
        <div className="publication-reader">
          <div className="reader-window">
            <button
              className="reader-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div
              className="reader-cover"
              style={
                {
                  "--accent": current.accent,
                } as React.CSSProperties
              }
            >
              <FileText size={30} />

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
                <Sparkles size={13} />
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
        .publication-archive {
          position: relative;
          width: 100%;
          min-height: 760px;
          overflow: hidden;
          padding: 70px 20px 90px;
          color: white;
          background:
            radial-gradient(circle at 50% 20%, rgba(139,92,246,.28), transparent 34%),
            radial-gradient(circle at 10% 70%, rgba(76,29,149,.24), transparent 30%),
            radial-gradient(circle at 90% 70%, rgba(168,85,247,.18), transparent 32%),
            linear-gradient(180deg, #18052f 0%, #0e0320 55%, #07020f 100%);
        }

        .archive-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .7;
          background-image:
            radial-gradient(circle, white 1px, transparent 1.5px),
            radial-gradient(circle, rgba(196,181,253,.8) 1px, transparent 1.5px);
          background-size: 75px 75px, 135px 135px;
          animation: archiveStars 20s linear infinite;
        }

        .archive-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(110px);
          opacity: .18;
        }

        .glow-one {
          top: -150px;
          left: -160px;
          background: #8b5cf6;
        }

        .glow-two {
          right: -170px;
          bottom: -160px;
          background: #ec4899;
        }

        .archive-content {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin: 0 auto;
          padding: 30px 25px;
          border: 1px solid rgba(216,180,254,.2);
          border-radius: 30px;
          background: rgba(20,5,40,.45);
          box-shadow:
            0 40px 100px rgba(0,0,0,.55),
            inset 0 1px rgba(255,255,255,.06);
          backdrop-filter: blur(15px);
        }

        .archive-heading {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #d8b4fe;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .2em;
        }

        .archive-counter {
          position: absolute;
          top: 30px;
          right: 30px;
          color: #a78bfa;
          font-family: monospace;
          font-size: 11px;
        }

        .archive-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 390px;
          perspective: 1000px;
        }

        .book-shadow {
          position: absolute;
          bottom: 35px;
          width: 270px;
          height: 45px;
          border-radius: 50%;
          background: rgba(0,0,0,.7);
          filter: blur(20px);
          animation: bookShadow 5s ease-in-out infinite;
        }

        .archive-book {
          position: relative;
          width: 230px;
          height: 310px;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          transform: rotateY(-12deg);
          transform-style: preserve-3d;
          animation: floatingBook 5s ease-in-out infinite;
          transition: .5s ease;
        }

        .archive-book:hover {
          transform: rotateY(-2deg) translateY(-14px) scale(1.05);
        }

        .book-cover {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 25px;
          border: 1px solid var(--accent);
          border-radius: 7px 16px 16px 7px;
          background:
            radial-gradient(circle at 50% 25%, rgba(168,85,247,.35), transparent 45%),
            linear-gradient(145deg, #35115c, #0b0217);
          box-shadow:
            0 0 30px rgba(168,85,247,.35),
            18px 25px 45px rgba(0,0,0,.65);
        }

        .book-light {
          position: absolute;
          top: -70px;
          right: -50px;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: var(--accent);
          opacity: .28;
          filter: blur(40px);
        }

        .book-sparkle {
          position: relative;
          color: #fbbf24;
          filter: drop-shadow(0 0 10px #fbbf24);
        }

        .book-type {
          position: relative;
          margin-top: 18px;
          color: #c4b5fd;
          font-size: 8px;
          letter-spacing: .16em;
          text-align: center;
          text-transform: uppercase;
        }

        .book-cover h2 {
          position: relative;
          margin: 12px 0 6px;
          color: #fef3c7;
          font-family: Georgia, serif;
          font-size: 32px;
          font-weight: 500;
          text-shadow: 0 0 18px rgba(251,191,36,.4);
        }

        .book-cover p {
          position: relative;
          max-width: 170px;
          color: #ddd6fe;
          font-size: 9px;
          line-height: 1.5;
          text-align: center;
        }

        .book-divider {
          width: 70%;
          height: 1px;
          margin-top: 18px;
          background: linear-gradient(90deg, transparent, #fbbf24, transparent);
          box-shadow: 0 0 10px #fbbf24;
        }

        .book-year {
          position: relative;
          margin-top: 13px;
          color: #fbbf24;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: .2em;
        }

        .archive-particle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f9a8d4;
          box-shadow: 0 0 15px #f9a8d4;
          animation: particleFloat 4s ease-in-out infinite;
        }

        .particle-a {
          top: 70px;
          left: 30%;
        }

        .particle-b {
          top: 140px;
          right: 27%;
          background: #c4b5fd;
          box-shadow: 0 0 15px #c4b5fd;
          animation-delay: .8s;
        }

        .particle-c {
          bottom: 70px;
          left: 35%;
          background: #fbbf24;
          box-shadow: 0 0 15px #fbbf24;
          animation-delay: 1.4s;
        }

        .archive-info {
          max-width: 650px;
          margin: 0 auto;
          text-align: center;
        }

        .archive-label {
          color: #a78bfa;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .2em;
        }

        .archive-info h3 {
          margin: 7px 0;
          color: #fef3c7;
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 500;
        }

        .archive-info > p {
          max-width: 560px;
          margin: 0 auto;
          color: #c4b5fd;
          font-size: 13px;
          line-height: 1.8;
        }

        .archive-meta {
          display: flex;
          justify-content: center;
          gap: 45px;
          margin-top: 25px;
        }

        .archive-meta div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .archive-meta span {
          color: #8b5cf6;
          font-size: 8px;
          letter-spacing: .15em;
        }

        .archive-meta strong {
          max-width: 180px;
          color: #e9d5ff;
          font-size: 10px;
          font-weight: 500;
        }

        .archive-open {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 25px;
          padding: 12px 20px;
          border: 1px solid #a855f7;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(124,58,237,.4), rgba(219,39,119,.2));
          color: #fef3c7;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
          cursor: pointer;
          transition: .3s ease;
        }

        .archive-open:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(168,85,247,.4);
        }

        .archive-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          margin-top: 30px;
        }

        .archive-navigation > button {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid rgba(196,181,253,.3);
          border-radius: 50%;
          background: rgba(139,92,246,.12);
          color: #ddd6fe;
          cursor: pointer;
          transition: .3s ease;
        }

        .archive-navigation > button:hover {
          background: rgba(139,92,246,.3);
          border-color: #a855f7;
          box-shadow: 0 0 20px rgba(139,92,246,.4);
        }

        .archive-dots {
          display: flex;
          gap: 8px;
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
          width: 25px;
          border-radius: 10px;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          box-shadow: 0 0 15px #a855f7;
        }

        .publication-reader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(4,1,12,.88);
          backdrop-filter: blur(18px);
        }

        .reader-window {
          position: relative;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          width: min(850px, 100%);
          min-height: 500px;
          overflow: hidden;
          border: 1px solid rgba(216,180,254,.3);
          border-radius: 28px;
          background: linear-gradient(145deg, #1b0733, #090313);
          box-shadow: 0 50px 120px rgba(0,0,0,.8);
          animation: readerAppear .3s ease;
        }

        .reader-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 5;
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 50%;
          background: rgba(0,0,0,.3);
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
          border-right: 1px solid rgba(216,180,254,.15);
          background: linear-gradient(145deg, #321052, #090313);
          text-align: center;
        }

        .reader-cover svg {
          color: #fbbf24;
          filter: drop-shadow(0 0 12px #fbbf24);
        }

        .reader-cover span {
          margin-top: 20px;
          color: #c4b5fd;
          font-size: 9px;
          letter-spacing: .16em;
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
          letter-spacing: .2em;
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
          letter-spacing: .2em;
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
          color: #f
