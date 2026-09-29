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

type PublicationItem = {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  year: string;
  author: string;
  identifierType: "ISBN" | "QRCBN";
  identifier: string;
  description: string;
  quote: string;
  url: string;
  coverTitle: string;
  coverSubtitle: string;
};

const publications: PublicationItem[] = [
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
    quote: "Some stories heal, even when they are still being written.",
    url: "https://qrcbn.com/check/62-6264-2709-644",
    coverTitle: "Heal",
    coverSubtitle: "Festival Sastra\nVolume 6",
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
    quote: "There is always a little more spring waiting between the lines.",
    url: "",
    coverTitle: "A Little\nMore Spring",
    coverSubtitle: "Her Story\nIn Your Poem",
  },
];

const timelineYears = ["2026", "2025", "2024"];

export function Publication() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [showIdentifier, setShowIdentifier] = useState(false);

  const selected = publications[selectedIndex];

  const selectPublication = (index: number) => {
    setSelectedIndex(index);
    setIsBookOpen(false);
    setPage(1);
    setShowIdentifier(false);
  };

  const previousPublication = () => {
    const nextIndex =
      selectedIndex === 0 ? publications.length - 1 : selectedIndex - 1;

    selectPublication(nextIndex);
  };

  const nextPublication = () => {
    const nextIndex =
      selectedIndex === publications.length - 1 ? 0 : selectedIndex + 1;

    selectPublication(nextIndex);
  };

  const openBook = () => {
    setIsBookOpen(true);
    setPage(1);
    setShowIdentifier(false);
  };

  const closeBook = () => {
    setIsBookOpen(false);
    setPage(1);
  };

  const nextPage = () => {
    setPage((current) => Math.min(current + 1, 4));
  };

  const previousPage = () => {
    setPage((current) => Math.max(current - 1, 1));
  };

  return (
    <section className="publication-stage">
      <div className="publication-stars" />
      <div className="publication-orb publication-orb-one" />
      <div className="publication-orb publication-orb-two" />

      <div className="publication-container">
        <SectionTitle
          title="Publication"
          subtitle="Stories, books & words preserved in time."
        />

        <div className="publication-intro">
          <span />
          <Sparkles />
          <span />
          <p>
            A little archive of things I have written, published, and left
            between the pages.
          </p>
        </div>

        {/* ARCHIVE HEADER */}
        <div className="publication-header">
          <div>
            <small>PRIVATE LITERARY ARCHIVE</small>
            <h2>
              Words that
              <br />
              <em>remain.</em>
            </h2>
          </div>

          <div className="publication-count">
            <strong>{String(publications.length).padStart(2, "0")}</strong>
            <span>published works</span>
          </div>
        </div>

        {/* MAIN EXPERIENCE */}
        <div className="publication-room">
          {/* INDEX */}
          <aside className="publication-index">
            <div className="publication-index-title">
              <Library />
              <span>ARCHIVE INDEX</span>
            </div>

            {publications.map((publication, index) => {
              const active = selectedIndex === index;

              return (
                <button
                  key={publication.id}
                  type="button"
                  className={`publication-index-item ${
                    active ? "active" : ""
                  }`}
                  onClick={() => selectPublication(index)}
                >
                  <span className="publication-index-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="publication-index-text">
                    <strong>{publication.title}</strong>
                    <small>
                      {publication.type}
                      <br />
                      {publication.year}
                    </small>
                  </span>

                  {active && <span className="publication-index-star">✦</span>}
                </button>
              );
            })}

            <div className="publication-index-status">
              <span>ARCHIVE STATUS</span>
              <strong>
                <i /> PRESERVED
              </strong>
            </div>
          </aside>

          {/* BOOK */}
          <div className="publication-book-zone">
            <button
              type="button"
              className="publication-arrow publication-arrow-left"
              onClick={previousPublication}
              aria-label="Previous publication"
            >
              <ArrowLeft />
            </button>

            <div className="publication-orbit orbit-one" />
            <div className="publication-orbit orbit-two" />

            <button
              type="button"
              className={`publication-book ${
                isBookOpen ? "book-opened" : ""
              }`}
              onClick={openBook}
              aria-label={`Open ${selected.title}`}
            >
              <span className="publication-book-light" />

              <span className="publication-book-cover">
                <span className="cover-top">AINIYA F. HAURA</span>

                <span className="cover-moon">☾</span>

                <span className="cover-title">
                  {selected.coverTitle.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>

                <span className="cover-symbol">✦</span>

                <span className="cover-subtitle">
                  {selected.coverSubtitle.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </span>

                <span className="cover-bottom">LITERARY ARCHIVE · 2026</span>
              </span>

              <span className="publication-book-spine" />

              <span className="publication-click">
                <BookOpen />
                CLICK TO OPEN
              </span>
            </button>

            <button
              type="button"
              className="publication-arrow publication-arrow-right"
              onClick={nextPublication}
              aria-label="Next publication"
            >
              <ArrowRight />
            </button>

            <div className="publication-caption">
              <small>{selected.type}</small>
              <h3>{selected.title}</h3>
              <p>{selected.subtitle}</p>
            </div>
          </div>

          {/* RECORD */}
          <aside className="publication-record">
            <div className="record-top">
              <span>SELECTED RECORD</span>
              <i />
            </div>

            <div className="record-number">
              {String(selectedIndex + 1).padStart(2, "0")}
              <span>/ {String(publications.length).padStart(2, "0")}</span>
            </div>

            <h3>{selected.title}</h3>

            <p>{selected.description}</p>

            <div className="record-meta">
              <div>
                <span>TYPE</span>
                <strong>{selected.type}</strong>
              </div>

              <div>
                <span>YEAR</span>
                <strong>{selected.year}</strong>
              </div>

              <div>
                <span>AUTHOR</span>
                <strong>{selected.author}</strong>
              </div>
            </div>

            <button
              type="button"
              className={`identifier-trigger ${
                showIdentifier ? "opened" : ""
              }`}
              onClick={() => setShowIdentifier((value) => !value)}
            >
              <span>
                {selected.identifierType === "QRCBN" ? "▦" : "▥"}
              </span>

              <span>
                {showIdentifier
                  ? `HIDE ${selected.identifierType}`
                  : `VIEW ${selected.identifierType}`}
              </span>

              <ArrowRight />
            </button>

            {showIdentifier && (
              <div className="identifier-reveal">
                <div className="identifier-code">
                  {selected.identifierType === "QRCBN" ? (
                    <>
                      <b>▦</b>
                      <b>▦</b>
                      <b>▦</b>
                      <b>▦</b>
                      <b>▦</b>
                      <b>▦</b>
                      <b>▦</b>
                      <b>▦</b>
                      <b>▦</b>
                    </>
                  ) : (
                    <div className="isbn-bars">
                      || ||| | |||| || | ||| || || | ||||
                    </div>
                  )}
                </div>

                <small>{selected.identifierType}</small>
                <strong>{selected.identifier}</strong>

                <em>● VERIFIED RECORD</em>
              </div>
            )}
          </aside>
        </div>

        {/* OPEN BOOK */}
        {isBookOpen && (
          <div className="publication-reader">
            <div className="reader-topbar">
              <span>READING MODE</span>

              <button type="button" onClick={closeBook}>
                <X />
                CLOSE
              </button>
            </div>

            <div className="reader-book">
              {/* LEFT PAGE */}
              <div className="reader-page reader-left-page">
                <span className="reader-page-number">{page} / 4</span>

                {page === 1 && (
                  <>
                    <small>PUBLICATION RECORD</small>
                    <h3>{selected.title}</h3>
                    <div className="reader-rule" />
                    <p>{selected.subtitle}</p>

                    <div className="reader-date">
                      Published · {selected.year}
                    </div>
                  </>
                )}

                {page === 2 && (
                  <>
                    <small>ABOUT THE WORK</small>
                    <h3>A small world between pages.</h3>

                    <p>{selected.description}</p>

                    <blockquote>“{selected.quote}”</blockquote>
                  </>
                )}

                {page === 3 && (
                  <>
                    <small>AUTHOR'S NOTE</small>
                    <h3>Ainiya Faida Haura</h3>

                    <p>
                      Writing is a way of leaving small pieces of a journey
                      somewhere beyond the moment in which they were created.
                    </p>

                    <div className="reader-signature">— Ainiya</div>
                  </>
                )}

                {page === 4 && (
                  <>
                    <small>PUBLICATION INFORMATION</small>
                    <h3>Archive Details</h3>

                    <div className="reader-details">
                      <div>
                        <span>Author</span>
                        <strong>{selected.author}</strong>
                      </div>

                      <div>
                        <span>Year</span>
                        <strong>{selected.year}</strong>
                      </div>

                      <div>
                        <span>Type</span>
                        <strong>{selected.type}</strong>
                      </div>

                      <div>
                        <span>{selected.identifierType}</span>
                        <strong>{selected.identifier}</strong>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* CENTER SPINE */}
              <div className="reader-spine">
                <span />
              </div>

              {/* RIGHT PAGE */}
              <div className="reader-page reader-right-page">
                <FileText className="reader-icon" />

                <small>ARCHIVE ENTRY</small>

                <h3>{selected.title}</h3>

                <p>{selected.quote}</p>

                {selected.url ? (
                  <a
                    href={selected.url}
                    target="_blank"
                    rel="noreferrer"
                    className="reader-link"
                  >
                    Open Publication
                    <ExternalLink />
                  </a>
                ) : (
                  <span className="reader-unavailable">
                    Publication link unavailable
                  </span>
                )}

                <div className="reader-bottom">
                  PAGE {page} OF 4
                </div>
              </div>
            </div>

            {/* PAGE NAVIGATION */}
            <div className="reader-controls">
              <button
                type="button"
                onClick={previousPage}
                disabled={page === 1}
              >
                <ArrowLeft />
                Previous
              </button>

              <div className="reader-dots">
                {[1, 2, 3, 4].map((number) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => setPage(number)}
                    className={page === number ? "active" : ""}
                    aria-label={`Page ${number}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextPage}
                disabled={page === 4}
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
            <small>Selected moments from the archive.</small>
          </div>

          <div className="timeline-line">
            {timelineYears.map((year) => {
              const works = publications.filter(
                (publication) => publication.year === year
              );

              return (
                <div className="timeline-year" key={year}>
                  <strong>{year}</strong>

                  <span className="timeline-dot" />

                  <div className="timeline-work">
                    {works.length > 0 ? (
                      works.map((work) => {
                        const index = publications.findIndex(
                          (item) => item.id === work.id
                        );

                        return (
                          <button
                            type="button"
                            key={work.id}
                            onClick={() => selectPublication(index)}
                            className={
                              selectedIndex === index ? "active" : ""
                            }
                          >
                            <span>{work.title}</span>
                            <small>{work.type}</small>
                          </button>
                        );
                      })
                    ) : (
                      <span className="timeline-empty">
                        More stories may appear here...
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ENDING */}
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
              rgba(173, 103, 255, 0.18),
              transparent 34%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(255, 157, 92, 0.08),
              transparent 30%
            );
        }

        .publication-container {
          position: relative;
          z-index: 5;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* STARS */

        .publication-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.8;
          background-image:
            radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1.5px),
            radial-gradient(circle, rgba(255,221,151,.65) 1px, transparent 1.5px);
          background-size: 110px 110px, 170px 170px;
          animation: archiveStars 18s linear infinite;
        }

        @keyframes archiveStars {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-110px);
          }
        }

        .publication-orb {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          opacity: 0.15;
          animation: archiveOrb 8s ease-in-out infinite alternate;
        }

        .publication-orb-one {
          top: 22%;
          left: -120px;
          background: #a45cff;
        }

        .publication-orb-two {
          right: -120px;
          bottom: 20%;
          background: #ff9d72;
          animation-delay: 2s;
        }

        @keyframes archiveOrb {
          from {
            transform: translateY(-20px) scale(.95);
          }
          to {
            transform: translateY(25px) scale(1.08);
          }
        }

        /* INTRO */

        .publication-intro {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 24px auto 55px;
          max-width: 650px;
          text-align: center;
        }

        .publication-intro span {
          width: 70px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(244, 207, 124, .7)
          );
        }

        .publication-intro span:last-of-type {
          transform: rotate(180deg);
        }

        .publication-intro svg {
          width: 16px;
          height: 16px;
          color: #f5d17d;
          animation: sparkleSpin 4s linear infinite;
        }

        @keyframes sparkleSpin 
