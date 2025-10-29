import React, { useState } from "react";
import "./Gravity.css";

export default function GravityFall() {
  const [fall, setFall] = useState(false);

  const handleFall = () => {
    setFall(true);
    // Сбрасываем, чтобы можно было нажать снова
    setTimeout(() => setFall(false), 1500);
  };

  return (
    <div className="gravity-container">
      <div className={`item ${fall ? "fall" : ""}`}></div>
      <div className={`item ${fall ? "fall" : ""}`}></div>
      <div className={`item ${fall ? "fall" : ""}`}></div>

      <button className="gravbut" onClick={handleFall}>
        Activate gravity
      </button>
    </div>
  );
}
