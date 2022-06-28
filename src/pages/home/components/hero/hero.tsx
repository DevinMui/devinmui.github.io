import React from "react";
import { ReactComponent as HeroImg } from "./hero.svg";

function Hero() {
  return (
    <section className="hero">
      <HeroImg className="hero-img" />
      <div className="hero-text">
        <h1>Code Monkey</h1>
        <p>Let's Build Cool Things Together</p>
      </div>
    </section>
  );
}

export default Hero;
