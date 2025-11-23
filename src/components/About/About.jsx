import "./About.css";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section">
      <h3 className="about-title">
        About me{" "}
        <span
          style={{
            color: "red",
            cursor: "none",
            border: "1px, solid, red",
            backdropFilter: "blur(30px)",
            padding: "5px",
          }}
        >
          .#block#
        </span>
      </h3>
      <p className="about-text">
        I’m a passionate{" "}
        <span
          style={{
            color: "red",
          }}
        >
          software developer{" "}
        </span>
        focused on building efficient, user-friendly, and scalable web
        applications. I work with both front-end and back-end technologies,
        including{" "}
        <span
          style={{
            color: "red",
          }}
        >
          React, JavaScript, C#, and ASP.NET
        </span>
        , and enjoy bringing ideas to life through clean and functional code. I
        love solving complex problems, learning new tools, and exploring how
        technology can make everyday tasks simpler and smarter. My goal is to
        create software that not only works well but also feels natural and
        intuitive for users. Beyond development, I value clear communication,
        teamwork, and continuous growth. I’m always open to new challenges and
        opportunities to contribute to meaningful projects that have real-world
        impact.
      </p>
      <a
        href={`${import.meta.env.BASE_URL}CV.pdf`}
        download="CV(Valentin).pdf"
        className="download-btn"
      >
        {t("downloadCV")}
      </a>
    </section>
  );
}
