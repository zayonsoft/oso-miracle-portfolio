import { LogoImage } from "./hero/Nav";
import { navLinks } from "./hero/Nav";
import { v4 } from "uuid";
import List from "./hero/List";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram, SiWhatsapp, SiX } from "react-icons/si";
import { ArrowUp } from "lucide-react";
import "../styles/footer/footer.css";
import { useLocation, useNavigate } from "react-router-dom";

import { HomeLinkContext } from "../../../contexts/HomeLinkContext";
import { useContext } from "react";

export default function Footer() {
  const { setHomeLinkClicked } = useContext(HomeLinkContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  function scrollToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHomeLinkClicked(true);
    navigate(pathname);
  }

  let neededIcons = [
    <FaFacebookF key={v4()} />,
    <SiInstagram key={v4()} />,
    <SiX key={v4()} />,
    <SiWhatsapp key={v4()} />,
  ];

  return (
    <footer className="grid bg-transparent w-full">
      <div className="p-4">
        <div className="grid p-6">
          <div className="justify-self-center p-10">{LogoImage}</div>
        </div>
        <ul className="flex  gap-3 flex-wrap justify-evenly content-center text-white font-medium font-montserrat w-11/12 max-w-[700px] m-auto ">
          {navLinks.map((link) => (
            <List
              key={v4()}
              navPath={link.path}
              name={link.name}
              toTop={link.toTop}
            />
          ))}
        </ul>
      </div>
      <div className="flex text-white gap-5 m-auto p-11">
        {neededIcons.map((icon) => (
          <p key={v4()}>
            <a
              className="bg-white p-1.5 block text-black rounded-full border-[1px] border-white hover:bg-black hover:text-white"
              href=""
            >
              {" "}
              {icon}{" "}
            </a>
          </p>
        ))}
      </div>
      <section className="grid content-center relative bg-[#121212] p-4 font-poppins font-normal text-white text-center">
        <div className="text-sm">
          © 2025 <span className="font-semibold text-[#175DC2]">RIVERT</span>{" "}
          DESIGN All Rights Reserved , Inc.
        </div>
        <div className="absolute justify-self-end self-center right-4">
          <div className="gradient-border rounded-full">
            <button
              onClick={(e) => scrollToTop(e)}
              className="text-white rounded-full w-8 h-8 text-center grid justify-center content-center bg-[#121212] cursor-pointer hover:bg-transparent"
              type="button"
            >
              {" "}
              <ArrowUp size={16} />{" "}
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}
