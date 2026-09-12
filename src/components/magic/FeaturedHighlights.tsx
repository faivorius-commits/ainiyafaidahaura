import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    id: "1",
    title: "Beyouth.id",
    description: "Platform pemuda untuk belajar, berkarya, dan berkoneksi",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "2",
    title: "Cybersecurity Project",
    description: "Pemahaman dasar keamanan digital & perlindungan data",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "3",
    title: "Writing Portfolio",
    description: "Kumpulan tulisan, esai, dan karya kreatif",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "4",
    title: "Community Project",
    description: "Pengembangan diri & kolaborasi pemuda",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    id: "5",
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
  const touchStartX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    const speed = 0.4;

    const animate = () => {
      if (!isHovered && !isDragging.current) {
        positionRef.current += speed;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (positionRef.current >= maxScroll) positionRef.current = 0;
        el.scrollLeft = positionRef.current;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const deltaX = touchStartX.current - e.touches[0].clientX;
    scrollRef.current.scrollLeft += deltaX;
    positionRef.current = scrollRef.current.scrollLeft;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="w-full max-w-6xl mx-auto mt-20 px-5">
      <Reveal>
        <h2 className="font-display text-2xl text-center text-primary mb-8">✨ Featured Highlights ✨</h2>
      </Reveal>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
