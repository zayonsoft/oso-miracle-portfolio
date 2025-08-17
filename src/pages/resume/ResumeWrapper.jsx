import "../home/styles/footer/footer.css";
import "./styles/resume.css";
import DarkThemeBulb from "./styles/dark_theme_bulb.svg";
import DarkWorkExpIcon from "./styles/work_experience_dark.svg";
import HiitLogo from "./styles/hiit_logo.svg";
import { ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import WorkExpList from "./WorkExpList";
import { v4 } from "uuid";
export default function ResumeWrapper(props) {
  const [theme, setTheme] = useState("dark");

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
    <section className="relative py-3.5 px-[120px] min-h-screen dark:bg-[#000000] max-[850px]:px-[70px] max-[550px]:px-[40px]">
      {/* THE DIV THAT WRAPS THE STAR UNDERLAY AND LINEAR GRADIENT */}

      <div className="resume-effect absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="flares-effect absolute top-0 h-[100vh] left-0 right-0"></div>
      {/* The DIV THAT WRAPS THE MAIN THING */}
      <div className="grid gap-10 relative">
        <div className="relative flex justify-between items-center">
          {/* Back Arrow DIV */}

          <div className="gradient-border rounded-full">
            <button
              onClick={(e) => scrollToTop(e)}
              className="back-btn text-white rounded-full w-9 h-9 text-center grid justify-center content-center cursor-pointer outline-none"
              type="button"
            >
              {" "}
              <ArrowLeft size={20} />{" "}
            </button>
          </div>

          {/* THE BULB ICON DIV */}
          <div>
            <div className="relative top-[-10px]">
              <button className="cursor-pointer w-[35px]">
                <img src={DarkThemeBulb} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-3 font-inter">
          <h1 className="text-[30px] font-semibold text-white">
            MIRACLE JOHN OSO
          </h1>
          <h3 className="text-[25px] font-[350] text-[#FFFFFFCC]">
            UI/UX Specialist, Product Designer
          </h3>
          <p className="flex gap-4 items-center">
            <span className="text-[#FDAEA7] text-2xl">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span className="text-[#FFFFFFCC] font-bold text-lg">
              No 10, Araromi Qtrs, Akungba Akoko, Ondo State, Nigeria.{" "}
            </span>
          </p>
          <p className="flex gap-4 items-center">
            <span className="flex items-center justify-center bg-[#8D4DFD] p-1 rounded-full w-8 h-8 text-[#FFFFFF] text-[15px]">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="text-[#FFFFFFCC] font-normal">
              www.charlieputh062@gmail.com
            </span>
          </p>
          <p className="flex gap-4 items-center">
            <span className="text-[#EA4C89] text-2xl">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span className="text-[#FFFFFFCC] font-normal">08108261439</span>
          </p>
        </div>

        <div>
          <p className="font-inter text-[#FFFFFF] text-lg font-normal">
            Certified Ethical Hacker (CEH) and CCNA-certified professional with
            strong foundational skills in ethical hacking, penetration testing,
            and ICT security. Proficient in utilizing tools such as Wireshark,
            Nmap, Nessus, Burp Suite, and Kali Linux to identify vulnerabilities
            and enhance system defenses. Experienced in conducting vulnerability
            assessments and participating in CTF challenges to solve real-world
            security scenarios. Passionate about securing digital environments
            and contributing to robust cybersecurity strategies.
          </p>
        </div>

        <div className="grid gap-6">
          <h2 className="flex items-center gap-4 pt-2 pb-7 border-b border-[#585D6C]">
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
      </div>
    </section>
  );
}
