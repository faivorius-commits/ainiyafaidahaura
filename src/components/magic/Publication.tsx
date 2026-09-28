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
    quote:
      "Some stories heal, even when they are still being written.",
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
    quote:
      "There is always a little more spring waiting between the lines.",
    url: "",
    coverTitle: "A Little\nMore Spring",
    coverSubtitle: "Her Story\nIn Your Poem",
  },
];

const timelineYears = ["2026", "2025", "2024"];

export function Publication() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [showIdentifier, setShowIdentifier] = useState(false);

  const selected = publications[selectedIndex];

  const nextPublication = () => {
    setIsOpen(false);
    setPage(1);
    setShowIdentifier(false);

    setTimeout(() => {
      setSelectedIndex((current) =>
        current === publications.length - 1 ? 0 : current + 1
      );
    }, 180);
  };

  const previousPublication = () => {
    setIsOpen(false);
    setPage(1);
    setShowIdentifier(false);

    setTimeout(() => {
      setSelectedIndex((current) =>
        current === 0 ? publications.length - 1 : current - 1
      );
    }, 180);
  };

  const openBook = () => {
    setIsOpen(true);
    setPage(1);
    setShowIdentifier(false);
  };

  const closeBook = () => {
    setIsOpen(false);
    setPage(1);
    setShowIdentifier(false);
  };

  const nextPage = () => {
    setPage((current) => Math.min(current + 1, 4));
  };

  const previousPage = () => {
    setPage((current) => Math.max(current - 1, 1));
  };

  return (
    <section className="publication-stage relative overflow-hidden px-5 py-24">
      {/* COSMIC AMBIENCE */}
      <div className="publication-stars pointer-events-none absolute inset-0" />

      <div className="publication-orb publication-orb-one pointer-events-none" />
      <div className="publication-orb publication-orb-two pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionTitle
          title="Publication"
          subtitle="Stories, books & words preserved in time."
        />

        {/* INTRO */}
        <div className="publication-intro">
          <span className="publication-intro-line" />
          <Sparkles className="size-4 text-primary" />
          <span className="publication-intro-line" />

          <p>
            A little archive of things I have written, published, and left
            between the pages.
          </p>
        </div>

        {/* PUBLICATION COUNTER */}
        <div className="publication-stats">
          <div>
            <strong>{String(publications.length).padStart(2, "0")}</strong>
            <span>PUBLICATIONS</span>
          </div>

          <div>
            <strong>
              {
                publications.filter((publication) =>
                  publication.type.includes("Anthology")
                ).length
              }
            </strong>
            <span>ANTHOLOGIES</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>LATEST YEAR</span>
          </div>
        </div>

        {/* MAIN ARCHIVE */}
        <div className="publication-room mt-12">
          {/* LEFT: PUBLICATION INDEX */}
          <aside className="publication-index">
            <div className="publication-index-heading">
              <Library className="size-4" />
              <span>PUBLICATION INDEX</span>
            </div>

            <div className="publication-index-list">
              {publications.map((publication, index) => {
                const active = selectedIndex === index;

                return (
                  <button
                    key={publication.id}
                    type="button"
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsOpen(false);
                      setPage(1);
                      setShowIdentifier(false);
                    }}
                    className={`publication-index-item ${
                      active ? "publication-index-active" : ""
                    }`}
                  >
                    <span className="publication-index-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="publication-index-content">
                      <strong>{publication.title}</strong>
                      <small>
                        {publication.type} · {publication.year}
                      </small>
                    </span>

                    {active && (
                      <span className="publication-index-light">
                        ✦
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="publication-index-note">
              <span>ARCHIVE STATUS</span>
              <strong>● PRESERVED</strong>
            </div>
          </aside>

          {/* CENTER: FLOATING BOOK */}
          <div className="publication-book-area">
            <button
              type="button"
              onClick={previousPublication}
              className="publication-nav publication-nav-left"
              aria-label="Previous publication"
            >
              <ArrowLeft className="size-4" />
            </button>

            <div className="publication-orbit publication-orbit-one" />
            <div className="publication-orbit publication-orbit-two" />

            <div
              className={`publication-floating-book ${
                isOpen ? "publication-book-opened" : ""
              }`}
              onClick={openBook}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  openBook();
                }
              }}
            >
              <div className="publication-book-glow" />

              <div className="publication-book-cover">
                <div className="publication-cover-decoration top" />
                <div className="publication-cover-moon">☾</div>

                <div className="publication-cover-content">
                  <span>AINIYA F. HAURA</span>

                  <h3>
                    {selected.coverTitle.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < selected.coverTitle.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </h3>

                  <div className="publication-cover-divider">
                    ✦
                  </div>

                  <p>
                    {selected.coverSubtitle.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index <
                          selected.coverSubtitle.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="publication-cover-decoration bottom" />
              </div>

              <div className="publication-book-spine" />

              <span className="publication-click-hint">
                <BookOpen className="size-3.5" />
                Click to open
              </span>
            </div>

            <button
              type="button"
              onClick={nextPublication}
              className="publication-nav publication-nav-right"
              aria-label="Next publication"
            >
              <ArrowRight className="size-4" />
            </button>

            <div className="publication-book-caption">
              <span>{selected.type}</span>
              <h3>{selected.title}</h3>
              <p>{selected.subtitle}</p>
            </div>
          </div>

          {/* RIGHT: QUICK INFO */}
          <aside className="publication-quick-info">
            <div className="publication-quick-heading">
              <span>SELECTED RECORD</span>
              <span className="publication-record-dot">●</span>
            </div>

            <div className="publication-quick-title">
              {selected.title}
            </div>

            <div className="publication-quick-meta">
              <span>TYPE</span>
              <strong>{selected.type}</strong>
            </div>

            <div className="publication-quick-meta">
              <span>YEAR</span>
              <strong>{selected.year}</strong>
            </div>

            <button
              type="button"
              onClick={() => setShowIdentifier((value) => !value)}
              className="publication-identifier-button"
            >
              <span>{selected.identifierType}</span>
              <span>{showIdentifier ? "HIDE" : "VIEW"}</span>
            </button>

            {showIdentifier && (
              <div className="publication-identifier-panel">
                <div className="publication-scan-line" />

                <div className="publication-fake-code">
                  {selected.identifierType === "QRCBN" ? (
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
                    <div className="publication-barcode">
                      || ||| | |||| || | |||
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

        {/* OPEN BOOK DETAILS */}
        {isOpen && (
          <div className="publication-open-area">
            <div className="publication-open-book">
              <div className="publication-open-page publication-open-left">
                <div className="publication-page-number">
                  {page} / 4
                </div>

                {page === 1 && (
                  <>
                    <span className="publication-page-label">
                      PUBLICATION RECORD
                    </span>

                    <h3>{selected.title}</h3>

                    <div className="publication-page-rule" />

                    <p>{selected.subtitle}</p>

                    <div className="publication-page-small">
                      Published · {selected.year}
                    </div>
                  </>
                )}

                {page === 2 && (
                  <>
                    <span className="publication-page-label">
                      ABOUT THE WORK
                    </span>

                    <h3>A small world between pages.</h3>

                    <p>{selected.description}</p>

                    <div className="publication-page-quote">
                      “{selected.quote}”
                    </div>
                  </>
                )}

                {page === 3 && (
                  <>
                    <span className="publication-page-label">
                      AUTHOR'S NOTE
                    </span>

                    <h3>Ainiya Faida Haura</h3>

                    <p>
                      Writing is a way of leaving small pieces of a journey
                      somewhere beyond the moment in which they were created.
                    </p>

                    <div className="publication-page-signature">
                      — Ainiya
                    </div>
                  </>
                )}

                {page === 4 && (
                  <>
                    <span className="publication-page-label">
                      PUBLICATION INFORMATION
                    </span>

                    <div className="publication-detail-row">
                      <span>Author</span>
                      <strong>{selected.author}</strong>
                    </div>

                    <div className="publication-detail-row">
                      <span>Year</span>
                      <strong>{selected.year}</strong>
                    </div>

                    <div className="publication-detail-row">
                      <span>Type</span>
                      <strong>{selected.type}</strong>
                    </div>

                    <div className="publication-detail-row">
                      <span>{selected.identifierType}</span>
                      <strong>{selected.identifier}</strong>
                    </div>
                  </>
                )}
              </div>

              <div className="publication-open-divider">
                <span />
              </div>

              <div className="publication-open-page publication-open-right">
                <button
                  type="button"
                  onClick={closeBook}
                  className="publication-close"
                  aria-label="Close publication"
                >
                  <X className="size-4" />
                </button>

                <FileText className="publication-page-icon" />

                <span className="publication-page-label">
                  ARCHIVE ENTRY
                </span>

                <h3>{selected.title}</h3>

                <p>{selected.quote}</p>

                <div className="publication-page-actions">
                  {selected.url ? (
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noreferrer"
                      className="publication-open-button"
                    >
                      Open Publication
                      <ExternalLink className="size-4" />
                    </a>
                  ) : (
                    <span className="publication-unavailable">
                      Publication link unavailable
                    </span>
                  )}
                </div>

                <div className="publication-page-counter">
                  PAGE {page} OF 4
                </div>
              </div>
            </div>

            {/* PAGE CONTROLS */}
            <div className="publication-page-controls">
              <button
                type="button"
                onClick={previousPage}
                disabled={page === 1}
              >
                <ArrowLeft className="size-4" />
                Previous Page
              </button>

              <div className="publication-page-dots">
                {[1, 2, 3, 4].map((number) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => setPage(number)}
                    className={page === number ? "active" : ""}
                    aria-label={`Go to page ${number}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextPage}
                disabled={page === 4}
              >
                Next Page
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* TIMELINE */}
        <div className="publication-timeline">
          <div className="publication-timeline-heading">
            <span>PUBLICATION TIMELINE</span>
            <small>Every publication is a piece of the journey.</small>
          </div>

          <div className="publication-timeline-line">
            {timelineYears.map((year) => {
              const yearPublications = publications.filter(
                (publication) => publication.year === year
              );

              return (
                <div key={year} className="publication-timeline-year">
                  <span className="publication-timeline-year-label">
                    {year}
                  </span>

                  <div className="publication-timeline-node" />

                  <div className="publication-timeline-items">
                    {yearPublications.length > 0 ? (
                      yearPublications.map((publication) => {
                        const index = publications.findIndex(
                          (item) => item.id === publication.id
                        );

                        return (
                          <button
                            key={publication.id}
                            type="button"
                            onClick={() => {
                              setSelectedIndex(index);
                              setIsOpen(false);
                              setPage(1);
                            }}
                            className={
                              selectedIndex === index
                                ? "publication-timeline-item active"
                                : "publication-timeline-item"
                            }
                          >
                            <strong>{publication.title}</strong>
                            <small>{publication.type}</small>
                          </button>
                        );
                      })
                    ) : (
                      <span className="publication-timeline-empty">
                        Archive waiting...
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLOSING */}
        <div className="publication-closing">
          <Sparkles className="size-4" />

          <p>
            Because every story deserves
            <br />
            a place to be remembered.
          </p>

          <Sparkles className="size-4" />
        </div>
      </div>

      {/* COMPONENT-LOCAL STYLES */}
      <style>{`
        .publication-stage {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 30%, rgba(151, 89, 255, 0.13), transparent 32%),
            radial-g
