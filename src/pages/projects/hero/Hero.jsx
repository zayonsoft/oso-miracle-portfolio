import Nav from "../../home/components/hero/Nav";
import ProjectsMain from "./ProjectsMain";

export default function Hero() {
  return (
    <section className="grid hero-cover min-h-screen content-start relative">
      <Nav />
      <ProjectsMain />
    </section>
  );
}
