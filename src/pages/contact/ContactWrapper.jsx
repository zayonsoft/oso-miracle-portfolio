import ContactFormSection from "./ContactFormSection";
import Hero from "./hero/Hero";
export default function ContactWrapper(props) {
  return (
    <section className="home-overlay">
      <Hero />
      <ContactFormSection />
      {/* <Footer /> */}
    </section>
  );
}
