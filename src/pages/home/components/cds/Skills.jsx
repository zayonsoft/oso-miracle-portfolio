import Skill from "./Skill";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";

export default function Skills() {
  let skillList = [
    { name: "Interaction Design", percentage: "85%" },
    { name: "Figma", percentage: "95%" },
    { name: "Usability Testing", percentage: "90%" },
    { name: "Prototyping", percentage: "95%" },
    { name: "User Research", percentage: "95%" },
    { name: "Information Architecture", percentage: "90%" },
  ];
  const [skills, setSkills] = useState(skillList);
  return (
    <section className="grid gap-3 py-4 grid-cols-2 gap-y-6 gap-x-28 max-[810px]:gap-x-20 max-[601px]:grid-cols-1">
      {skills.map((skill) => (
        <Skill key={uuidv4()} name={skill.name} percentage={skill.percentage} />
      ))}
    </section>
  );
}
