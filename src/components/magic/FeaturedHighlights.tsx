import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    id: "legallyyouth",
    title: "Chapter Founder",
    subtitle: "LegallyYOUth — Southeast & East Asia Region",
    description: "Building a space for youth to learn legal awareness, grow leadership, and create impact across Southeast and East Asia.",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80",
    link: "#",
  },
  {
    id: "kompasiana",
    title: "Published on Kompasiana",
    subtitle: "Youthsaction#1 by Beyouth.id",
    description: "Fostering care and kindness — sharing joy and supplies at Erlazet Orphanage, Jakarta Timur, to build a more compassionate society.",
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=700&q=80",
    link: "https://www.kompasiana.com/ainiyaainiya3343/6aa3bbb534777c412472b2a3/youthsaction-1-by-beyouth-id-menumbuhkan-kepedulian-terhadap-sesama",
  },
  {
    id: "books",
    title: "Author of 5 Books",
    subtitle: "Writings & Publications",
    description: "A collection of stories, essays, and creative works published and shared with readers everywhere.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
    link: "#",
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    subtitle: "Ainiya Faida Haura",
    description: "Professional journey in youth leadership, writing, cybersecurity, and community building.",
    imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=700&q=80",
    link: "https://linkedin.com/in/ainiyafaidahaura",
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
        className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth"
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
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 sm:w-96 rounded-xl overflow-hidden block"
              style={{
                background: "linear-gradient(145deg, oklch(0.22 0.10 295 / 92%), oklch(0.16 0.08 290 / 96%))",
                border: "1px solid oklch(0.45 0.19 290 / 35%)",
                boxShadow: "0 8px 32px oklch(0.10 0.05 290 / 45%), inset 0 0 24px oklch(0.45 0.19 290 / 12%)",
              }}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl text-primary">{item.title}</h3>
                <p className="text-base text-foreground/90 mt-1 font-medium">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
