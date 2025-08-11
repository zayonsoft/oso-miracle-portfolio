import AboutMe from "./components/AboutMe";
import CoreDesignSkills from "./components/CoreDesignSkills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyWorksSection from "./components/MyWorksSection";
import NeedADesignPatner from "./components/NeedADesignPatner";
import ServiceSection from "./components/ServiceSection";
import SkillSection from "./components/SkillSection";
import TestimonySection from "./components/TestimonySection";
import { useContext } from "react";

import { NavHeightContext } from "../../contexts/NavHeightContext";

export default function Home() {
  const { navHeight } = useContext(NavHeightContext);
  return (
    <>
      <section className="home-overlay">
        <Hero scrollMargin={`${navHeight}px`} />
        <AboutMe scrollMargin={`${navHeight}px`} />
        <SkillSection scrollMargin={`${navHeight}px`} />
        <CoreDesignSkills scrollMargin={`${navHeight}px`} />
        <ServiceSection scrollMargin={`${navHeight}px`} />
        <MyWorksSection scrollMargin={`${navHeight}px`} />
        <TestimonySection scrollMargin={`${navHeight}px`} />
        <NeedADesignPatner scrollMargin={`${navHeight}px`} />
        <Footer scrollMargin={`${navHeight}px`} />
      </section>
    </>
  );
}
