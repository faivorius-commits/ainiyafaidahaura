import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const documentationImages = [
  "/images/doc-1.jpg",
  "/images/doc-2.jpg",
  "/images/doc-3.jpg",
  "/images/doc-4.jpg",
  "/images/doc-5.jpg",
  "/images/doc-6.jpg",
];

export function Documentation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? documentationImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === documentationImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="documentation" className="py-24 px-5">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl font-bold mb-8">Documentation</h2>

        {/* WADAH SLIDER FOTO */}
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {documentationImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Documentation ${i + 1}`}
                className="w-full flex-shrink-0 object-cover"
              />
            ))}
          </div>

          {/* TOMBOL KIRI KANAN */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/70"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm hover:bg-black/70"
          >
            <ChevronRight size={20} />
          </button>

          {/* TITIK PENANDA */}
          <div className="absolute bottom-4 left-1/2 flex gap-2 -translate-x-1/2">
            {documentationImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === currentIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
