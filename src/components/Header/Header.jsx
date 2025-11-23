// import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
export default function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header">
        <h1 className="myname">
          Valentin <br />
          Sugai
        </h1>
        <nav className="nav">
          <a href="#about"> {t("about")}</a>

          <a href="#projects"> {t("projects")}</a>

          <a href="#contact"> {t("contact")}</a>
        </nav>
      </div>
    </header>
  );
}
