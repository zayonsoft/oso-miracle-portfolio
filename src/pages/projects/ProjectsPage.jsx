import Footer from "../home/components/Footer";
import ChallengeSolution from "./ChallengeSolution";
import Conclusion from "./Conclusion";
import Hero from "./hero/Hero";
import Overview from "./Overview";
import Scope from "./Scope";
import VisualDesign from "./VisualDesign";

export default function ProjectsPage() {
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
