import { LogoImage } from "./hero/Nav";
import { navLinks } from "./hero/Nav";
import { v4 } from "uuid";
import List from "./hero/List";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram, SiWhatsapp, SiX } from "react-icons/si";
import { ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import "../styles/footer/footer.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { HomeLinkContext } from "../../../contexts/HomeLinkContext";
import { useContext, useEffect, useRef, useState } from "react";
import PoweredByZayonsoft from "../../PoweredByZayonSoft";

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
  const [developerShown, setDeveloperShown] = useState(false);

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
          <div className="justify-self-center p-10">
            <Link style={{ outline: "none" }} to={"/"}>
              {" "}
              {LogoImage}
            </Link>{" "}
          </div>
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
              className="bg-white p-1.5 block text-black transition ease-in-out duration-900 rounded-full border-[1px] border-white hover:bg-black hover:text-white"
              href=""
            >
              {" "}
              {icon}{" "}
            </a>
          </p>
        ))}
      </div>
      <section
        className={
          "grid transition ease-in-out duration-900 content-center relative bg-[#121212] p-2 font-poppins font-normal text-white text-center"
        }
      >
        <div className="max-[450px]:text-[11px]">
          <div className="flex justify-center gap-1 items-center">
            <div className="relative">
              <div
                style={{ transition: "1.5s ease" }}
                className={
                  !developerShown
                    ? "opacity-100 justify-center leading-3.5 flex items-center min-w-52 gap-1 text-sm max-[490px]:grid max-[490px]:gap-0"
                    : "opacity-0 justify-center flex items-center min-w-16 gap-1 text-sm max-[490px]:grid max-[490px]:gap-0"
                }
              >
                <span>
                  <span>© 2025 </span>
                  <span className="font-semibold text-[#175DC2]">
                    RIVERT
                  </span>{" "}
                  DESIGN
                </span>
                <span className="flex items-center gap-1">
                  <span>All Rights Reserved , Inc.</span>
                </span>
              </div>

              <div
                style={{ transition: "0.9s ease" }}
                className={
                  developerShown
                    ? "opacity-100 absolute top-1/2 -translate-y-1/2 left-0 right-0"
                    : "opacity-0 absolute top-1/2 -translate-y-1/2 left-0 right-0"
                }
              >
                <PoweredByZayonsoft shown={developerShown} />
              </div>
            </div>

            <span>
              <button
                onClick={() => {
                  setDeveloperShown(!developerShown);
                }}
                className="outline-none rounded-xl pointer animate-pulse p-1 transition ease-in-out duration-900 hover:bg-[#6060605d]"
              >
                {developerShown ? (
                  <ChevronUp size={15} />
                ) : (
                  <ChevronDown size={15} />
                )}
              </button>
            </span>
          </div>
        </div>

        <div className="absolute justify-self-end self-center right-4">
          <div className="gradient-border animate-pulse rounded-full">
            <button
              onClick={(e) => scrollToTop(e)}
              className="text-white outline-none rounded-full w-8 h-8 text-center grid justify-center content-center bg-[#121212] cursor-pointer hover:bg-transparent"
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
