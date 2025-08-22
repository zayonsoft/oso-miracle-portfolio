import { useNavigate } from "react-router-dom";

export default function NeedADesignPatner(props) {
  const navigate = useNavigate();
  function navigateToLink(e) {
    e.preventDefault();
    let url = e.target.getAttribute("href");
    navigate(url);
  }
  return (
    <section
      style={{ scrollMarginTop: props.scrollMargin }}
      id="contact"
      className="grid gap-4 bg-[#01071A] px-5 py-7"
    >
      <div className="w-[90%] max-w-[650px] m-auto font-semibold">
        <h1 className="text-white font-montserrat  text-3xl text-center leading-12">
          Looking for a Design Partner? <br /> Let’s Get Started
        </h1>
      </div>
      <div className="flex m-auto gap-2 mt-7 items-center max-[320px]:grid">
        <a
          onClick={(e) => navigateToLink(e)}
          className="bg-[#175DC2] text-white text-[11px] font-montserrat font-semibold p-[6px] py-[9px] w-[120px] rounded-full block text-center transition ease-in-out duration-900 hover:bg-[#175DC299]"
          href="/contact"
        >
          {" "}
          Hire Me{" "}
        </a>
        <a
          onClick={(e) => navigateToLink(e)}
          className="bg-white text-[#1F1F1F] text-[11px] font-montserrat font-bold px-[6px] py-[9px] w-[120px] transition ease-in-out duration-900 rounded-full block text-center hover:bg-[#FFFFFF99]"
          href="/see_my_works"
        >
          {" "}
          See My Work{" "}
        </a>
      </div>
      <div className="m-auto flex gap-2 items-center flex-wrap ">
        <hr className="block border-0 w-7 h-[1px] bg-white rounded-sm max-[400px]:w-4 " />
        <p className="text-white font-inter text-sm font-light max-[400px]:text-xs">
          Available for new projects
        </p>
        <hr className="block border-0 w-7 h-[1px] bg-white rounded-sm max-[400px]:w-4" />
      </div>
    </section>
  );
}
