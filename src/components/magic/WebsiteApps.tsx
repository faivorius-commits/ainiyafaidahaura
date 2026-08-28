import { ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const projects = [
  {
    title: "Cozy Teddy Town — Minisuperasep",
    url: "https://fivorius.itch.io",
    label: "Private Project",
    image: "/images/teddy-town-logo.jpg",
    description: "Cozy web application where users build friendships with virtual teddy bears by reading daily letters, collecting unique characters, and tracking their progress through an interactive, responsive interface.",
  },
  {
    title: "Save The Light: Protect The Deer",
    url: "https://fivorius.itch.io",
    label: "Private Project",
    image: "/images/save-the-light.jpg",
    description: "Protect the magical deer from red eyes.",
  },
];

export function WebsiteApps() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle title="Website / Apps" subtitle="Things I built with code, curiosity, and a bit of magic." />
        <div className="grid gap-4">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass glass-hover h-full p-5">
                <span className="logo-frame mb-4 size-12 overflow-hidden p-0">
                  <img src={p.image} alt={p.title} className="size-full object-cover" />
                </span>
                <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                {p.url && p.label && (
                  <a href={p.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1.5 text-xs text-primary hover:underline">
                    {p.label}<ExternalLink className="size-3" />
                  </a>
                )}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
