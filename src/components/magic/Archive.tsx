import { PenLine, Code2, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: PenLine, title: "Writing", items: ["Poetry", "Short Stories", "Articles"] },
  {
    icon: Code2,
    title: "Projects",
    items: ["Portfolio Website", "Mobile Apps", "UI/UX", "Cybersecurity"],
  },
  {
    icon: Users,
    title: "Organizations",
    items: ["Certificates", "Documentation", "Event Galleries"],
  },
];

export function Archive() {
  return (
    <section id="archive" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="My Digital Archive"
          subtitle="Writings, projects, and moments — all in one constellation."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <article className="glass glass-hover h-full p-5">
                <span className="logo-frame mb-4 size-12">
                  <c.icon className="size-5 text-primary" />
                </span>
                <h3 className="font-display text-xl">{c.title}</h3>
                <ul className="mt-3 grid gap-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <Button variant="magic" size="pill" asChild>
            <a href="#guestbook">Explore Archive</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}