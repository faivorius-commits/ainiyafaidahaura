
import "./Introduction.css";
import { ArrowUpRight, Sparkles } from "lucide-react";

const skills = [
  "HTML",
  "Cybersecurity",
  "JavaScript",
  "Research & Writing",
  "Public Speaking",
  "Design Graphic",
  "Leadership",
  "Content Creation",
  "Project Coordination",
  "Strategic Communication",
];

const tools = [
  { name: "VS Code", image: "/images/tools/vscode.png" },
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
      <div className="intro-main">
        <div className="intro-copy">
          <p className="intro-greeting">A little introduction</p>

          <h2 className="intro-heading">
            Hi, I'm
            <span className="intro-name"> Ainiya.</span>
          </h2>


          <p className="intro-description">
            I'm a curious learner with an interest in technology,
            cybersecurity, writing, and international affairs. I enjoy
            building digital projects, exploring complex ideas, and
            contributing to youth-led initiatives. Through creativity,
            analytical thinking, and collaboration, I hope to turn ideas
            into meaningful work.
          </p>

        </div>

        <div className="intro-photo-wrap">
          <div className="intro-photo-glow" />

          <div className="intro-photo-frame">
            <img
              src="/images/ainiya.jpg"
              alt="Ainiya Faida Haura"
            />
          </div>

          <span className="intro-photo-star">✦</span>
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
              <span className="intro-tool" key={tool.name}>
                <img src={tool.image} alt={tool.name} title={tool.name} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="intro-footer">
        ALWAYS LEARNING, ALWAYS EVOLVING
      </p>
    </section>
  );
}
