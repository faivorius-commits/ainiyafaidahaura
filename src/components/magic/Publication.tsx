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
  id: string;
  title: string;
  subtitle: string;
  type: string;
  year: string;
  author: string;
  identifierType: "QRCBN" | "ISBN";
  identifier: string;
  description: string;
  quote: string;
  url: string;
  coverTitle: string;
  coverSubtitle: string;
};

const publications: Publication[] = [
  {
    id: "heal",
    title: "“Heal”",
    subtitle: "Short Story Anthology, Festival Sastra Volume 6",
    type: "Short Story · Anthology",
    year: "2026",
    author: "Ainiya Faida Haura",
    identifierType: "QRCBN",
    identifier: "62-6264-2709-644",
    description:
      "A short story published as part of Festival Sastra Volume 6, preserving a small fictional world within a collective literary anthology.",
    quote:
      "Some stories heal, even when they are still being written.",
    url: "https://qrcbn.com/check/62-6264-2709-644",
    coverTitle: "Heal",
    coverSubtitle: "Festival Sastra · Volume 6",
  },
  {
    id: "spring",
    title: "“A Little More Spring”",
    subtitle: "Poetry Anthology, Her Story In Your Poem",
    type: "Poetry · Anthology",
    year: "2026",
    author: "Ainiya Faida Haura",
    identifierType: "ISBN",
    identifier: "978-81-904011-0-4",
    description:
      "A poetry contribution included in the anthology Her Story In Your Poem, bringing a small collection of words into a shared literary space.",
    quote:
      "There is always a little more spring waiting between the lines.",
    url: "",
    coverTitle: "A Little More Spring",
    coverSubtitle: "Her Story · In Your Poem",
  },
];

const timelineYears = ["2026", "2025", "2024"];

export function Publication() {
  const [selected, setSelected] = useState(0);
  const [readerOpen, setReaderOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [identifierOpen, setIdentifierOpen] = useState(false);

  const current = publications[selected];

  const selectPublication = (index: number) => {
    setSelected(index);
    setReaderOpen(false);
    setPage(1);
    setIdentifierOpen(false);
  };

  const previousPublication = () => {
    selectPublication(
      selected === 0 ? publications.length - 1 : selected - 1
    );
  };

  const nextPublication = () => {
    selectPublication(
      selected === publications.length - 1 ? 0 : selected + 1
    );
  };

  const openReader = () => {
    setReaderOpen(true);
    setPage(1);
    setIdentifierOpen(false);
  };

  const closeReader = () => {
    setReaderOpen(false);
    setPage(1);
  };

  return (
    <section className="publication-stage">
      <div className="publication-stars" />
      <div className="publication-glow glow-one" />
      <div className="publication-glow glow-two" />

      <div className="publication-container">
        <SectionTitle
          title="Publication"
          subtitle="Stories, books & words preserved in time."
        />

        {/* INTRO */}
        <div className="publication-intro">
          <span />
          <Sparkles />
          <span />

          <p>
            A small archive of stories, poems, and pages
            that found their way into print.
          </p>
        </div>

        {/* ARCHIVE HEADER */}
        <div className="publication-heading">
          <div>
            <span>PRIVATE LITERARY ARCHIVE</span>

            <h2>
              Words that
              <br />
              <i>remain.</i>
            </h2>
          </div>

          <div className="publication-total">
            <strong>
              {String(publications.length).padStart(2, "0")}
            </strong>
            <small>published works</small>
          </div>
        </div>

        {/* MAIN AREA */}
        <div className="publication-layout">
          {/* INDEX */}
          <aside className="publication-index">
            <div className="index-heading">
              <Library />
              <span>ARCHIVE INDEX</span>
            </div>

            {publications.map((publication, index) => (
              <button
                key={publication.id}
                type="button"
                className={
                  selected === index
                    ? "index-item active"
                    : "index-item"
                }
                onClick={() => selectPublication(index)}
              >
                <span className="index-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="index-text">
                  <strong>{publication.title}</strong>
                  <small>{publication.type}</small>
                  <small>{publication.year}</small>
                </span>

                {selected === index && (
                  <span className="index-star">✦</span>
                )}
              </button>
            ))}

            <div className="index-status">
              <small>ARCHIVE STATUS</small>
              <strong>
                <i />
                PRESERVED
              </strong>
            </div>
          </aside>

          {/* BOOK */}
          <div className="publication-center">
            <button
              type="button"
              className="book-arrow left"
              onClick={previousPublication}
              aria-label="Previous publication"
            >
              <ArrowLeft />
            </button>

            <div className="book-orbit orbit-a" />
            <div className="book-orbit orbit-b" />

            <button
              type="button"
              className={`floating-book ${
                readerOpen ? "book-active" : ""
              }`}
              onClick={openReader}
              aria-label={`Open ${current.title}`}
            >
              <span className="book-light" />

              <span className="book-cover">
                <span className="cover-author">
                  AINIYA F. HAURA
                </span>

                <span className="cover-moon">☾</span>

                <span className="cover-title">
                  {current.coverTitle}
                </span>

                <span className="cover-star">✦</span>

                <span className="cover-subtitle">
                  {current.coverSubtitle}
                </span>

                <span className="cover-year">
                  LITERARY ARCHIVE · {current.year}
                </span>
              </span>

              <span className="book-spine" />

              <span className="book-hint">
                <BookOpen />
                TAP TO OPEN
              </span>
            </button>

            <button
              type="button"
              className="book-arrow right"
              onClick={nextPublication}
              aria-label="Next publication"
            >
              <ArrowRight />
            </button>

            <div className="book-caption">
              <small>{current.type}</small>
              <h3>{current.title}</h3>
              <p>{current.subtitle}</p>
            </div>
          </div>

          {/* RECORD */}
          <aside className="publication-record">
            <div className="record-label">
              <span>SELECTED RECORD</span>
              <i />
            </div>

            <div className="record-number">
              {String(selected + 1).padStart(2, "0")}
              <small>
                / {String(publications.length).padStart(2, "0")}
              </small>
            </div>

            <h3>{current.title}</h3>

            <p>{current.description}</p>

            <div className="record-info">
              <div>
                <small>TYPE</small>
                <strong>{current.type}</strong>
              </div>

              <div>
                <small>YEAR</small>
                <strong>{current.year}</strong>
              </div>

              <div>
                <small>AUTHOR</small>
                <strong>{current.author}</strong>
              </div>
            </div>

            {/* IDENTIFIER */}
            <button
              type="button"
              className={
                identifierOpen
                  ? "identifier-button open"
                  : "identifier-button"
              }
              onClick={() =>
                setIdentifierOpen((value) => !value)
              }
            >
              <span>
                {current.identifierType === "QRCBN"
                  ? "▦"
                  : "▥"}
              </span>

              <strong>
                {identifierOpen ? "HIDE" : "VIEW"}{" "}
                {current.identifierType}
              </strong>

              <ArrowRight />
            </button>

            {identifierOpen && (
              <div className="identifier-panel">
                <div className="identifier-animation">
                  {current.identifierType === "QRCBN" ? (
                    <>
                      <span>▦</span>
                      <span>▦</span>
                      <span>▦</span>
                      <span>▦</span>
                      <span>▦</span>
                      <span>▦</span>
                      <span>▦</span>
                      <span>▦</span>
                      <span>▦</span>
                    </>
                  ) : (
                    <div className="isbn-code">
                      || ||| | |||| || | ||| || |||
                    </div>
                  )}
                </div>

                <small>{current.identifierType}</small>

                <strong>{current.identifier}</strong>

                <em>
                  <i />
                  VERIFIED RECORD
                </em>

                {current.url && (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noreferrer"
                    className="verify-link"
                  >
                    Verify record
                    <ExternalLink />
                  </a>
                )}
              </div>
            )}
          </aside>
        </div>

        {/* READER */}
        {readerOpen && (
          <div className="publication-reader">
            <div className="reader-header">
              <span>
                <BookOpen />
                READING MODE
              </span>

              <button type="button" onClick={closeReader}>
                <X />
                CLOSE
              </button>
            </div>

            <div className="reader-book">
              {/* LEFT PAGE */}
              <div className="reader-page">
                <span className="page-number">
                  {page} / 4
                </span>

                {page === 1 && (
                  <>
                    <small>PUBLICATION RECORD</small>

                    <h3>{current.title}</h3>

                    <div className="page-line" />

                    <p>{current.subtitle}</p>

                    <span className="page-date">
                      Published · {current.year}
                    </span>
                  </>
                )}

                {page === 2 && (
                  <>
                    <small>ABOUT THE WORK</small>

                    <h3>A small world between pages.</h3>

                    <p>{current.description}</p>

                    <blockquote>
                      “{current.quote}”
                    </blockquote>
                  </>
                )}

                {page === 3 && (
                  <>
                    <small>AUTHOR'S NOTE</small>

                    <h3>Ainiya Faida Haura</h3>

                    <p>
                      Writing is a way of leaving small pieces
                      of a journey somewhere beyond the moment
                      in which they were created.
                    </p>

                    <div className="signature">
                      — Ainiya
                    </div>
                  </>
                )}

                {page === 4 && (
                  <>
                    <small>PUBLICATION INFORMATION</small>

                    <h3>Archive Details</h3>

                    <div className="detail-list">
                      <div>
                        <span>Author</span>
                        <strong>{current.author}</strong>
                      </div>

                      <div>
                        <span>Year</span>
                        <strong>{current.year}</strong>
                      </div>

                      <div>
                        <span>Type</span>
                        <strong>{current.type}</strong>
                      </div>

                      <div>
                        <span>{current.identifierType}</span>
                        <strong>{current.identifier}</strong>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* SPINE */}
              <div className="reader-spine">
                <span />
              </div>

              {/* RIGHT PAGE */}
              <div className="reader-page reader-right">
                <FileText className="reader-file-icon" />

                <small>ARCHIVE ENTRY</small>

                <h3>{current.title}</h3>

                <p>{current.quote}</p>

                {current.url ? (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noreferrer"
                    className="reader-link"
                  >
                    Open Publication
                    <ExternalLink />
                  </a>
                ) : (
                  <span className="reader-disabled">
                    Publication link unavailable
                  </span>
                )}

                <span className="reader-page-count">
                  PAGE {page} OF 4
                </span>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="reader-controls">
              <button
                type="button"
                disabled={page === 1}
                onClick={() =>
                  setPage((value) => Math.max(value - 1, 1))
                }
              >
                <ArrowLeft />
                Previous
              </button>

              <div className="reader-dots">
                {[1, 2, 3, 4].map((number) => (
                  <button
                    key={number}
                    type="button"
                    className={page === number ? "active" : ""}
                    onClick={() => setPage(number)}
                    aria-label={`Page ${number}`}
                  />
                ))}
              </div>

              <button
                type="button"
                disabled={page === 4}
                onClick={() =>
                  setPage((value) => Math.min(value + 1, 4))
                }
              >
                Next
                <ArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* TIMELINE */}
        <div className="publication-timeline">
          <div className="timeline-heading">
            <span>THE WRITING JOURNEY</span>
            <small>
              Selected moments from the archive.
            </small>
          </div>

          <div className="timeline-track">
            {timelineYears.map((year) => {
              const works = publications.filter(
                (item) => item.year === year
              );

              return (
                <div className="timeline-year" key={year}>
                  <strong>{year}</strong>

                  <span className="timeline-dot" />

                  <div className="timeline-content">
                    {works.length > 0 ? (
                      works.map((work) => {
                        const index = publications.findIndex(
                          (item) => item.id === work.id
                        );

                        return (
                          <button
                            type="button"
                            key={work.id}
                            className={
                              selected === index ? "active" : ""
                            }
                            onClick={() =>
                              selectPublication(index)
                            }
                          >
                            <strong>{work.title}</strong>
                            <small>{work.type}</small>
                          </button>
                        );
                      })
                    ) : (
                      <span>
                        More stories may appear here...
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* END */}
        <div className="publication-ending">
          <Sparkles />
          <p>
            Every story deserves
            <br />
            a place to be remembered.
          </p>
          <Sparkles />
        </div>
      </div>

      <style>{`
        .publication-stage {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 80px 20px 120px;
          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(170, 100, 255, 0.18),
              transparent 35%
            ),
            radial-gradient(
              circle at 15% 80%,
              rgba(255, 160, 100, 0.10),
              transparent 30%
            );
        }

        .publication-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* STARS */

        .publication-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.7;
          background-image:
            radial-gradient(
              circle,
              rgba(255,255,255,0.8) 1px,
              transparent 1.5px
            ),
            radial-gradient(
              circle,
              rgba(255,220,150,0.7) 1px,
              transparent 1.5px
            );
          background-size: 120px 120px, 190px 190px;
          animation: starsMove 20s linear infinite;
        }

        @keyframes starsMove {
          from {
            transform: translateY(0);
          }

          to {
            transform: translateY(-120px);
          }
        }

        .publication-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.16;
          pointer-events: none;
          animation: glowFloat 7s ease-in-out infinite alternate;
        }

        .glow-one {
          top: 20%;
          left: -130px;
          background: #a45cff;
        }

        .glow-two {
          right: -130px;
          bottom: 15%;
          background: #ff9b73;
          animation-delay: 2s;
        }

        @keyframes glowFloat {
          from {
            transform: translateY(-20px);
          }

          to {
            transform: translateY(30px);
          }
        }

        /* INTRO */

        .publication-intro {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          max-width: 700px;
          margin: 25px auto 55px;
          text-align: center;
        }

        .publication-intro span {
          width: 70px;
          height: 1px;
          background: linear-gradient(
          90deg,
            transparent,
            rgba(245,210,130,0.7)
          );
        }

        .publication-intro span:last-of-type {
          transform: rotate(180deg);
        }

        .publication-intro svg {
          width: 17px;
          height: 17px;
          color: #f4cf7b;
          animation: sparkleRotate 4s linear infinite;
        }

        .publication-intro p {
          position: absolute;
          margin-top: 60px;
          max-width: 500px;
          font-size: 13px;
          color: rgba(255,255,255,0.58);
        }

        @keyframes sparkleRotate {
          to {
            transform: rotate(360deg);
          }
        }

        /* HEADER */

        .publication-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 45px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 25px;
        }

        .publication-heading > div:first-child > span {
          font-size: 10px;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.4);
        }

        .publication-heading h2 {
          margin: 8px 0 0;
          font-family: Georgia, serif;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 0.95;
          font-weight: 400;
        }

        .publication-heading h2 i {
          color: #efc978;
          font-weight: 400;
        }

        .publication-total {
          text-align: right;
        }

        .publication-total strong {
          display: block;
          font-family: Georgia, serif;
          font-size: 42px;
          color: #efc978;
        }

        .publication-total small {
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 9px;
        }

        /* MAIN */

        .publication-layout {
          display: grid;
          grid-template-columns: 220px minmax(300px, 1fr) 270px;
          gap: 35px;
          align-items: center;
        }

        /* INDEX */

        .publication-index {
          padding-right: 20px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }

        .index-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          color: rgba(255,255,255,0.5);
          font-size: 9px;
          letter-spacing: 0.18em;
        }

        .index-heading svg {
          width: 15px;
          height: 15px;
          color: #eecb78;
        }

        .index-item {
          position: relative;
          display: flex;
          width: 100%;
          gap: 12px;
          padding: 13px 5px;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: transparent;
          color: white;
          text-align: left;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .index-item:hover {
          transform: translateX(5px);
        }

        .index-item.active {
          color: #f1d27f;
        }

        .index-number {
          font-family: monospace;
          font-size: 10px;
          opacity: 0.35;
        }

        .index-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .index-text strong {
          font-family: Georgia, serif;
          font-size: 13px;
          font-weight: 400;
        }

        .index-text small {
          color: rgba(255,255,255,0.4);
          font-size: 9px;
        }

        .index-star {
          margin-left: auto;
          color: #f4cf7b;
          animation: starPulse 1.5s ease-in-out infinite;
        }

        @keyframes starPulse {
          50% {
            opacity: 0.3;
            transform: scale(0.7);
          }
        }

        .index-status {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-top: 25px;
        }

        .index-status small {
          font-size: 8px;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.3);
        }

        .index-status strong {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 9px;
          color: rgba(255,255,255,0.55);
        }

        .index-status i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8df2b0;
          box-shadow: 0 0 10px #8df2b0;
        }

        /* BOOK */

        .publication-center {
          position: relative;
          display: flex;
          min-height: 510px;
          align-items: center;
          justify-content: center;
        }

        .floating-book {
          position: relative;
          width: 245px;
          height: 350px;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
          transform-style: preserve-3d;
          animation: bookFloat 5s ease-in-out infinite;
          transition: 0.5s ease;
        }

        .floating-book:hover {
          transform: translateY(-12px) rotateY(-7deg);
        }

        .floating-book.book-active {
          transform: scale(0.95) rotateY(-12deg);
        }

        @keyframes bookFloat {
          0%, 100% {
            transform: translateY(0) rotateZ(-1deg);
          }

          50% {
            transform: translateY(-13px) rotateZ(1deg);
          }
        }

        .book-light {
          position: absolute;
          inset: -50px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(220,170,255,0.25),
            transparent 65%
          );
          filter: blur(15px);
          z-index: -1;
        }

        .book-cover {
          position: absolute;
          inset: 0 15px 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(246,211,130,0.45);
          border-radius: 5px 12px 12px 5px;
          background:
            radial-gradient(
              circle at 50% 30%,
              rgba(255,210,130,0.12),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #35145c,
              #211036 65%,
              #13091f
            );
          box-shadow:
            18px 22px 35px rgba(0,0,0,0.4),
            inset 0 0 30px rgba(255,210,150,0.06);
        }

        .book-cover::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(240,205,125,0.25);
          pointer-events: none;
        }

        .cover-author {
          position: absolute;
          top: 27px;
          font-size: 8px;
          letter-spacing: 0.25em;
          color: rgba(255,255,255,0.55);
        }

        .cover-moon {
          margin-bottom: 25px;
          font-family: Georgia, serif;
          font-size: 36px;
          color: #efca77;
          text-shadow: 0 0 18px rgba(239,202,119,0.7);
        }

        .cover-title {
          max-width: 170px;
          font-family: Georgia, serif;
          font-size: 30px;
          line-height: 1.05;
          color: #f5d78e;
          text-align: center;
        }

        .cover-star {
          margin: 20px 0;
          color: #efca77;
          animation: starPulse 2s infinite;
        }

        .cover-subtitle {
          max-width: 160px;
          font-size: 10px;
          line-height: 1.5;
          color: rgba(255,255,255,0.55);
          text-align: center;
        }

        .cover-year {
          position: absolute;
          bottom: 25px;
          font-size: 7px;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.3);
        }

        .book-spine {
          position: absolute;
          top: 4px;
          right: 0;
          width: 18px;
          height: calc(100% - 4px);
          border-radius: 0 8px 8px 0;
          background: linear-gradient(
            90deg,
            #160a26,
            #51257b,
            #170a28
          );
          transform: skewY(-1deg);
        }

        .book-hint {
          position: absolute;
          bottom: -40px;
          left: 50%;
          display: flex;
          align-items: center;
          gap: 6px;
          transform: translateX(-50%);
          white-space: nowrap;
          font-size: 9px;
          letter-spacing: 0.16em;
          color: rgba(255,255,255,0.4);
        }

        .book-hint svg {
          width: 14px;
          height: 14px;
        }

        .book-arrow {
          position: absolute;
          z-index: 10;
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.65);
          cursor: pointer;
          transition: 0.3s;
        }

        .book-arrow:hover {
          border-color: rgba(240,205,125,0.5);
          color: #efca77;
          transform: scale(1.1);
        }

        .book-arrow svg {
          width: 16px;
        }

        .book-arrow.left {
          left: 0;
        }

        .book-arrow.right {
          right: 0;
        }

        .book-orbit {
          position: absolute;
          width: 360px;
          height: 170px;
          border: 1px solid rgba(226,190,255,0.12);
          border-radius: 50%;
          transform: rotate(-18deg);
          pointer-events: none;
        }

        .orbit-b {
          width: 300px;
          height: 430px;
          transform: rotate(20deg);
          border-color: rgba(240,205,125,0.08);
        }

        .book-caption {
          position: absolute;
          bottom: -85px;
          width: 100%;
          text-align: center;
        }

        .book-caption small {
          color: #e8c775;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .book-caption h3 {
          margin: 7px 0;
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 400;
        }

        .book-caption p {
          margin: 0 auto;
          max-width: 330px;
          color: rgba(255,255,255,0.42);
          font-size: 11px;
        }
        
        
