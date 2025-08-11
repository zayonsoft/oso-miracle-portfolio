import { useContext } from "react";
import { ProjectContext } from "./contexts/ProjectContext";
import { v4 } from "uuid";

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
        <img className="m-auto" src={currentProject.vdImage1} alt="" />
      </div>
      <div>
        <img className="m-auto" src={currentProject.vdImage2} alt="" />
      </div>
      <div>
        <img className="m-auto" src={currentProject.vdImage3} alt="" />
      </div>
      {currentProject.vdImage4?.length > 1 ? (
        <div className="flex gap-10">
          {currentProject.vdImage4?.map((img) => (
            <div key={v4()}>
              <img className="m-auto" src={img} alt="" />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {currentProject.vdImage4?.map((img) => (
            <img key={v4()} className="m-auto" src={img} alt="" />
          ))}
        </div>
      )}
    </section>
  );
}
