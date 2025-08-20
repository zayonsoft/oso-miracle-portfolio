import { useContext } from "react";
import { ProjectContext } from "./contexts/ProjectContext";
import { v4 } from "uuid";
import VisualDesignImage from "./VisualDesignImage";

export default function VisualDesign() {
  const { currentProject } = useContext(ProjectContext);
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
        <VisualDesignImage src={currentProject.vdImage1} />
      </div>
      <div>
        <VisualDesignImage src={currentProject.vdImage2} />
      </div>
      <div>
        <VisualDesignImage src={currentProject.vdImage3} />
      </div>
      {currentProject.vdImage4?.length > 1 ? (
        <div className="flex gap-10">
          {currentProject.vdImage4?.map((img) => (
            <div key={v4()}>
              <VisualDesignImage src={img} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {currentProject.vdImage4?.map((img) => (
            <VisualDesignImage key={v4()} src={img} />
          ))}
        </div>
      )}
    </section>
  );
}
