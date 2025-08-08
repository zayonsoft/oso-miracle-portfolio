import ScopeIcon from "./styles/scope_icon.svg";
import { useContext } from "react";
import { ProjectContext } from "./contexts/ProjectContext";

export default function Scope() {
  const { currentProject } = useContext(ProjectContext);
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">
          Product Scope
        </h1>
        <p className="text-left font-inter text-[13px] font-normal">
          {currentProject.scopeText}
        </p>
      </div>
      <div className="grid grid-cols-2 font-inter text-[13px] gap-10 content-center max-[650px]:grid-cols-1">
        {currentProject.scopeParagraphs?.map((pText) => (
          <div className="grid gap-4">
            <span>
              <img className="w-8" src={ScopeIcon} alt="" />
            </span>
            <p>{pText}</p>
          </div>
        ))}
      </div>

      {/* Div Containing Scope Images 1 and 2 */}
      <div className="grid gap-10">
        <div>
          <img
            className="m-auto max-w-full"
            src={currentProject.scopeImage1}
            alt=""
          />
        </div>
        <div>
          <img
            className="m-auto max-w-full"
            src={currentProject.scopeImage2}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
