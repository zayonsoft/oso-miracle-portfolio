import { useNavigate } from "react-router-dom";
import { HomeLinkContext } from "../../../../contexts/HomeLinkContext";
import { useContext } from "react";

export default function List(props) {
  const { homeLinkClicked, setHomeLinkClicked } = useContext(HomeLinkContext);
  const navigate = useNavigate();
  function navigateToSection(e) {
    e.preventDefault();
    let url = props.navPath;

    if (props.toTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setHomeLinkClicked(true);
      navigate(url);
    } else {
      navigate(url);
    }
  }

  return (
    <>
      <li>
        <a
          onClick={(e) => navigateToSection(e)}
          className={
            props.isNav
              ? "cursor-pointer text-white hover:text-[#175DC2] font-montserrat transition ease-in-out duration-900 text-[15px] max-[805px]:text-[13px] max-[700px]:p-2 max-[700px]:block max-[700px]:w-full max-[700px]:border-b-[#1b1f2c] max-[700px]:border-b max-[700px]:hover:bg-white max-[700px]:hover:text-[#040e2e]"
              : "cursor-pointer text-white hover:text-[#175DC2] font-montserrat text-[15px] max-[805px]:text-[13px] transition ease-in-out duration-800"
          }
          href={props.navPath}
        >
          {props.name}
        </a>
      </li>
    </>
  );
}
