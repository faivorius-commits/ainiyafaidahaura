import {
  Users,
  Handshake,
  MonitorPlay,
  Megaphone,
  CalendarDays,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

const categories = [
  {
    title: "Forums & Conferences",
    description: "Model United Nations, youth forums, and international conferences.",
    icon: Users,
  },
  {
    title: "Volunteering",
    description: "Social contributions, volunteering, and community involvement.",
    icon: Handshake,
  },
  {
    title: "Webinars & Workshops",
    description: "Learning experiences, workshops, and professional development.",
    icon: MonitorPlay,
  },
  {
    title: "Campaigns & Advocacy",
    description: "Initiatives, awareness campaigns, and advocacy projects.",
    icon: Megaphone,
  },
  {
    title: "Youth Programs",
    description: "Youth leadership programs, fellowships, and development initiatives.",
    icon: CalendarDays,
  },
];

export function Activities() {
  return (
    <section className="relative overflow-hidden px-5 py-24">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionTitle
          title="Activities"
          subtitle="A collection of experiences, initiatives, and contributions."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Reveal key={category.title} delay={index * 100}>
                <div className="group h-full rounded-2xl border border-primary/15 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
