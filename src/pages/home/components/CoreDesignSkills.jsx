import Skill from "./cds/Skill";
import Skills from "./cds/Skills";

export default function CoreDesignSkills(props) {
  return (
    <section
      style={{ scrollMarginTop: props.scrollMargin }}
      className="bg-white grid gap-3 px-[75px] py-20 max-[830px]:px-[50px] max-[700px]:px-[30px]"
    >
      <div className="font-montserrat grid gap-4 w-[90%] max-w-[700px] m-auto">
        <h1 className="text-center font-bold text-2xl">Core Design Skiils</h1>
        <p className="text-[13px] text-center">
          I excel in essential design skills, creating visually stunning and
          functional digital experiences. From UI design to UX research, my
          passion is to craft effective and memorable digital solutions.
        </p>
      </div>
      {/* This Div Contains all CDS and thier Percentage */}
      <div>
        <Skills />
      </div>
    </section>
  );
}
