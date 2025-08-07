import ListButtonIcon from "./ListButtonIcon";
import { motion } from "framer-motion";

export default function AboutList(props) {
  return (
    <motion.p variants={props.variant} className="flex gap-0.5">
      <span>
        <ListButtonIcon />
      </span>
      <span>{props.text}</span>
    </motion.p>
  );
}
