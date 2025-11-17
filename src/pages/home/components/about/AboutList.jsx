import ListButtonIcon from "./ListButtonIcon";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutList(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex gap-0.5"
    >
      <span>
        <ListButtonIcon />
      </span>
      <span>{props.text}</span>
    </motion.p>
  );
}
