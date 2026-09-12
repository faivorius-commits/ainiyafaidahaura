import { Link } from "@tanstack/react-router";
import { UserCheck, PenLine, BookOpen, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    icon: UserCheck,
    title: "LegallyYOUth Chapter Founder",
    subtitle: "Southeast & East Asia Region",
    description: "Leading regional chapter for youth empowerment.",
    link: "/archive",
    label: "View Role",
    isExternal: false
  },
  {
    icon: PenLine,
    title: "Youth’s Action — By BeYouth ID",
    subtitle: "Kompasiana",
    description: "Caring for others and growing together through community service.",
    link: "https://www.kompasiana.com/ainiyaainiya3343/6aa3bbb534777c412472b2a3/youthsaction-1-by-beyouth-id-menumbuhkan-kepedulian-terhadap-sesama",
    label: "Read Article",
    isExternal: true
  },
  {
    icon: BookOpen,
    title: "Author of 5 Books",
    subtitle: "Publications",
    description: "Stories, thoughts, and ideas written with heart.",
    link: "/archive",
    label: "View Works",
    isExternal: false
  },
  {
    icon: Linkedin,
    title: "Professional Profile",
    subtitle: "LinkedIn",
    description: "Connect, collaborate, and grow together.",
    link: "https://linkedin.com/in/ainiyafaidahaura",
    label: "Visit Profile",
    isExternal: true
  }
];

function HighlightCard({ icon: Icon, title, subtitle, description, link, label, isExternal }: any) {
  return (
    <div className="relative overflow-hidden rounded-[3rem] rounded-t-[4rem] p-6 min-h-[240px] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(139,111,217,0.3)]">
      
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-violet-900/90 animate-gradient-shift bg-[length:200%_200%]"></div>
      
      <div className="absolute inset-0 opacity-30">
        <span className="absolute top-4 left-6 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse"></span>
        <span className="absolute top-8 right-10 w-1 h-1 bg-pink-200/70 rounded-full animate-pulse delay-150"></span>
        <span className="absolute bottom-12 left-10 w-1 h-1 bg-sky-200/60 rounded-full animate-pulse delay-300"></span>
        <span className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-amber-200/50 rounded-full animate-pulse delay-500"></span>
        <Sparkles className="absolute top-5 right-5 size-4 text-white/20 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
      </div>
      
      <div className="absolute inset-0 rounded-[3rem] rounded-t-[4rem] border border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>

      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-sm text-white group-hover:bg-white/20 transition-colors duration-300">
          <Icon className="size-5 group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h4 className="text-white font-display text-lg leading-snug font-medium">{title}</h4>
        <p className="text-white/75 text-sm mt-1">{subtitle}</p>
        <p className="text-white/65 text-sm mt-2 leading-relaxed">{description}</p>
      </div>

      <div className="relative z-10 mt-3 text-center">
        {isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 group-hover:px-6"
          >
            {label}
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <Link
            to={link}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300 group-hover:px-6"
          >
            {label}
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function FeaturedHighlights() {
  return (
    <div className="w-full mt-12 px-5 clear-both">
      <div className="mx-auto max-w-4xl w-full">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal key={i} delay={i * 150}>
              <HighlightCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
