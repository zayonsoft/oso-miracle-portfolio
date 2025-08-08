import { useContext } from "react";
import { ProjectContext } from "./contexts/ProjectContext";

export default function Conclusion() {
  const { currentProject } = useContext(ProjectContext);
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">
          Conclusion
        </h1>
        {currentProject.conclusionParagrahs?.map((pText) => (
          <p className="text-left font-inter text-[13px] font-normal">
            {pText}
          </p>
        ))}
      </div>
    </section>
  );
}
