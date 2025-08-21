import HelloImage from "../../styles/hero/hello.svg";
import HeroUiImage from "../../styles/hero/ui_ux_image.svg";
import HeroUiImageFrame from "../../styles/hero/hero_image_frame.svg";
import HeroImageShadow from "./HeroImageShadow";
import TinyFilledBox from "./TinyFilledBox";
import TinyOpaqueBox from "./TinyBorderedBox";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
export default function Main() {
  const navigate = useNavigate();
  function navigateToLink(e) {
    e.preventDefault();
    let url = e.target.getAttribute("href");
    navigate(url);
  }
  return (
    <>
      <div className="absolute max-[700px]:relative -translate-y-1/2 top-1/2 left-0 right-0 z-10">
        <HeroImageShadow />
        <TinyFilledBox right={"10%"} top={"5%"} width={"60px"} />
        <TinyOpaqueBox right={"25%"} top={"5%"} width={"50px"} />
        <TinyOpaqueBox right={"45%"} top={"60%"} width={"95px"} />
        <TinyFilledBox right={"12%"} top={"28%"} width={"75px"} />
        <div className="hello absolute top-[50px] left-[100px] z-[1] max-[830px]:left-[60px] max-[830px]:top-[35px] max-[700px]:left-0 max-[700px]:top-[90px] max-[700px]:right-0">
          <img
            src={HelloImage}
            className="w-[780px] max-[830px]:w-[500px] block max-[700px]:m-auto"
          />
        </div>
        <div className="relative flex z-10 max-[700px]:grid max-[700px]:mt-20">
          {/* Hero Text Div Controller */}
          <div className="relative z-10 left w-[48%] h-[75vh] px-[75px] max-[830px]:px-[50px] max-[700px]:px-[30px]  max-[700px]:w-full max-[700px]:order-2 max-[700px]:h-auto max-[700px]:py-20">
            <div className="relative grid gap-1 box-border w-[350px] max-[830px]:w-[300px] py-[25px] text-[15px] -translate-y-1/2 top-[55%] max-[700px]:w-full max-[700px]:top-0 max-[700px]:-translate-y-0 max-[700px]:py-1">
              <p className="text-white font-montserrat font-[400] text-[13px]">
                UI/UX Designer
              </p>
              <p className="text-[38px] text-white font-montserrat font-bold">
                <ReactTyped
                  strings={[
                    "Hi There, I'm<br/> <span class='text-[#175DC2]'>Miracle John</span>",
                  ]}
                  typeSpeed={200}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </p>
              <p className="text-white font-montserrat font-light text-[13px]">
                Welcome to my portfolio of captivating User Interface and
                Experience (UI/UX) Design. Explore my work and let's create
                something extraordinary together.
              </p>

              <div className="flex gap-2 mt-7">
                <a
                  onClick={(e) => navigateToLink(e)}
                  className="bg-[#175DC2] text-white text-[11px] font-montserrat font-semibold p-[6px] py-[9px] w-[120px] rounded-full block text-center hover:bg-[#175DC299]"
                  href="/contact"
                >
                  {" "}
                  Hire Me{" "}
                </a>
                <a
                  onClick={(e) => navigateToLink(e)}
                  className="bg-white text-[#1F1F1F] text-[11px] font-montserrat font-bold px-[6px] py-[9px] w-[120px] rounded-full block text-center hover:bg-[#FFFFFF99]"
                  href="/resume"
                >
                  {" "}
                  My Resume{" "}
                </a>
              </div>
            </div>{" "}
            {/* div.content-box */}
          </div>
          {/* THE HERO IMAGE CONTROLLER DIV */}
          <div className="right w-[52%] h-[75vh] max-[700px]:order-1 max-[700px]:w-full max-[700px]:h-auto">
            <div className="relative max-w-[450px]  w-[90%] h-full m-auto">
              <img
                className="absolute  max-w-full pt-6 max-[830px]:pt-8 max-[700px]:pt-0 max-[700px]:relative"
                src={HeroUiImage}
                alt=""
              />
              <img
                className="absolute top-4.5 max-w-full pt-6  max-[830px]:pt-8 max-[700px]:pt-0"
                src={HeroUiImageFrame}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
