import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skill(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.0, delay: 0.5 }}
      className="col-span-1"
    >
      <div className="grid gap-2">
        <p className="text-sm font-montserrat font-bold">{props.name}</p>
        <div className="grid grid-cols-10 content-center">
          <div className="col-span-9 relative">
            <div className="absolute -translate-y-1/2 top-1/2 bg-[#C2C2C2] w-[100%] h-[3px]"></div>
            <div
              style={{ width: props.percentage }}
              className="absolute -translate-y-1/2 top-1/2 bg-[#1A73E8] h-[3px]"
            ></div>
          </div>
          <div className="text-center col-span-1 grid content-center">
            <p className="font-bold text-sm font-montserrat self-center">
              {props.percentage}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
