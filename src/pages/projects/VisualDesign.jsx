import VisualDesignImg1 from "./styles/propifix/vd1.png";
import VisualDesignImg2 from "./styles/propifix/vd2.png";
import VisualDesignImg3 from "./styles/propifix/vd3.png";
import VisualDesignImg4L from "./styles/propifix/vd4_left.png";
import VisualDesignImg4R from "./styles/propifix/vd4_right.png";

export default function VisualDesign() {
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">
          Visual Design
        </h1>
        <p className="text-left font-inter text-[13px] font-normal">
          The visual design of Propifix centers on clean layouts, warm neutral
          tones, and trust-enhancing elements to reflect the credibility needed
          in property dealings. A balance of modern typography and intuitive
          navigation ensures users feel confident while browsing listings or
          booking inspections. Every visual detail - from iconography to button
          states - was crafted to mirror transparency, professionalism, and ease
          of transaction in the real estate space.
        </p>
      </div>
      <div>
        <img className="m-auto" src={VisualDesignImg1} alt="" />
      </div>
      <div>
        <img className="m-auto" src={VisualDesignImg2} alt="" />
      </div>
      <div>
        <img className="m-auto" src={VisualDesignImg3} alt="" />
      </div>
      <div className="flex gap-10">
        <div>
          <img className="m-auto" src={VisualDesignImg4L} alt="" />
        </div>
        <div>
          <img className="m-auto" src={VisualDesignImg4R} alt="" />
        </div>
      </div>
    </section>
  );
}
