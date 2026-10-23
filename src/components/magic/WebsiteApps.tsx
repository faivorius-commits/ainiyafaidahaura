import { useState } from "react";
import {
  ExternalLink,
  X,
  ArrowUpRight,
  Globe,
  Smartphone,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Link } from "@tanstack/react-router";

type Project = {
  title: string;
  category: "website" | "application";
  icon: string;
  preview: string;
  description: string;
  label: string;
  url?: string;
};

const projects: Project[] = [
  {
    title: "YouthFunded Official Website",
    category: "website",
    icon: "/images/youthfunded-preview.jpg",
    preview: "/images/youthfunded-preview.jpg",
    description:
    "Collaborated with a team to develop a website for YouthFunded, a youth-focused organization, with the goal of establishing a professional digital presence and improving access to organizational information. The project involved collaborative planning, website development, and creating a user-friendly digital experience that reflects the organization's identity and mission." , 
    label: "Website Project", 
    url: "https://youthfunded.vercel.app",
  },

  {
    title: "Refill Reminder",
    category: "website",
    icon: "/images/refill-reminder-preview.jpg",
    preview: "/images/refill-reminder-preview.jpg",
    description:
      "A website project designed to help users remember and manage their refill schedules through a simple, accessible, and user-friendly digital interface.",
    label: "Website Project",
    url: "https://green-refill-reminder.netlify.app",
  },

  {
    title: "Today — To Do List of The Day",
    category: "application",
    icon: "/images/today-logo.jpg",
    preview: "/images/today-preview.jpg",
    description:
      "A cozy interactive application where users can build friendships with virtual teddy bears, read daily letters, collect unique characters, and track their progress through an interactive interface.",
    label: "Private Project",
    url: "https://fivorius.itch.io",
  },

  {
    title: "Save The Light: Protect The Deer",
    category: "application",
    icon: "/images/save-the-light.jpg",
    preview: "/images/save-the-light-preview.jpg",
    description:
      "An interactive project where players protect a magical deer from red lights while exploring a simple and atmospheric game experience.",
    label: "Private Project",
    url: "https://fivorius.itch.io",
  },
];

export function WebsiteApps() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const website = projects.find(
    (project) => project.category === "website"
  );

  const applications = projects.filter(
    (project) => project.category === "application"
  );

  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">

        {/* =========================
            BACK
        ========================== */}
        <Link
          to="/archive"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          ← Kembali ke Digital Archive
        </Link>

        {/* =========================
            TITLE
        ========================== */}
        <SectionTitle
          title="Website / Apps"
          subtitle="Things I built with code, curiosity, and a bit of magic."
        />

        {/* =========================
            WEBSITE
        ========================== */}
        {website && (
          <div className="mb-20">
            {/* SECTION HEADER */}
            <div className="mb-5 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Globe className="size-5 text-primary" />
              </span>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  Website
                </p>

                <h2 className="font-display text-2xl">
                  Featured Website
                </h2>
              </div>
            </div>

            {/* WEBSITE LINK */}
            <a
              href={website.url}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Reveal>
                <article className="glass glass-hover overflow-hidden rounded-2xl transition-all duration-500 group-hover:-translate-y-1">

                  {/* BROWSER HEADER */}
                  <div className="flex items-center gap-2 border-b border-white/10 bg-black/20 px-4 py-3">
                    <span className="size-2.5 rounded-full bg-red-400/70" />
                    <span className="size-2.5 rounded-full bg-yellow-400/70" />
                    <span className="size-2.5 rounded-full bg-green-400/70" />

                    <div className="ml-3 flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
                      green-refill-reminder.netlify.app
                    </div>

                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  {/* WEBSITE PREVIEW */}
                  <div className="relative aspect-video overflow-hidden bg-black/30">
                    <img
                      src={website.preview}
                      alt={`${website.title} preview`}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/20">
                      <span className="translate-y-2 rounded-full border border-white/20 bg-black/60 px-5 py-2 text-sm opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        Open Website
                        <ExternalLink className="ml-2 inline size-4" />
                      </span>
                    </div>
                  </div>

                  {/* WEBSITE INFO */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <h3 className="font-display text-2xl">
                        {website.title}
                      </h3>

                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                        {website.label}
                      </span>
                    </div>

                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                      {website.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
                      Visit Website
                      <ExternalLink className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Reveal>
            </a>
          </div>
        )}

        {/* =========================
            APPLICATIONS
        ========================== */}
        <div>
          {/* SECTION HEADER */}
          <div className="mb-8 flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
              <Smartphone className="size-5 text-primary" />
            </span>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Applications
              </p>

              <h2 className="font-display text-2xl">
                Things I Built
              </h2>
            </div>
          </div>

          {/* =========================
              APP ICON GRID
          ========================== */}
          <div className="grid grid-cols-3 gap-x-5 gap-y-9 sm:grid-cols-4 sm:gap-x-8 md:grid-cols-5">
            {applications.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group flex w-full flex-col items-center text-center outline-none"
                  aria-label={`View ${project.title}`}
                >
                  {/* APP ICON */}
                  <div
                    className="
                      relative
                      size-[72px]
                      overflow-hidden
                      rounded-[22%]
                      bg-black/20
                      shadow-lg
                      ring-1
                      ring-white/10
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:scale-105
                      group-hover:shadow-xl
                      group-hover:ring-primary/30
                      group-active:scale-95
                      sm:size-[82px]
                      md:size-[92px]
                    "
                  >
                    <img
                      src={project.icon}
                      alt={project.title}
                      className="size-full object-cover"
                    />

                    {/* GLASS HOVER */}
                    <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
                  </div>

                  {/* APP NAME */}
                  <h3
                    className="
                      mt-3
                      max-w-[100px]
                      text-xs
                      font-medium
                      leading-snug
                      text-foreground
                      transition-colors
                      duration-300
                      group-hover:text-primary
                      sm:max-w-[120px]
                      sm:text-sm
                    "
                  >
                    {project.title}
                  </h3>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          APPLICATION MODAL
      ========================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-background/95 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md transition-colors hover:bg-white/10"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            {/* LARGE PREVIEW */}
            <div className="overflow-hidden bg-black/30">
              <img
                src={selectedProject.preview}
                alt={`${selectedProject.title} preview`}
                className="max-h-[55vh] w-full object-contain"
              />
            </div>

            {/* MODAL INFO */}
            <div className="p-6 md:p-8">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                  {selectedProject.label}
                </span>

                <span className="text-xs text-muted-foreground">
                  Application
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl">
                {selectedProject.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {selectedProject.description}
              </p>

              {/* OPEN PROJECT */}
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 text-sm text-primary transition-all hover:bg-primary/20"
                >
                  Open Project
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
