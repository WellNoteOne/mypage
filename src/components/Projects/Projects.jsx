import "./Projects.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Countries App",
    link: "https://wellnoteone.github.io/Countries/",
    preview: "https://wellnoteone.github.io/Countries/",
    desc: "You can check information about any country",
  },
  {
    title: "Hobbly",
    link: "https://hobbly.azurewebsites.net",
    preview: "https://hobbly.azurewebsites.net/",
    desc: "Group project, which showing to you actual events in Helsinki ",
  },
  {
    title: "Slush search app",
    link: "https://slush-fs.onrender.com",
    preview: "https://slush-fs.onrender.com",
    desc: "Small project for fast searching speaker in the Slush (2025)",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const [fullscreen, setFullscreen] = useState(null); // хранит активный проект
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h3 className="projects-title">{t("projectsTitle")}</h3>
      </div>{" "}
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div
              className="project-preview"
              onClick={() => setFullscreen(p.preview)}
            >
              <iframe src={p.preview} title={p.title} loading="lazy" />
            </div>
            <h4 className="project-title">{p.title}</h4>
            <p className="project-desc">{p.desc}</p>
            <a href={p.link} target="_blank" className="project-link">
              {t("open")}
            </a>
          </div>
        ))}
      </div>
      {/* fullscreen overlay */}
      {fullscreen && (
        <div
          className={`fullscreen-overlay ${fullscreen ? "active" : ""}`}
          onClick={() => setFullscreen(null)}
        >
          <iframe src={fullscreen} title="Fullscreen Project" loading="lazy" />
          <button className="close-btn" onClick={() => setFullscreen(null)}>
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
