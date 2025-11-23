import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MatrixBackground from "./components/MatrixAnim";
import Game from "./components/Game/Tic";
import "./App.css";
import { useState } from "react";
import BottomNav from "./components/BottomNavbar/BottomNavbar";
import GravityFall from "./components/Gravity/Gravity";
import { useTranslation } from "react-i18next";

// import JokeButton from "./components/Joke/Joke";
// import CameraButton from "./components/Camera/Camera";

function App() {
  const [showGame, setShowGame] = useState(false);
  const { i18n } = useTranslation();

  const toggleGame = () => {
    setShowGame(!showGame);
  };

  return (
    <>
      <MatrixBackground />
      <button
        className="langBut"
        onClick={() => {
          i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
        }}
      >
        {i18n.language.toUpperCase()}
      </button>
      <Header />
      <Hero />
      <button className="gamebut" onClick={toggleGame}>
        {showGame ? "Hide game" : "Open game"}
      </button>
      {showGame && <Game />}
      <About />
      <Projects />
      <Contact />
      {/*<JokeButton /> на потом*/}
      {/*<CameraButton /> на потом */}
      {/* <GravityFall /> */}

      <Footer />
      <BottomNav />
    </>
  );
}

export default App;
