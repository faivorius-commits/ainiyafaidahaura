
import { useState } from "react";

const certificates = [
  {
    title: "Online Volunteer",
    image: "/images/certificate-online-volunteer.jpg",
  },
  {
    title: "Best Rookies in Cybersecurity",
    image: "/images/certificate-bestrookiesincybersecurity.jpg",
  },
  {
    title: "Position Paper Runner Up",
    image: "/images/certificate-position-paper-runner-up.jpg",
  },
  {
    title: "AI Career Readiness Training",
    image: "/images/certificate-ai-career-readiness.jpg",
  },
  {
    title: "National Inspirational Writer",
    image: "/images/certificate-national-inspirational-writer.jpg",
  },
  {
    title: "National First-Place Winner",
    image: "/images/certificate-national-first-place-winner.jpg",
  },
];

export function Certificate() {
  const [selected, setSelected] = useState<
    (typeof certificates)[number] | null
  >(null);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 size-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary/80">
            My Achievements
          </p>

          <h1 className="font-display text-4xl text-foreground md:text-5xl">
            Certificates
          </h1>

          <div className="mx-auto mt-5 h-px w-20 bg-primary/50" />
        </div>

        {/* Certificate Gallery */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <button
              key={certificate.title}
              type="button"
              onClick={() => setSelected(certificate)}
              className="group overflow-hidden rounded-2xl border border-primary/15 bg-background/60 text-left shadow-lg shadow-primary/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden bg-muted/20">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  className="aspect-[1.414/1] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
              </div>

              {/* Certificate Title */}
              <div className="px-5 py-5">
                <h2 className="font-display text-lg text-foreground transition-colors duration-300 group-hover:text-primary">
                  {certificate.title}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mb-4 ml-auto flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white transition-colors hover:bg-white/20"
            >
              Close ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="mx-auto max-h-[82vh] w-full rounded-xl object-contain"
            />

            <p className="mt-4 text-center font-display text-lg text-white">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
