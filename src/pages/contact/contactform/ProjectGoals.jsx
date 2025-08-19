import { useState } from "react";
import TextArea from "./TextArea";
export default function ProjectGoals() {
  const [projectGoals, setProjectGoals] = useState({
    value: "",
    focused: false,
    placeholder: "Enter your goals & issues of the project...",
  });
  function updateGoals(newValue) {
    setProjectGoals({
      ...projectGoals,
      value: newValue,
      focused: true,
    });
  }
  return (
    <section className="grid gap-10 font-inter w-[90%] box-border max-w-[800px] bg-red p-2 m-auto">
      <h1 className="text-center font-medium text-3xl max-[750px]:text-2xl">
        Your project goals...
      </h1>
      <div className="grid gap-3 max-w-[500px] w-[90%] m-auto">
        <p>
          <TextArea
            value={projectGoals.value}
            placeholder={projectGoals.placeholder}
            focused={projectGoals.focused}
            onchange={updateGoals}
          />
        </p>
      </div>
    </section>
  );
}
