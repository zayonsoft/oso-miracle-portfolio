import ContactFormSection from "./ContactFormSection";
import Hero from "./hero/Hero";
import Footer from "../home/components/Footer";
import ContactFormProvider from "../../contexts/ContactFormProvider";
export default function ContactWrapper(props) {
  return (
    <section className="home-overlay">
      <Hero />
      <ContactFormProvider>
        <ContactFormSection />
      </ContactFormProvider>
      <Footer />
    </section>
  );
}
