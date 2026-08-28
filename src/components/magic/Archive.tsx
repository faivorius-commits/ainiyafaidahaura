import {
  PenLine,
  Code2,
  Users,
  Library as LibraryIcon,
  Feather,
  BookOpen,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const HEAL_URL = "https://qrcbn.com/check/62-6264-2709-644";

export function Archive() {
  return (
    <section id="archive" className="relative px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="My Digital Archive"
          subtitle="Writings, projects, and moments — all in one constellation."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {/* WRITING */}
          <Reveal key="Writing" delay={0}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <PenLine className="size-5 text-primary" />
              </span>

              <h3 className="font-display text-xl">Writing</h3>

              <ul className="mt-3 grid gap-2">
                <li>
                  <Link
                    to="/poetry"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="text-primary">✦</span>
                    Poetry
                    <Feather className="ml-auto size-3.5 text-primary" />
                  </Link>
                </li>

                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>
                    Short Stories
                  </span>
                </li>

                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>
                    Articles
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>

          {/* PROJECTS */}
          <Reveal key="Projects" delay={110}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <Code2 className="size-5 text-primary" />
              </span>

              <h3 className="font-display text-xl">Projects</h3>

              <ul className="mt-3 grid gap-2">
                <li>
                  <Link
                    to="/website-apps"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="text-primary">✦</span>
                    Website / Apps
                    <Code2 className="ml-auto size-3.5 text-primary" />
                  </Link>
                </li>

                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>
                    UI/UX
                  </span>
                </li>

                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>
                    Cybersecurity
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>

          {/* ORGANIZATIONS */}
          <Reveal key="Organizations" delay={220}>
            <article className="glass glass-hover h-full p-5">
              <span className="logo-frame mb-4 size-12">
                <Users className="size-5 text-primary" />
              </span>

              <h3 className="font-display text-xl">Organizations</h3>

              <ul className="mt-3 grid gap-2">
                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>
                    Certificates
                  </span>
                </li>

                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>
                    Documentation
                  </span>
                </li>

                <li>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✦</span>
                    Event Galleries
                  </span>
                </li>
              </ul>
           
