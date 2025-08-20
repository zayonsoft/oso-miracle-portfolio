import { useContext } from "react";
import { ProjectContext } from "./contexts/ProjectContext";
import { v4 } from "uuid";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ChallengeSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const { currentProject } = useContext(ProjectContext);
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">Challenge</h1>
        {currentProject.challengeParagrahs?.map((pText) => (
          <p
            key={v4()}
            className="text-left font-inter text-[13px] font-normal"
          >
            {pText}
          </p>
        ))}
      </div>
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">Solution</h1>
        {currentProject.solutionParagraphs?.map((pText) => (
          <p
            key={v4()}
            className="text-left font-inter text-[13px] font-normal"
          >
            {pText}
          </p>
        ))}
      </div>

      {/* Typography Section */}
      <div>
        <motion.img
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="m-auto "
          src={currentProject.typographyImage}
          alt=""
        />
      </div>
    </section>
  );
}
