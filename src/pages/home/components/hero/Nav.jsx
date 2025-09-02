import Logo from "/logo.svg";
import { Menu, X } from "lucide-react";
import List from "./List";
import { useRef, useState, useEffect, useContext } from "react";

import { v4 as uuidv4 } from "uuid";
import { NavHeightContext } from "../../../../contexts/NavHeightContext";
import { Link, useNavigate } from "react-router-dom";

const LogoImage = (
  <img
    className="cursor-pointer w-[130px] max-[805px]:w-[100px]"
    src={Logo}
    alt=""
  />
);
export { LogoImage };

const navLinks = [
  { name: "Home", path: "/", toTop: true },
  { name: "About Me", path: "/#about", toTop: false },
  { name: "Skills", path: "/#skills", toTop: false },
  { name: "Services", path: "/#services", toTop: false },
  { name: "My Work", path: "/#my_work", toTop: false },
  { name: "Contact Me", path: "/contact", toTop: false },
];
export { navLinks };
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const [linkList] = useState(navLinks);
  const [navOpen, setNavOpen] = useState(false);
  const [mobileNavLinks, setMobileNavLinks] = useState("0px");
  const { setNavHeight } = useContext(NavHeightContext);

  const listRef = useRef(null);
  const listCoverRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 350);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let navLinkHeight = listRef.current.getBoundingClientRect().height;

    if (navOpen) setMobileNavLinks(`${navLinkHeight}px`);
    else setMobileNavLinks(`${0}px`);

    let navBar = navRef.current;
    let navBarHeight = navBar.getBoundingClientRect().height;

    window.addEventListener("scroll", () => {
      setNavOpen(false);
      setNavHeight(navBarHeight);
    });
  }, [navOpen]);

  return (
    <>
      <nav
        style={{
          background: scrolled ? "#01071aed" : "",
        }}
        ref={navRef}
        className={
          scrolled
            ? `fixed flex z-30 px-[75px] max-[830px]:px-[50px] py-[20px] max-[805px]:px-[40px] right-0 left-0 content-center  justify-between max-[700px]:grid max-[700px]:grid-cols-7 max-[700px]:px-[30px] max-[700px]:bg-[#01071ad7] max-[700px]:z-[100000] max-[700px]:fixed`
            : `relative flex z-30 px-[75px] max-[830px]:px-[50px] py-[20px] max-[805px]:px-[40px] right-0 left-0 content-center  justify-between max-[700px]:grid max-[700px]:grid-cols-7 max-[700px]:px-[30px] max-[700px]:bg-[#01071a91] max-[700px]:z-[100000] max-[700px]:fixed`
        }
      >
        <div className="logo col-span-6">
          {" "}
          <Link style={{ outline: "none" }} to={"/"}>
            {" "}
            {LogoImage}
          </Link>{" "}
        </div>
        {/* The DIV that contains the Menu Icon */}
        <div className="content-center hidden max-[700px]:block justify-self-end">
          <button
            className="cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <X size={28} color="white" />
            ) : (
              <Menu size={28} color="white" />
            )}
          </button>
        </div>
        {/*  */}

        {/* NavLinks Controller */}
        <div
          ref={listCoverRef}
          style={{ height: mobileNavLinks }}
          className={`grid content-center min-[701px]:!h-auto transition-all nav-links w-[60%] max-[900px]:w-[65%] max-[830px]:w-[73%] max-[700px]:col-span-7 max-[700px]:w-full max-[700px]:h-0 max-[700px]:overflow-hidden`}
        >
          {/* The Navlinks list */}
          <ul
            ref={listRef}
            className="flex justify-between content-center font-medium font-montserrat max-[830px]:gap-1 max-[700px]:grid max-[700px]:gap-2 max-[700px]:p-1 max-[700px]:justify-normal"
          >
            {linkList.map((item) => (
              <List
                key={uuidv4()}
                name={item.name}
                isNav={true}
                navPath={item.path}
                toTop={item.toTop}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
