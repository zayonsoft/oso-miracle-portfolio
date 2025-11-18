import Footer from "../home/components/Footer";
import ChallengeSolution from "./ChallengeSolution";
import Conclusion from "./Conclusion";
import Hero from "./hero/Hero";
import Overview from "./Overview";
import Scope from "./Scope";
import VisualDesign from "./VisualDesign";

import { useLocation, useParams } from "react-router-dom";
import { AllProjectsData } from "./data/AllProjectsData";
import { useContext, useEffect } from "react";
import { ProjectContext } from "./contexts/ProjectContext";
import NotFound from "../../NotFound";

import Nav from "../../pages/home/components/hero/Nav";

export default function ProjectWrapper() {
  const { id } = useParams();
  const { currentProject, setCurrentProject } = useContext(ProjectContext);
  useEffect(() => {
    const project = AllProjectsData.find((p) => p.id == id);
    setCurrentProject(project || null);
  }, [id, currentProject, setCurrentProject]);

  if (!currentProject)
    return (
      <div className="bg-[#01071a]">
        <Nav />
        <NotFound />
      </div>
    );
  if (currentProject.id == 0) {
    <div className="w-full h-screen bg-black grid content-center">
      <h1 className="text-white text-center text-4xl font-montserrat">
        Loading...
      </h1>
    </div>;
  }
  return (
    <section className="home-overlay">
      <Hero />
      <Overview />
      <Scope />
      <ChallengeSolution />
      <VisualDesign />
      <Conclusion />
      <Footer />
    </section>
  );
}
