import React, { useEffect } from "react";

import "./about.css";

import Me from "./me";
import Social from "./social";

function About() {
  useEffect(() => {
    document.title = "Devin Mui | About Me";
  });
  return (
    <>
      <Me />
      <Social />
    </>
  );
}

export default About;
