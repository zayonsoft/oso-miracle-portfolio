import { useState } from "react";
import ProjectDescriptionTextArea from "./ProjectDescriptionTextArea";
import ProjectProgressTextArea from "./ProjectProgressTextArea";

export default function SpecificServices(props) {
  const [projectDescription, setProjectDescription] = useState({
    value: "",
    focused: false,
    placeholder: "Enter your project description...",
  });
  const [projectProgress, setProjectProgress] = useState({
    value: "",
    focused: false,
    placeholder: "Enter Your Current Progress of Your Project",
  });

  function updateProgress(newValue) {
    setProjectProgress({ ...projectProgress, value: newValue, focused: true });
  }

  function updateDescription(newValue) {
    setProjectDescription({
      ...projectDescription,
      value: newValue,
      focused: true,
    });
  }

  return (
    <section className="grid gap-10 font-inter w-[90%] box-border max-w-[800px] bg-red p-2 m-auto">
      <h1 className="text-center font-medium text-3xl">
        What specific services or products do you build? <br />
        Can I take a peek?
      </h1>
      <div className="grid gap-3 max-w-[500px] w-[90%] m-auto">
        <ProjectDescriptionTextArea
          value={projectDescription.value}
          placeholder={projectDescription.placeholder}
          focused={projectDescription.focused}
          onchange={updateDescription}
        />
        <ProjectProgressTextArea
          value={projectProgress.value}
          placeholder={projectProgress.placeholder}
          focused={projectProgress.focused}
          onchange={updateProgress}
        />
      </div>
    </section>
  );
}
