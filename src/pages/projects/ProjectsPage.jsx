import ProjectProvider from "./contexts/ProjectProvider";
import ProjectWrapper from "./ProjectsWrapper";

export default function ProjectsPage() {
  return (
    <ProjectProvider>
      <ProjectWrapper />
    </ProjectProvider>
  );
}
