import { useContext, useEffect, useState } from "react";
import Introduction from "./contactform/Introduction";
import PrimaryCompetitors from "./contactform/PrimaryCompetitors";
import ProjectGoals from "./contactform/ProjectGoals";
import Solution from "./contactform/Solution";
import SpecificServices from "./contactform/SpecificServices";
import SubmitButton from "./contactform/SubmitButton";
import Timeline from "./contactform/Timeline";
import { ContactFormContext } from "../../contexts/ContactFormContext";

export default function ContactFormSection(props) {
  const { contactData, setContactData } = useContext(ContactFormContext);
  const [formOkay, setFormOkay] = useState(false);
  useEffect(() => {
    if (
      contactData.name &&
      contactData.email &&
      contactData.companyName &&
      contactData.country &&
      contactData.solution &&
      contactData.projectDescription &&
      contactData.projectProgress &&
      contactData.projectGoals &&
      contactData.competitors &&
      contactData.timeline
    ) {
      setFormOkay(true);
    } else {
      setFormOkay(false);
    }
  }, [contactData]);

  function submitAction(e) {
    e.preventDefault();
  }

  return (
    <section className="px-[75px] py-16 grid gap-5 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="p-5 rounded-4xl border-[#000000] border">
        <form
          onSubmit={(e) => submitAction(e)}
          className="grid gap-11 w-[90%] box-border max-w-[800px] p-2 m-auto"
          action=""
        >
          <Introduction />
          <Solution />
          <ProjectGoals />
          <SpecificServices />
          <PrimaryCompetitors />
          <Timeline />
          <SubmitButton formOkay={formOkay} />
        </form>
      </div>
    </section>
  );
}
