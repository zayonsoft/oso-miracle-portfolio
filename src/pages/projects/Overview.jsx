import FigmaIcon from "./styles/propifix/figma_icon.svg";
import OverviewImage from "./styles/propifix/overview.png";

export default function Overview() {
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      {" "}
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">Overview</h1>
        <p className="text-left font-inter text-[13px] font-normal">
          Propifix is a real estate platform created to bring clarity and
          confidence to property transactions. In a market where scams and
          unreliable listings are all too common, Propifix solves this by
          offering only verified property listings, with built-in tools that
          allow users to filter, explore, and connect with real estate agents
          seamlessly. The platform is designed to cater to renters, buyers, and
          real estate agents looking for a more secure and transparent digital
          experience.
        </p>
        <p className="text-left font-inter text-[13px] font-normal">
          My goal with Propifix was to create a trust-driven environment, with
          clean UI flows, simple navigation, and an informative property detail
          system that reduces friction in decision-making. Every screen is
          intentionally structured to prioritize transparency, whether it’s
          through agent profiles, secure booking flows, or streamlined
          inspection scheduling.
        </p>
      </div>{" "}
      <div className="grid gap-5 grid-cols-2 font-inter max-[700px]:grid-cols-1">
        <div className="grid gap-12 font-inter box-border justify-self-center w-full min-h-[120px] max-w-full p-5 border-[1px] border-[#000000] rounded-4xl">
          <p className="font-normal text-[21px]">Industry</p>

          <p className="text-[12px] flex flex-wrap gap-1 text-black">
            <span className="inline-block border-[#000000] border-[1px] px-2 py-2.5 rounded-full">
              Real Estate
            </span>
            <span className="inline-block border-[#000000] border-[1px] px-2 py-2.5 rounded-full">
              Property Management
            </span>
            <span className="inline-block border-[#000000] border-[1px] px-1.5 py-2 rounded-full">
              Listings Platform
            </span>
          </p>
        </div>

        <div className="grid gap-10 font-inter box-border justify-self-center w-full min-h-[120px] max-w-full p-5 border-[1px] border-[#000000] rounded-4xl">
          <p className="font-normal text-[21px]">Technologies used</p>
          <p>
            <span className="inline-block p-1 rounded-full border border-black">
              <img className="w-6" src={FigmaIcon} alt="" />
            </span>
          </p>
        </div>
      </div>
      {/* SECTION FOR THE IMAGE BELOW OVERVIEW */}
      <div className="max-w-full ">
        <img
          className="block m-auto max-w-full max-h-full rounded-[25px]"
          src={OverviewImage}
          alt=""
        />
      </div>
    </section>
  );
}
