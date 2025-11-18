import ScopeIcon from "./styles/scope_icon.svg";
import { useContext } from "react";
import { ProjectContext } from "./contexts/ProjectContext";
import { v4 } from "uuid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Scope() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });
  const isInView2 = useInView(ref2, { once: false });
  const { currentProject } = useContext(ProjectContext);
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid px-10 gap-5 m-auto w-full">
        <h1 className="font-inter text-3xl font-normal text-left">
          Product Scope
        </h1>
        <p className="text-left font-inter text-[13px] font-normal">
          {currentProject.scopeText}
        </p>
      </div>
      <div className="grid grid-cols-2 px-10 font-inter text-[13px] gap-10 content-center max-[650px]:grid-cols-1">
        {currentProject.scopeParagraphs?.map((pText) => (
          <div key={v4()} className="grid gap-4">
            <span>
              <img
                className="w-8 select-none"
                src={ScopeIcon}
                alt="Scope Icons"
                draggable={false}
              />
            </span>
            <p>{pText}</p>
          </div>
        ))}
      </div>

      {/* Div Containing Scope Images 1 and 2 */}
      <div className="grid gap-10">
        <div>
          <motion.img
            ref={ref1}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="m-auto w-full select-none"
            src={currentProject.scopeImage1}
            alt="Scope Image1"
            draggable={false}
          />
        </div>
        <div>
          <motion.img
            ref={ref2}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="m-auto w-full select-none"
            src={currentProject.scopeImage2}
            alt="Scope Image2"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
