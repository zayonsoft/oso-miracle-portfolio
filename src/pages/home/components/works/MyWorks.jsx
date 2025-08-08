import Work from "./Work";
import { useState } from "react";

import { AllProjectsData } from "../../../projects/data/AllProjectsData";
import { v4 as uuidv4 } from "uuid";

export default function MyWorks() {
  let projectList = AllProjectsData;

  const [projects, setProjects] = useState(projectList);
  return (
    <section className="grid gap-10">
      {projects.map((project) => (
        <Work
          key={uuidv4()}
          id={project.id}
          name={project.projectName}
          image={project.previewImage}
          details={project.previewDetails}
          terms={project.overviewIndustries}
        />
      ))}
    </section>
  );
}
