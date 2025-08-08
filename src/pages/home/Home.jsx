import AboutMe from "./components/AboutMe";
import CoreDesignSkills from "./components/CoreDesignSkills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyWorksSection from "./components/MyWorksSection";
import NeedADesignPatner from "./components/NeedADesignPatner";
import ServiceSection from "./components/ServiceSection";
import Services from "./components/ServiceSection";
import SkillSection from "./components/SkillSection";
import TestimonySection from "./components/TestimonySection";

import { createContext } from "react";

export default function Home() {
  return (
    <>
      <section className="home-overlay">
        <Hero />
        <AboutMe />
        <SkillSection />
        <CoreDesignSkills />
        <ServiceSection />
        <MyWorksSection />
        <TestimonySection />
        <NeedADesignPatner />
        <Footer />
      </section>
    </>
  );
}
