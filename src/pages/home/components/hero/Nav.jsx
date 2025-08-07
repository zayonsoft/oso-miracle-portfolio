import Logo from "../../styles/hero/logo.svg";
import { Menu, X } from "lucide-react";
import List from "./List";
import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LogoImage = <img className="w-[130px]" src={Logo} alt="" />;
export { LogoImage };

const navLinks = [
  { name: "Home" },
  { name: "About Me" },
  { name: "Skills" },
  { name: "Services" },
  { name: "My Work" },
  { name: "Contact Me" },
];
export { navLinks };
export default function Nav() {
  const [linkList, setLinkList] = useState(navLinks);
  const [navOpen, setNavOpen] = useState(false);
  const [mobileNavLinks, setMobileNavLinks] = useState("0px");

  const listRef = useRef(null);
  const listCoverRef = useRef(null);

  useEffect(() => {
    let navLinkHeight = listRef.current.getBoundingClientRect().height;

    if (navOpen) setMobileNavLinks(`${navLinkHeight}px`);
    else setMobileNavLinks(`${0}px`);
  }, [navOpen]);

  return (
    <>
      <nav className="relative flex z-30 px-[75px] max-[830px]:px-[50px] py-[20px] content-center  justify-between max-[700px]:grid max-[700px]:grid-cols-7 max-[700px]:px-[30px] max-[700px]:bg-[#01071ad8] max-[700px]:z-20">
        <div className="logo col-span-6">{LogoImage}</div>
        {/* The DIV that contains the Menu Icon */}
        <div className="hidden max-[700px]:block justify-self-end">
          <button onClick={() => setNavOpen(!navOpen)}>
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
          className={`grid content-center min-[701px]:!h-auto transition-all nav-links w-[60%]  max-[830px]:w-[70%] max-[700px]:col-span-7 max-[700px]:w-full max-[700px]:h-0 max-[700px]:overflow-hidden`}
        >
          {/* The Navlinks list */}
          <ul
            ref={listRef}
            className="flex justify-between content-center font-medium font-montserrat max-[830px]:gap-1.5 max-[700px]:grid max-[700px]:gap-2 max-[700px]:p-1 max-[700px]:justify-normal"
          >
            {linkList.map((item) => (
              <List key={uuidv4()} name={item.name} isNav={true} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
