import DarkWorkExpIcon from "./styles/work_experience_dark.svg";
import HiitLogo from "./styles/hiit_logo.svg";
import WorkExpList from "./WorkExpList";

import { v4 } from "uuid";

export default function WorkExperience(props) {
  const workExpData = [
    {
      id: v4(),
      value:
        "Created user-friendly interfaces that streamline the user experience.",
    },
    {
      id: v4(),
      value:
        "Conducted usability testing, optimized user interface efficiency.",
    },
    {
      id: v4(),
      value:
        "Developed wireframes and prototypes for improved user interaction.",
    },
    {
      id: v4(),
      value: "Presented design proposals to clients, secured approval swiftly.",
    },
    {
      id: v4(),
      value:
        "Coordinated with marketing teams and ensured brand consistency throughout designs.",
    },
    {
      id: v4(),
      value:
        "Researched target audience needs and incorporated findings into UI and UX designs effectively.",
    },
    {
      id: v4(),
      value:
        "Participated in regular team reviews and critiques of ongoing projects, increasing overall project effectiveness.",
    },
    {
      id: v4(),
      value:
        "Translated project requirements into forward-thinking visual designs.",
    },
    {
      id: v4(),
      value:
        "Provided creative solutions to complex UX problems, improved customer satisfaction levels.",
    },
    {
      id: v4(),
      value:
        "Incorporate feedback from users into design improvements regularly.",
    },
    {
      id: v4(),
      value:
        "Managed multiple projects simultaneously whilst maintaining high quality standards in output.",
    },
    {
      id: v4(),
      value:
        "Delivered projects within deadlines without compromising on aesthetic or functional aspects of design.",
    },
    {
      id: v4(),
      value:
        "Collaborated with the development team for seamless integration of design elements.",
    },
    {
      id: v4(),
      value:
        "Enhanced overall aesthetics with the implementation of modern UI and UX designs.",
    },
    {
      id: v4(),
      value:
        "Led brainstorming sessions to develop innovative design concepts.",
    },
  ];
  return (
    <div className="grid gap-6">
      <h2 className="flex items-center gap-4 pt-2 pb-4 border-b border-[#585D6C]">
        {/* ADD CONDITIONAL RENDERING */}
        <span>
          {" "}
          <img className="w-8" src={DarkWorkExpIcon} alt="" />{" "}
        </span>
        <span className="text-white font-semibold text-4xl">
          Work Experience
        </span>
      </h2>

      <div className="flex justify-between">
        <div className="flex gap-3 font-inter">
          <span className="logo-shadow w-12 h-12 block p-3 rounded-[19px]">
            <img className="w-6" src={HiitLogo} alt="" />
          </span>
          <div>
            <h3 className="text-white text-[25px] font-semibold">
              HiiT Plc, Self-Employed
            </h3>
            <p className="text-[#C19CFE] text-[16px] font-normal">
              UI/UX Designer
            </p>
          </div>
        </div>
        <p className="font-inter text-[#FFFFFFCC]">10/2023 - Present</p>
      </div>
      {/* COMPANY HEADER ENDS HERE */}

      {/* For THE WORK EXPERIENCE LIST */}
      <div className="grid gap-3">
        {workExpData.map((item) => (
          <WorkExpList key={item.id} value={item.value} />
        ))}
      </div>
    </div>
  );
}
