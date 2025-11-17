import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Service(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, x: 100, y: 90 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 1.0, delay: 0.5 }}
      className="grid gap-1.5 p-1 max-w-[350px] m-auto"
    >
      <div>
        <img
          className="select-none"
          src={props.image}
          alt=""
          draggable={false}
        />
      </div>
      <p className="font-bold text-lg text-[#448EF9]">{props.name}</p>
      <p className="font-normal text-sm">{props.details}</p>
    </motion.div>
  );
}
