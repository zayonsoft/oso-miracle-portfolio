import { useContext, useEffect, useState } from "react";
import Introduction from "./contactform/Introduction";
import PrimaryCompetitors from "./contactform/PrimaryCompetitors";
import ProjectGoals from "./contactform/ProjectGoals";
import Solution from "./contactform/Solution";
import SpecificServices from "./contactform/SpecificServices";
import SubmitButton from "./contactform/SubmitButton";
import Timeline from "./contactform/Timeline";
import { ContactFormContext } from "../../contexts/ContactFormContext";
import MessageModal from "./contactform/MessageModal";

export default function ContactFormSection(props) {
  const { contactData, setContactData } = useContext(ContactFormContext);
  const [formOkay, setFormOkay] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const [modalMessage, setModalMessage] = useState("");
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
    if (formOkay) {
      setModalMessage(
        "Sorry, You cannot Proceed as this feature is still under maintenance"
      );
      openModal();
    } else {
      setModalMessage("Pls, Complete all Sections of the Form");
      openModal();
    }
  }

  return (
    <section className="px-[75px] py-16 grid gap-5 bg-white max-[830px]:px-[50px] max-[700px]:px-[20px]">
      <div className="p-5 rounded-4xl border-[#000000] border max-[700px]:p-3">
        <form
          onSubmit={(e) => submitAction(e)}
          className="grid gap-11 w-[100%] box-border max-w-[800px] p-2 m-auto"
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
        <MessageModal
          open={modalOpen}
          closeFunction={handleClose}
          message={modalMessage}
        />
      </div>
    </section>
  );
}
