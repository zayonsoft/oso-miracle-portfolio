import FigmaIcon from "./styles/figma_icon.svg";
import { useContext } from "react";
import { ProjectContext } from "./contexts/ProjectContext";
import { v4 } from "uuid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Overview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { currentProject, setCurrentProject } = useContext(ProjectContext);

  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      {" "}
      <div className="px-10 grid gap-5 m-auto w-full">
        <h1 className="font-inter text-3xl font-normal text-left">Overview</h1>

        {currentProject.overviewParagraphs?.map((paragraphText) => (
          <p
            key={v4()}
            className="text-left font-inter text-[13px] font-normal"
          >
            {" "}
            {paragraphText}{" "}
          </p>
        ))}
      </div>{" "}
      <div className="grid gap-5 grid-cols-2 px-10 font-inter max-[700px]:grid-cols-1">
        <div className="grid gap-12 font-inter box-border justify-self-center w-full min-h-[120px] max-w-full p-5 border-[1px] border-[#000000] rounded-4xl">
          <p className="font-normal text-[21px]">Industry</p>

          <p className="text-[12px] flex flex-wrap gap-1 text-black">
            {currentProject.overviewIndustries?.map((industry) => (
              <span
                key={v4()}
                className="inline-block border-[#000000] border-[1px] px-2 py-2 rounded-full"
              >
                {industry}
              </span>
            ))}
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
        <motion.img
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="block m-auto w-full max-h-full rounded-[25px]"
          src={currentProject.overviewImage}
          alt=""
        />
      </div>
    </section>
  );
}
