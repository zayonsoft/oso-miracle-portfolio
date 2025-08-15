import ContactFormSection from "./ContactFormSection";
import Hero from "./hero/Hero";
import Footer from "../home/components/Footer";
export default function ContactWrapper(props) {
  return (
    <section className="home-overlay">
      <Hero />
      <ContactFormSection />
      <Footer />
    </section>
  );
}
