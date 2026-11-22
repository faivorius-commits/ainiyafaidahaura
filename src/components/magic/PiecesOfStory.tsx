import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

type StoryLayout = {
  left: string;
  top: string;
  width: string;
  aspectRatio: string;
  rotation: string;
  mobileWidth: string;
  mobileAspectRatio: string;
  mobileAlignment: "flex-start" | "flex-end" | "center";
  mobileRotation: string;
  mobileOrder: number;
};

type StoryPiece = {
  id: string;
  imagePath: string;
  title: string;
  description: string;
  story: string;
  reflection: string;
  date?: string;
  category?: string;
  layout: StoryLayout;
};

// Edit this single array to add local image paths and story details.
export const piecesOfStory: StoryPiece[] = [
  {
    id: "piece-01",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "2%",
      top: "2%",
      width: "16%",
      aspectRatio: "1.2 / 1",
      rotation: "-3deg",
      mobileWidth: "76%",
      mobileAspectRatio: "1.2 / 1",
      mobileAlignment: "flex-start",
      mobileRotation: "-1.5deg",
      mobileOrder: 1,
    },
  },
  {
    id: "piece-02",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "22%",
      top: "1%",
      width: "14%",
      aspectRatio: "1 / 1",
      rotation: "2deg",
      mobileWidth: "68%",
      mobileAspectRatio: "1 / 1",
      mobileAlignment: "flex-end",
      mobileRotation: "1deg",
      mobileOrder: 2,
    },
  },
  {
    id: "piece-03",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "81%",
      top: "2%",
      width: "17%",
      aspectRatio: "0.95 / 1",
      rotation: "3deg",
      mobileWidth: "82%",
      mobileAspectRatio: "0.95 / 1",
      mobileAlignment: "flex-start",
      mobileRotation: "2deg",
      mobileOrder: 3,
    },
  },
  {
    id: "piece-04",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "85%",
      top: "40%",
      width: "13%",
      aspectRatio: "1.2 / 1",
      rotation: "-2deg",
      mobileWidth: "70%",
      mobileAspectRatio: "1.25 / 1",
      mobileAlignment: "flex-end",
      mobileRotation: "-1deg",
      mobileOrder: 4,
    },
  },
  {
    id: "piece-05",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "76%",
      top: "74%",
      width: "19%",
      aspectRatio: "1.35 / 1",
      rotation: "2.5deg",
      mobileWidth: "78%",
      mobileAspectRatio: "1.3 / 1",
      mobileAlignment: "flex-start",
      mobileRotation: "1.5deg",
      mobileOrder: 5,
    },
  },
  {
    id: "piece-06",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "55%",
      top: "84%",
      width: "14%",
      aspectRatio: "1 / 1",
      rotation: "-2deg",
      mobileWidth: "66%",
      mobileAspectRatio: "1 / 1",
      mobileAlignment: "flex-end",
      mobileRotation: "-1.5deg",
      mobileOrder: 6,
    },
  },
  {
    id: "piece-07",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "29%",
      top: "84%",
      width: "17%",
      aspectRatio: "1.4 / 1",
      rotation: "1.5deg",
      mobileWidth: "80%",
      mobileAspectRatio: "1.4 / 1",
      mobileAlignment: "flex-start",
      mobileRotation: "1deg",
      mobileOrder: 8,
    },
  },
  {
    id: "piece-08",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "2%",
      top: "72%",
      width: "17%",
      aspectRatio: "0.85 / 1",
      rotation: "-3deg",
      mobileWidth: "72%",
      mobileAspectRatio: "0.9 / 1",
      mobileAlignment: "flex-end",
      mobileRotation: "-2deg",
      mobileOrder: 9,
    },
  },
  {
    id: "piece-09",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "1%",
      top: "40%",
      width: "15%",
      aspectRatio: "1.3 / 1",
      rotation: "2deg",
      mobileWidth: "74%",
      mobileAspectRatio: "1.25 / 1",
      mobileAlignment: "flex-start",
      mobileRotation: "1deg",
      mobileOrder: 10,
    },
  },
  {
    id: "piece-10",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "18%",
      top: "22%",
      width: "16%",
      aspectRatio: "1.4 / 1",
      rotation: "-2deg",
      mobileWidth: "84%",
      mobileAspectRatio: "1.45 / 1",
      mobileAlignment: "flex-end",
      mobileRotation: "-1.5deg",
      mobileOrder: 11,
    },
  },
  {
    id: "piece-11",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "69%",
      top: "24%",
      width: "15%",
      aspectRatio: "1.2 / 1",
      rotation: "2deg",
      mobileWidth: "70%",
      mobileAspectRatio: "1.2 / 1",
      mobileAlignment: "flex-start",
      mobileRotation: "1.5deg",
      mobileOrder: 12,
    },
  },
  {
    id: "piece-12",
    imagePath: "",
    title: "",
    description: "",
    story: "",
    reflection: "",
    layout: {
      left: "43%",
      top: "2%",
      width: "14%",
      aspectRatio: "0.9 / 1",
      rotation: "-1.5deg",
      mobileWidth: "78%",
      mobileAspectRatio: "0.95 / 1",
      mobileAlignment: "flex-end",
      mobileRotation: "-1deg",
      mobileOrder: 13,
    },
  },
];

type PieceStyle = CSSProperties & {
  "--piece-left": string;
  "--piece-top": string;
  "--piece-width": string;
  "--piece-aspect": string;
  "--piece-rotation": string;
  "--piece-mobile-width": string;
  "--piece-mobile-aspect": string;
  "--piece-mobile-align": string;
  "--piece-mobile-rotation": string;
  "--piece-mobile-order": number;
};

function getPieceStyle(layout: StoryLayout): PieceStyle {
  return {
    "--piece-left": layout.left,
    "--piece-top": layout.top,
    "--piece-width": layout.width,
    "--piece-aspect": layout.aspectRatio,
    "--piece-rotation": layout.rotation,
    "--piece-mobile-width": layout.mobileWidth,
    "--piece-mobile-aspect": layout.mobileAspectRatio,
    "--piece-mobile-align": layout.mobileAlignment,
    "--piece-mobile-rotation": layout.mobileRotation,
    "--piece-mobile-order": layout.mobileOrder,
  };
}

function formatSlot(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function PiecesOfStory() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePiece = activeIndex === null ? undefined : piecesOfStory[activeIndex];

  const moveStory = useCallback((direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return (current + direction + piecesOfStory.length) % piecesOfStory.length;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleArrowKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveStory(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        moveStory(1);
      }
    };

    window.addEventListener("keydown", handleArrowKeys);
    return () => window.removeEventListener("keydown", handleArrowKeys);
  }, [activeIndex, moveStory]);

  return (
    <section className="pieces-story-section" aria-labelledby="pieces-story-heading">
      <div className="pieces-story-canvas">
        <h2 id="pieces-story-heading" className="pieces-story-title font-display text-gold">
          Pieces of Story
        </h2>

        {piecesOfStory.map((piece, index) => (
          <Button
            key={piece.id}
            type="button"
            variant="ghost"
            aria-label={piece.title ? `Open ${piece.title}` : `Open story slot ${formatSlot(index)}`}
            aria-haspopup="dialog"
            className="pieces-story-photo"
            style={getPieceStyle(piece.layout)}
            onClick={() => setActiveIndex(index)}
          >
            <span className="pieces-story-photo-inner">
              {piece.imagePath ? (
                <img
                  src={piece.imagePath}
                  alt={piece.title || `Story photograph ${formatSlot(index)}`}
                  loading="lazy"
                />
              ) : (
                <span className="pieces-story-placeholder" aria-hidden="true">
                  <ImagePlus className="size-5" />
                  <span>PHOTO · {formatSlot(index)}</span>
                </span>
              )}
              {piece.title && <span className="pieces-story-photo-caption">{piece.title}</span>}
            </span>
          </Button>
        ))}
      </div>

      <Dialog
        open={activePiece !== undefined}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        {activePiece && activeIndex !== null && (
          <DialogContent className="pieces-story-dialog">
            <div key={activePiece.id} className="pieces-story-viewer">
              <div className="pieces-story-viewer-image">
                {activePiece.imagePath ? (
                  <img
                    src={activePiece.imagePath}
                    alt={activePiece.title || `Story photograph ${formatSlot(activeIndex)}`}
                  />
                ) : (
                  <div className="pieces-story-viewer-placeholder" aria-hidden="true">
                    <ImagePlus className="size-7" />
                    <span>PHOTO · {formatSlot(activeIndex)}</span>
                  </div>
                )}
              </div>

              <div className="pieces-story-details">
                <div className="pieces-story-meta">
                  {activePiece.date && <span>{activePiece.date}</span>}
                  {activePiece.category && <span>{activePiece.category}</span>}
                </div>
                <DialogTitle className="pieces-story-dialog-title font-display text-gold">
                  {activePiece.title || `Piece ${formatSlot(activeIndex)}`}
                </DialogTitle>
                {activePiece.description && (
                  <DialogDescription className="pieces-story-description">
                    {activePiece.description}
                  </DialogDescription>
                )}

                {activePiece.story && (
                  <section className="pieces-story-copy-block">
                    <h3>Story</h3>
                    <p>{activePiece.story}</p>
                  </section>
                )}
                {activePiece.reflection && (
                  <section className="pieces-story-copy-block pieces-story-reflection">
                    <h3>Reflection</h3>
                    <p>{activePiece.reflection}</p>
                  </section>
                )}

                <div className="pieces-story-navigation">
                  <Button
                    type="button"
                    variant="magic"
                    size="icon"
                    aria-label="Previous story"
                    onClick={() => moveStory(-1)}
                  >
                    <ArrowLeft />
                  </Button>
                  <span aria-live="polite">
                    {formatSlot(activeIndex + 1)} <span aria-hidden="true">/</span> {formatSlot(piecesOfStory.length)}
                  </span>
                  <Button
                    type="button"
                    variant="magic"
                    size="icon"
                    aria-label="Next story"
                    onClick={() => moveStory(1)}
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}