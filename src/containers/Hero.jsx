import React from "react";
import person from "@images/me.jpeg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Hero() {
  return (
    <section id='hero' className="hero">
      <h1 className="hero__title">WEB PORTFOLIO</h1>
      <div className="hero-circle">
        <img className="hero-circle__img" src={person} alt="profile photo" />
      </div>
      <div className="hero__subtitle">
        <h2 className="hero__title--sub">RODRIGO DÍAZ</h2>
        <p className="hero__title--par">FULLSTACK DEVELOPER</p>
      </div>
      <div className="hero__icon">
        <a href="#Projects">
          <ExpandMoreIcon
            className="hero__icon--svg"
            sx={{ fontSize: "150px" }}
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
