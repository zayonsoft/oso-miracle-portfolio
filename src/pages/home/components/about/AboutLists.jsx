import AboutList from "./AboutList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function AboutLists() {
  let aboutList = [
    {
      text: "Created user-friendly interfaces that streamline the user experience.",
    },
    {
      text: "Conducted usability testing, optimized user interface efficiency.",
    },
    {
      text: "Developed wireframes and prototypes for improved user interaction.",
    },
    {
      text: "Presented design proposals to clients, secured approval swiftly.",
    },
    {
      text: "Coordinated with marketing teams and ensured brand consistency throughout designs.",
    },
    {
      text: "Researched target audience needs and incorporated findings into UI and UX designs effectively.",
    },
    {
      text: "Participated in regular team reviews and critiques of ongoing projects, increasing overall project effectiveness.",
    },
    {
      text: "Translated project requirements into forward-thinking visual designs.",
    },
    {
      text: "Provided creative solutions to complex UX problems, improved customer satisfaction levels.",
    },
    {
      text: "Incorporate feedback from users into design improvements regularly.",
    },
    {
      text: "Managed multiple projects simultaneously whilst maintaining high quality standards in output.",
    },
    {
      text: "Delivered projects within deadlines without compromising on aesthetic or functional aspects of design.",
    },
    {
      text: "Collaborated with the development team for seamless integration of design elements.",
    },
    {
      text: "Enhanced overall aesthetics with the implementation of modern UI and UX designs.",
    },
    {
      text: "Led brainstorming sessions to develop innovative design concepts.",
    },
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [aboutMe, setAboutMe] = useState(aboutList);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="font-inter grid gap-2.5"
    >
      {aboutMe.map((list) => (
        <AboutList key={uuidv4()} text={list.text} variant={childVariants} />
      ))}
    </motion.div>
  );
}
