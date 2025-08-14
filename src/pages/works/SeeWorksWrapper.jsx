import Footer from "../home/components/Footer";
import Hero from "./hero/Hero";
import ShowWorks from "./ShowWorks";

export default function SeeWorksWrapper() {
  return (
    <section className="home-overlay">
      <Hero />
      <ShowWorks />
      <Footer />
    </section>
  );
}
