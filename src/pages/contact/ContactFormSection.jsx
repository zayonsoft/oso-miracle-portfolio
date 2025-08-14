import Introduction from "./contactform/Introduction";
import Solution from "./contactform/Solution";
import SpecificServices from "./contactform/SpecificServices";

export default function ContactFormSection(props) {
  return (
    <section className="px-[75px] py-16 grid gap-5 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="p-5 rounded-4xl border-[#000000] border">
        <form className="grid gap-10" action="">
          <Introduction />
          <Solution />
          <SpecificServices />
        </form>
      </div>
    </section>
  );
}
