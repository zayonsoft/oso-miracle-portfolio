import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function VisualDesignImage({ src }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.img
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="m-auto"
      src={src}
      alt=""
    />
  );
}
