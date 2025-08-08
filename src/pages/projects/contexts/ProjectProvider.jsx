import { useState } from "react";
import { ProjectContext } from "./ProjectContext";

export default function ProjectProvider({ children }) {
  const [currentProject, setCurrentProject] = useState({
    id: 0,
    name: "Loading...",
  });

  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
