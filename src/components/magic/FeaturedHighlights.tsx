import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    id: "beyouth",
    title: "Beyouth.id",
    description: "Platform pemuda untuk belajar, berkarya, dan berkoneksi",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "cyber",
    title: "Cybersecurity Project",
    description: "Pemahaman dasar keamanan digital & perlindungan data",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "writing",
    title: "Writing Portfolio",
    description: "Kumpulan tulisan, esai, dan karya kreatif",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "community",
    title: "Community Project",
    description: "Pengembangan diri & kolaborasi pemuda",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "archive",
    title: "Digital Archive",
    description: "Dokumentasi perjalanan, pencapaian, dan proyek",
    imageUrl: "https://images.unsplash.com/photo-1507842273497-4236481d2cf0?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
];

export function FeaturedHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);
  const isDragging = useRef(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.35;

    const loop = () => {
      if (!isHovered && !isDragging.current) {
        positionRef.current += speed;
        const max = el.scrollWidth - el.clientWidth;
        if (positionRef.current >= max) positionRef.current = 0;
        el.scrollLeft = positionRef.current;
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isHovered]);

  const handleStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
  };
  const handleMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = touchStartX.current - e.touches[0].clientX;
    scrollRef.current.scrollLeft += dx;
    positionRef.current = scrollRef.current.scrollLeft;
    touchStartX.current = e.touches[0].clientX;
  };
  const handleEnd = () => { isDragging.current = false; };

  return (
    <section className="w-full max-w-6xl mx-auto mt-20 px-5">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        {highlights.map((item) => (
          <Reveal key={item.id} delay={100}>
            <a
              href={item.link}
              className="flex-shrink-0 w-72 sm:w-80 glass glass-hover rounded-xl overflow-hidden block"
            >
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
