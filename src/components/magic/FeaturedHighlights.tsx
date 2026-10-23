import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    id: "kompasiana",
    title: "Published on Kompasiana",
    subtitle: "Youthsaction#1 by Beyouth.id",
    description: "Fostering care and kindness — sharing joy and supplies at Erlazet Orphanage, Jakarta Timur, to build a more compassionate society.",
    imageUrl: "/images/featured-kompasiana.jpg",
    link: "https://www.kompasiana.com/ainiyaainiya3343/6aa3bbb534777c412472b2a3/youthsaction-1-by-beyouth-id-menumbuhkan-kepedulian-terhadap-sesama",
  },
  {
    id: "youthfunded",
    title: "Website Project",
    subtitle: "Youthfunded Official Website",
    description: "Collaborated with a team to develop YouthFunded's official website, helping establish a professional digital presence for a youth-focused organization.",
    imageUrl: "/images/youthfunded-preview.jpg",
    link: "https://www.youthfunded.vercel.app",
  },
  {
    id: "honor",
    title: "Best Rookies in Cybersecurity",
    subtitle: "Cybersecurity Award",
    description: "A collection of stories, essays, and creative works published and shared with readers everywhere.",
    imageUrl: "/images/certificate-best-rookies.jpg",
    link: " https://ainiyafaidahaura.vercel.app/",
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
  const posRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    const speed = 0.4;

    const run = () => {
      posRef.current += speed;
      
      const total = el.scrollWidth;
      const tampil = el.clientWidth;
      if (total > tampil && posRef.current >= total - tampil) {
        posRef.current = 0;
      }
      el.scrollLeft = posRef.current;
      animId = requestAnimationFrame(run);
    };

    animId = requestAnimationFrame(run);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 px-5">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-hidden pb-2"
        style={{ width: "100%" }}
      >
        {highlights.map((item) => (
          <Reveal key={item.id} delay={100}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-72 sm:w-80 rounded-xl overflow-hidden block"
              style={{
                background: "linear-gradient(145deg, oklch(0.22 0.10 295 / 92%), oklch(0.16 0.08 290 / 96%))",
                border: "1px solid oklch(0.45 0.19 290 / 35%)",
                boxShadow: "0 8px 32px oklch(0.10 0.05 290 / 45%), inset 0 0 24px oklch(0.45 0.19 290 / 12%)",
              }}
            >
              <div className="w-full h-32 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-primary">{item.title}</h3>
                <p className="text-sm text-foreground/90 mt-1 font-medium">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-snug line-clamp-2">{item.description}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
