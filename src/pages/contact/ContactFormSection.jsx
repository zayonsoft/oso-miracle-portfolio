import Introduction from "./contactform/Introduction";
import PrimaryCompetitors from "./contactform/PrimaryCompetitors";
import ProjectGoals from "./contactform/ProjectGoals";
import Solution from "./contactform/Solution";
import SpecificServices from "./contactform/SpecificServices";
import SubmitButton from "./contactform/SubmitButton";
import Timeline from "./contactform/Timeline";

export default function ContactFormSection(props) {
  return (
    <section className="px-[75px] py-16 grid gap-5 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="p-5 rounded-4xl border-[#000000] border">
        <form
          className="grid gap-11 w-[90%] box-border max-w-[800px] p-2 m-auto"
          action=""
        >
          <Introduction />
          <Solution />
          <SpecificServices />
          <ProjectGoals />
          <PrimaryCompetitors />
          <Timeline />
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
