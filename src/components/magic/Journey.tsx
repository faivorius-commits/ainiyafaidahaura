import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { BookOpen, GraduationCap, Sparkles, Star, Feather, Moon, Cloud } from "lucide-react";

const milestones = [
  { icon: BookOpen, year: "2015 – 2021", title: "Al-Huda Islamic Elementary School", text: "The first place where I learned that words could hold entire worlds — and I started writing my own." },
  { icon: GraduationCap, year: "2021 – 2024", title: "Sixteen Junior High School Bekasi", text: "I found my voice, stepped out of my comfort zone, and discovered how much I loved creating." },
  { icon: Sparkles, year: "2024 – 2027", title: "Yadika 8 Senior High School", text: "The world feels wider now — writing, technology, leadership, and dreams all growing together." }
];

export function Journey() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="journey" className="relative px-5 py-24 overflow-hidden min-h-screen">
      
      {/* MAGICAL BOOK */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[oklch(0.19_0.09_293)] animate-fade-out-smooth">
          <div className="relative animate-book-magic">
            <div className="relative w-32 h-40 border-2 border-primary/70 rounded-lg bg-white/8 backdrop-blur-md shadow-[0_0_40px_oklch(0.88_0.13_90/50%),inset_0_0_20px_oklch(0.88_0.13_90/20%)]">
              <div className="absolute inset-0 border-r border-primary/50 w-1/2" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-gold text-5xl tracking-widest drop-shadow-[0_0_10px_oklch(0.88_0.13_90/60%)]">Journey</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DECORATION */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="animate-float absolute text-primary/60 size-5" style={{ top: '10%', left: '8%', animationDelay: '0s' }} />
        <Feather className="animate-float absolute text-accent/50 size-4" style={{ top: '22%', right: '12%', animationDelay: '0.6s' }} />
        <Star className="animate-float absolute text-primary/50 size-4" style={{ top: '45%', left: '4%', animationDelay: '1.2s' }} />
        <Moon className="animate-float absolute text-secondary/40 size-5" style={{ top: '65%', right: '6%', animationDelay: '1.8s' }} />
        <Sparkles className="animate-float absolute text-accent/50 size-4" style={{ bottom: '18%', left: '18%', animationDelay: '2.4s' }} />
        <Cloud className="animate-float absolute text-primary/30 size-5" style={{ bottom: '32%', right: '22%', animationDelay: '3s' }} />
      </div>

      {/* JOURNEY PAGE */}
      {!loading && (
        <div className="mx-auto max-w-3xl relative z-10 animate-appear-up">
          <SectionTitle title="My Journey" subtitle="Every experience, big or small, weaves into who I am." />

          <div className="relative pl-10 mt-10">
            <span aria-hidden className="absolute top-2 bottom-2 left-3 w-px bg-gradient-to-b from-primary/80 via-accent/60 to-transparent animate-draw-line" />
            <ul className="grid gap-8 mt-2">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <li key={m.year} style={{ animationDelay: `${i * 300 + 0.5}s` }} className="animate-appear-up">
                    <Reveal delay={i * 120} className="relative">
                      <span aria-hidden className="absolute top-5 -left-[2.2rem] logo-frame size-9">
                        <Icon className="size-5 text-primary" />
                      </span>
                      <div className="glass glass-hover p-5">
                        <p className="font-display text-gold text-2xl">{m.year}</p>
                        <p className="font-display mt-2 text-lg leading-snug text-primary">{m.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
