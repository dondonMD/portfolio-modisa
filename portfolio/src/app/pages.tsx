import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";

export default function Pages() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
