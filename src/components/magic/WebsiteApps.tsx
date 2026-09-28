import { useState } from "react";
import {
  ExternalLink,
  X,
  Smartphone,
  Globe,
  ArrowUpRight,
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
  // =====================================================
  // WEBSITE
  // =====================================================
  {
    title: "Refill Reminder",
    category: "website",
    icon: "/images/refill-reminder-preview.jpg",
    preview: "/images/refill-reminder-preview.jpg",
    description:
      "A website project designed to help users remember and manage their refill schedules through a simple and accessible digital interface.",
    label: "Website Project",
    url: "#",
  },

  // =====================================================
  // APPLICATION 1
  // =====================================================
  {
    title: "Cozy Teddy Town — Minisuperasep",
    category: "application",
    icon: "/images/teddy-town-logo.jpg",
    preview: "/images/teddy-town-preview.jpg",
    description:
      "Cozy web application where users build friendships with virtual teddy bears by reading daily letters, collecting unique characters, and tracking their progress through an interactive, responsive interface.",
    label: "Private Project",
    url: "https://fivorius.itch.io",
  },

  // =====================================================
  // APPLICATION 2
  // =====================================================
  {
    title: "Save The Light: Protect The Deer",
    category: "application",
    icon: "/images/save-the-light.jpg",
    preview: "/images/save-the-light-preview.jpg",
    description:
      "An interactive project where players protect a magical deer from red lights.",
    label: "Private Project",
    url: "https://fivorius.itch.io",
  },
];

export function WebsiteApps() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const website = projects.find(
    (project) => project.category === "website"
  );

  const applications = projects.filter(
    (project) => project.category === "application"
  );

  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">

        {/* BACK */}
        <Link
          to="/archive"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          ← Kembali ke Digital Archive
        </Link>

        {/* TITLE */}
        <SectionTitle
          title="Digital Creations"
          subtitle="Websites and applications built with code, curiosity, and a bit of magic."
        />

        {/* =================================================
            WEBSITE
        ================================================== */}
        {website && (
          <section className="mb-16">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Globe className="size-5 text-primary" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary">
                  Featured Website
                </p>

                <h2 className="font-display text-2xl">
                  Websites
                </h2>
              </div>
            </div>

            <Reveal>
              <button
                type="button"
                onClick={() => setSelectedProject(website)}
                className="group block w-full text-left"
              >
                <article className="glass glass-hover overflow-hidden rounded-3xl border border-white/10 p-3 transition-all duration-500 group-hover:border-primary/30">

                  {/* BROWSER */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">

                    {/* BROWSER BAR */}
                    <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="size-2.5 rounded-full bg-red-400/70" />
                        <span className="size-2.5 rounded-full bg-yellow-300/70" />
                        <span className="size-2.5 rounded-full bg-green-400/70" />
                      </div>

                      <div className="flex-1 rounded-lg border border-white/10 bg-black/20 px-4 py-1.5 text-center text-[10px] text-muted-foreground">
                        refill-reminder
                      </div>

                      <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>

                    {/* WEBSITE PREVIEW */}
                    <div className="relative overflow-hidden bg-black/20">
                      <img
                        src={website.preview}
                        alt={`${website.title} website preview`}
                        className="block max-h-[520px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* WEBSITE INFO */}
                  <div className="px-3 pb-3 pt-5 sm:px-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-primary">
                          {website.label}
                        </p>

                        <h3 className="mt-1 font-display text-3xl">
                          {website.title}
                        </h3>

                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                          {website.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm text-primary">
                        View website →
                      </span>
                    </div>
                  </div>
                </article>
              </button>
            </Reveal>
          </section>
        )}

        {/* =================================================
            APPLICATIONS
        ================================================== */}
        <section>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
              <Smartphone className="size-5 text-primary" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary">
                Digital Projects
              </p>

              <h2 className="font-display text-2xl">
                Applications
              </h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {applications.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 100}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group block h-full w-full text-left"
                >
                  <article className="glass glass-hover h-full overflow-hidden rounded-2xl border border-white/10 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30">

                    {/* APP ICON */}
                    <div className="flex items-center gap-4">
                      <div className="size-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                        <img
                          src={project.icon}
                          alt={`${project.title} icon`}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-primary">
                          Application
                        </p>

                        <h3 className="mt-1 font-display text-xl leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* FOOTER */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-xs text-muted-foreground">
                        {project.label}
                      </span>

                      <span className="text-xs text-primary">
                        View details →
                      </span>
                    </div>
                  </article>
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* =================================================
          PROJECT DETAIL MODAL
      ================================================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-muted-foreground backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-5" />
            </button>

            {/* PREVIEW IMAGE */}
            <div className="overflow-hidden border-b border-white/10 bg-black/30">
              <img
                src={selectedProject.preview}
                alt={`${selectedProject.title} preview`}
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {selectedProject.category === "website"
                  ? "Website"
                  : "Application"}
              </p>

              <h2 className="mt-2 pr-8 font-display text-3xl leading-tight sm:text-4xl">
                {selectedProject.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {selectedProject.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
                  {selectedProject.label}
                </span>

                {selectedProject.category === "website" && (
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs text-primary">
                    Web Project
                  </span>
                )}
              </div>

              {selectedProject.url &&
                selectedProject.url !== "#" && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm text-primary transition-all hover:bg-primary/20"
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
