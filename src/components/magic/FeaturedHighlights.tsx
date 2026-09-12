import { Link } from "@tanstack/react-router";
import {
  UserCheck,
  PenLine,
  BookOpen,
  Linkedin,
  ArrowRight
} from "lucide-react";
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
    title: "Published Writer",
    subtitle: "Kompasiana",
    description: "Social action and community care stories.",
    link: "https://www.kompasiana.com/ainiyaainiya3343/6aa3bbb534777c412472b2a3/youthsaction-1-by-beyouth-id-menumbuhkan-kepedulian-terhadap-sesama",
    label: "Read Article",
    isExternal: true
  },
  {
    icon: BookOpen,
    title: "Author of 5 Books",
    subtitle: "Publications",
    description: "Collection of writings and ideas.",
    link: "/archive",
    label: "View Works",
    isExternal: false
  },
  {
    icon: Linkedin,
    title: "Professional Profile",
    subtitle: "LinkedIn",
    description: "Connect and see my journey.",
    link: "https://linkedin.com/in/ainiyafaidahaura",
    label: "Visit Profile",
    isExternal: true
  }
];

function HighlightCard({ icon: Icon, title, subtitle, description, link, label, isExternal }: any) {
  return (
    <div className="relative overflow-hidden rounded-[3rem] rounded-t-[4rem] p-6 min-h-[220px] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/90 to-violet-900/90"></div>
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_left,rgba(255,220,255,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(200,220,255,0.12),transparent_55%),radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>
      <div className="absolute top-4 left-6 w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-10 w-1 h-1 bg-pink-200/60 rounded-full animate-pulse delay-150"></div>
      <div className="absolute bottom-10 left-12 w-1 h-1 bg-sky-200/50 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-amber-200/40 rounded-full animate-pulse delay-500"></div>

      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-sm text-white">
          <Icon className="size-5" />
        </div>
        <h4 className="text-white font-display text-lg leading-snug">{title}</h4>
        <p className="text-white/75 text-sm mt-1">{subtitle}</p>
        <p className="text-white/65 text-sm mt-2">{description}</p>
      </div>

      <div className="relative z-10 mt-3 text-center">
        {isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300"
          >
            {label}
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <Link
            to={link}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-300"
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
    <section className="px-5 pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal key={i} delay={i * 120}>
              <HighlightCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
