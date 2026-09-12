import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    id: "legallyyouth",
    title: "Chapter Founder",
    subtitle: "LegallyYOUth — Southeast & East Asia Region",
    description: "Building a space for youth to learn legal awareness, grow leadership, and create impact across Southeast and East Asia.",
    imageUrl: "/images/featured-legallyyouth.jpg",
    link: "#",
  },
  {
    id: "kompasiana",
    title: "Published on Kompasiana",
    subtitle: "Youthsaction#1 by Beyouth.id",
    description: "Fostering care and kindness — sharing joy and supplies at Erlazet Orphanage, Jakarta Timur, to build a more compassionate society.",
    imageUrl: "/images/featured-kompasiana.jpg",
    link: "https://www.kompasiana.com/ainiyaainiya3343/6aa3bbb534777c412472b2a3/youthsaction-1-by-beyouth-id-menumbuhkan-kepedulian-terhadap-sesama",
  },
  {
    id: "books",
    title: "Author of 5 Books",
    subtitle: "Writings & Publications",
    description: "A collection of stories, essays, and creative works published and shared with readers everywhere.",
    imageUrl: "/images/featured-books.jpg",
    link: "#",
  },
  {
    id: "linkedin",
    title: "LinkedIn Profile",
    subtitle: "Ainiya Faida Haura",
    description: "Professional journey in youth leadership, writing, cybersecurity, and community building.",
    imageUrl: "/images/featured-linkedin.jpg",
    link: "https://linkedin.com/in/ainiyafaidahaura",
  },
];

export function FeaturedHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isDragging = useRef(false);
  const touchStartX = useRef(0);
  const scrollPos = useRef(0);
  const cardWidth = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.4;

    const run = () => {
      if (!isHovered && !isDragging.current) {
        scrollPos.current += speed;
        el.scrollLeft = scrollPos.current;
        if (cardWidth.current === 0 && el.children[0]) {
          cardWidth.current = (el.children[0] as HTMLElement).offsetWidth + 24; // tambah jarak antar kartu
        }
        const totalWidth = cardWidth.current * 4;
        if (totalWidth > 0 && scrollPos.current >= totalWidth) {
          scrollPos.current = 0;
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(run);
    };

    animId = requestAnimationFrame(run);
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
    scrollPos.current = scrollRef.current.scrollLeft;
    touchStartX.current = e.touches[0].clientX;
  };
  const handleEnd = () => { isDragging.current = false; };

  return (
    <section className="w-full max-w-6xl mx-auto mt-20 px-5">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4"
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
