import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import { ContactFormContext } from "../../../contexts/ContactFormContext";
import { useContext } from "react";

export default function PrimaryCompetitors(props) {
  const { contactData, setContactData } = useContext(ContactFormContext);
  const [primaryCompetitors, setPrimaryCompetitors] = useState({
    value: "",
    focused: false,
    placeholder: "Enter your competitors...",
  });

  function updateCompetitors(newValue) {
    setPrimaryCompetitors({
      ...primaryCompetitors,
      value: newValue,
      focused: true,
    });
  }

  useEffect(() => {
    setContactData({ ...contactData, competitors: primaryCompetitors.value });
  }, [primaryCompetitors]);

  return (
    <section className="grid gap-10 font-inter w-[90%] box-border max-w-[800px] bg-red p-2 m-auto">
      <h1 className="text-center font-medium text-3xl max-[750px]:text-2xl">
        Who are your primary competitors?
      </h1>
      <div className="grid gap-3 max-w-[500px] w-[90%] m-auto">
        <p>
          <TextArea
            value={primaryCompetitors.value}
            placeholder={primaryCompetitors.placeholder}
            focused={primaryCompetitors.focused}
            onchange={updateCompetitors}
          />
        </p>
      </div>
    </section>
  );
}
