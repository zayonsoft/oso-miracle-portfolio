import { useState } from "react";
import TextArea from "./TextArea";
export default function PrimaryCompetitors(props) {
  const [PrimaryCompetitors, setPrimaryCompetitors] = useState({
    value: "",
    focused: false,
    placeholder: "Enter your competitors...",
  });

  function updateCompetitors(newValue) {
    setPrimaryCompetitors({
      ...PrimaryCompetitors,
      value: newValue,
      focused: true,
    });
  }

  return (
    <section className="grid gap-10 font-inter w-[90%] box-border max-w-[800px] bg-red p-2 m-auto">
      <h1 className="text-center font-medium text-3xl max-[750px]:text-2xl">
        Who are your primary competitors?
      </h1>
      <div className="grid gap-3 max-w-[500px] w-[90%] m-auto">
        <p>
          <TextArea
            value={PrimaryCompetitors.value}
            placeholder={PrimaryCompetitors.placeholder}
            focused={PrimaryCompetitors.focused}
            onchange={updateCompetitors}
          />
        </p>
      </div>
    </section>
  );
}
