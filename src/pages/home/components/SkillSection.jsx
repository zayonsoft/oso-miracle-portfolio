import SkillImage from "../styles/skill/skill_image.svg";
import "../styles/skill/skills.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillSection(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  return (
    <section
      style={{ scrollMarginTop: props.scrollMargin }}
      id="skills"
      className="grid content-center min-h-screen w-full bg-white"
    >
      <motion.img
        ref={ref}
        initial={{ opacity: 0, x: -70 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.5 }}
        className="max-w-[600px] object-center object-contain w-[100%] block m-auto  max-[601px]:max-w-[380px] skills-bg"
        src={SkillImage}
        alt=""
      />
    </section>
  );
}
