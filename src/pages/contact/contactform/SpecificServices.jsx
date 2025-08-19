import { useState } from "react";
import TextArea from "./TextArea";

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
    <section className="grid gap-10 font-inter p-2">
      <h1 className="text-center font-medium text-3xl  max-[750px]:text-2xl">
        What specific services or products do you build? <br />
        Can I take a peek?
      </h1>
      <div className="grid gap-3 max-w-[500px] w-[90%] m-auto">
        <TextArea
          value={projectDescription.value}
          placeholder={projectDescription.placeholder}
          focused={projectDescription.focused}
          onchange={updateDescription}
        />
        <TextArea
          value={projectProgress.value}
          placeholder={projectProgress.placeholder}
          focused={projectProgress.focused}
          onchange={updateProgress}
        />
      </div>
    </section>
  );
}
