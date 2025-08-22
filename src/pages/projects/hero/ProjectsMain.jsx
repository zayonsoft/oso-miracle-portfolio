import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

export default function ProjectsMain() {
  const { currentProject, setCurrentProject } = useContext(ProjectContext);
  return (
    <>
      <main>
        <div className="grid gap-12 content-start px-[75px] py-7 max-[830px]:px-[50px] max-[700px]:px-[30px]">
          <h1 className="text-white font-montserrat font-semibold text-2xl">
            {currentProject.projectName}
          </h1>
          {/* Where the Image Will Sit */}
          <div className="relative max-h-full">
            <img
              className="max-w-full block m-auto height-auto max-h-[100%]"
              src={currentProject.heroImage}
              alt=""
            />
          </div>
          <div className="flex justify-between font-inter text-[#FFFFFFCC]">
            <p className="text-sm">Designed {currentProject.designDate}</p>
            <p className="text-sm">RIVERT DESIGN</p>
          </div>
        </div>
      </main>
    </>
  );
}
