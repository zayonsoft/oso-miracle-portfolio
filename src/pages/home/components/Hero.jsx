import "../styles/hero/hero.css";
import { Link } from "react-router-dom";
import Nav from "./hero/Nav";
import Main from "./hero/Main";

export default function Hero() {
  return (
    <section className="grid hero-cover min-h-screen content-start relative">
      <Nav />
      <Main />
    </section>
  );
}
