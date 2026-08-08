import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import type { Book } from "@/lib/books";

function EpubReader({ book }: { book: Book }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const renditionRef = useRef<{ prev: () => void; next: () => void } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let destroyed = false;
    let instance: { destroy: () => void } | null = null;

    (async () => {
      const mod = await import("epubjs");
      const ePub = mod.default;
      if (destroyed || !hostRef.current) return;
      const epubBook = ePub(book.file);
      instance = epubBook as unknown as { destroy: () => void };
      const rendition = epubBook.renderTo(hostRef.current, {
        width: "100%",
        height: "100%",
        spread: "none",
        flow: "scrolled-doc",
      });
      rendition.themes.default({
        body: {
          background: "#fdf3c9",
          color: "#3a2f18",
          "font-family": "Georgia, 'Cormorant Garamond', serif",
          "line-height": "1.8",
          padding: "8px 4px",
        },
        p: { "font-size": "1.05rem" },
        a: { color: "#8a6a12" },
      });
      await rendition.display();
      renditionRef.current = rendition as unknown as { prev: () => void; next: () => void };
      if (!destroyed) setLoading(false);
    })().catch(() => setLoading(false));

    return () => {
      destroyed = true;
      instance?.destroy();
    };
  }, [book.file]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-[#e0c96a] bg-[#fdf3c9] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        {loading && (
          <div className="flex h-[70vh] items-center justify-center text-[#6b5a22]">
            <Loader2 className="size-6 animate-spin" />
          </div>
        )}
        <div ref={hostRef} className={loading ? "h-0" : "h-[70vh] w-full"} />
      </div>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => renditionRef.current?.prev()}
          className="glass glass-hover inline-flex items-center gap-1.5 px-4 py-2 text-sm"
        >
          <ChevronLeft className="size-4 text-primary" /> Previous
        </button>
        <button
          type="button"
          onClick={() => renditionRef.current?.next()}
          className="glass glass-hover inline-flex items-center gap-1.5 px-4 py-2 text-sm"
        >
          Next <ChevronRight className="size-4 text-primary" />
        </button>
      </div>
    </div>
  );
}

function PdfReader({ book }: { book: Book }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e0c96a] bg-[#fdf3c9] p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      <iframe
        src={`${book.file}#view=FitH`}
        title={book.title}
        className="h-[70vh] w-full rounded-xl bg-[#fdf3c9]"
      />
    </div>
  );
}

export function BookReader({ book }: { book: Book }) {
  return book.format === "epub" ? <EpubReader book={book} /> : <PdfReader book={book} />;
}
