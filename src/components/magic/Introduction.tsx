import "./Introduction.css";
import { ArrowUpRight, Sparkles } from "lucide-react";
const skills = [
  "Web Development",
  "Cybersecurity",
  "Digital Forensics",
  "Research & Writing",
  "Public Speaking",
  "International Relations",
  "Leadership",
  "Content Creation",
  "Project Coordination",
  "Strategic Communication",
];

const tools = [
  { name: "Visual Studio Code", image: "/images/tools/vscode.png" },
  { name: "GitHub", image: "/images/tools/github.png" },
  { name: "Supabase", image: "/images/tools/supabase.png" },
  { name: "Vercel", image: "/images/tools/vercel.png" },
  { name: "Figma", image: "/images/tools/figma.png" },
  { name: "Canva", image: "/images/tools/canva.png" },
  { name: "TryHackMe", image: "/images/tools/tryhackme.png" },
  { name: "Notion", image: "/images/tools/notion.png" },
];

export function Introduction() {
  return (
    <section className="intro-ethereal">
      <div className="intro-orb intro-orb-one" />
      <div className="intro-orb intro-orb-two" />

      <div className="intro-content">
        <div className="intro-topline">
          <span className="intro-star">✦</span>
          <span>GET TO KNOW ME</span>
          <span className="intro-topline-line" />
          <span className="intro-year">2026</span>
        </div>

        <div className="intro-main">
          <div className="intro-copy">
            <p className="intro-eyebrow">
              A LITTLE INTRODUCTION
            </p>

            <h2 className="intro-heading">
              Hi, I'm
              <span className="intro-name"> Ainiya.</span>
            </h2>

            <p className="intro-role">
              Writer <span>✦</span> Creator <span>✦</span> Youth Advocate
            </p>

            <p className="intro-description">
              I'm a curious learner with an interest in technology,
              cybersecurity, writing, and international affairs.
              I enjoy building digital projects, exploring complex
              ideas, and contributing to youth-led initiatives.
              Through creativity, analytical thinking, and
              collaboration, I hope to turn ideas into meaningful work.
            </p>

            <a
              href="#experience"
              className="intro-link"
            >
              Explore my journey
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="intro-decoration" aria-hidden="true">
            <div className="intro-ring intro-ring-outer" />
            <div className="intro-ring intro-ring-inner" />

            <div className="intro-center">
              <span className="intro-center-star">✧</span>
              <span className="intro-center-letter">A</span>
              <span className="intro-center-caption">
                AD MELIORA
              </span>
            </div>

            <span className="intro-floating-star star-one">✦</span>
            <span className="intro-floating-star star-two">✧</span>
            <span className="intro-floating-star star-three">✦</span>
          </div>
        </div>

        <div className="intro-bottom">
          <div className="intro-skills">
            <div className="intro-skill-list">
              {skills.map((skill) => (
                <span className="intro-skill" key={skill}>
                  <span className="intro-skill-dot" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="intro-tools">
            <div className="intro-tool-list">
              {tools.map((tool) => (
                <div
                  className="intro-tool"
                  key={tool.name}
                  title={tool.name}
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="intro-footer">
          <span>
            <Sparkles size={12} />
            ALWAYS LEARNING, ALWAYS EVOLVING
          </span>
          <span className="intro-footer-symbol">✦</span>
        </div>
      </div>
    </section>
  );
}
