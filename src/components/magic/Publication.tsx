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
import "./Publication.css";

type PublicationItem = {
  title: string;
  subtitle: string;
  type: string;
  year: string;
  identifierLabel: string;
  identifier: string;
  description: string;
  url?: string;
  color: string;
};

const publications: PublicationItem[] = [
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
    color: "#a855f7",
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
    color: "#ec4899",
  },
];

export function Publication() {
  const [index, setIndex] = useState(0);
  const [reader, setReader] = useState(false);

  const current = publications[index];

  function next() {
    setIndex((index + 1) % publications.length);
    setReader(false);
  }

  function previous() {
    setIndex(
      (index - 1 + publications.length) % publications.length,
    );
    setReader(false);
  }

  return (
    <section className="publication-section">
      <div className="publication-stars" />
      <div className="publication-nebula nebula-purple" />
      <div className="publication-nebula nebula-pink" />

      <div className="publication-container">
        <SectionTitle
          title="Publication"
          subtitle="Books, stories, poetry, and pieces of writing preserved in my universe."
        />

        <div className="publication-interface">
          <div className="archive-title">
            <Library size={16} />
            <span>PERSONAL PUBLICATION ARCHIVE</span>
          </div>

          <div className="archive-counter">
            0{index + 1} / 0{publications.length}
          </div>

          <div className="publication-stage">
            <button
              className="floating-book"
              onClick={() => setReader(true)}
              aria-label={`Open ${current.title}`}
            >
              <div
                className="book-cover"
                style={
                  {
                    "--book-color": current.color,
                  } as React.CSSProperties
                }
              >
                <div className="book-glow" />

                <Sparkles className="book-icon" size={28} />

                <span className="book-type">
                  {current.type}
                </span>

                <h2>{current.title}</h2>

                <p>{current.subtitle}</p>

                <div className="book-line" />

                <span className="book-year">
                  {current.year}
                </span>
              </div>
            </button>

            <span className="particle particle-1" />
            <span className="particle particle-2" />
            <span className="particle particle-3" />
          </div>

          <div className="publication-info">
            <span className="exploring">NOW EXPLORING</span>

            <h3>{current.title}</h3>

            <p>{current.description}</p>

            <div className="publication-details">
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
              className="open-button"
              onClick={() => setReader(true)}
            >
              <BookOpen size={17} />
              OPEN PUBLICATION
              <Sparkles size={14} />
            </button>
          </div>

          <div className="publication-navigation">
            <button onClick={previous} aria-label="Previous">
              <ArrowLeft size={18} />
            </button>

            <div className="publication-dots">
              {publications.map((item, itemIndex) => (
                <button
                  key={item.title}
                  className={
                    itemIndex === index ? "dot active" : "dot"
                  }
                  onClick={() => {
                    setIndex(itemIndex);
                    setReader(false);
                  }}
                  aria-label={`Open ${item.title}`}
                />
              ))}
            </div>

            <button onClick={next} aria-label="Next">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {reader && (
        <div className="publication-modal">
          <div className="reader">
            <button
              className="reader-close"
              onClick={() => setReader(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div
              className="reader-cover"
              style={
                {
                  "--book-color": current.color,
                } as React.CSSProperties
              }
            >
              <div className="reader-glow" />

              <FileText size={32} />

              <span>{current.type}</span>

              <h2>{current.title}</h2>

              <p>{current.subtitle}</p>

              <strong>{current.year}</strong>
            </div>

            <div className="reader-content">
              <span className="reader-label">
                PUBLICATION ARCHIVE
              </span>

              <h2>{current.title}</h2>

              <div className="reader-divider">
                <i />
                <Sparkles size={14} />
                <i />
              </div>

              <p>{current.description}</p>

              <div className="identifier">
                <span>{current.identifierLabel}</span>
                <strong>{current.identifier}</strong>
              </div>

              <div className="reader-actions">
                {current.url ? (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noreferrer"
                    className="verify-button"
                  >
                    <ExternalLink size={15} />
                    VERIFY PUBLICATION
                  </a>
                ) : null}

                <button
                  className="next-button"
                  onClick={next}
                >
                  NEXT
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
