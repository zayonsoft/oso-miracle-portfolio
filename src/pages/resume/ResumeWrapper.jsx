import "../home/styles/footer/footer.css";
import "./styles/resume.css";
import DarkThemeBulb from "./styles/dark_theme_bulb.svg";
import LightThemeBulb from "./styles/light_theme_bulb.svg";

import { ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import { useNavigate } from "react-router-dom";

export default function ResumeWrapper(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <section className="relative grid gap-2 py-3.5 pb-12 px-[120px] min-h-screen bg-white dark:bg-[black]  max-[850px]:px-[70px] max-[550px]:px-[25px]">
      {/* THE DIV THAT WRAPS THE STAR UNDERLAY AND LINEAR GRADIENT */}
      <div className="resume-effect absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="flares-effect absolute top-0 h-[100vh] left-0 right-0"></div>
      <div className="stars-effect absolute top-0 bottom-1/2 left-0 right-0"></div>
      {/* DESIGN SIDE ENDS  */}

      {/* THE BACK ARROW */}
      <div className="relative flex justify-between items-center">
        {/* Back Arrow DIV */}
        <div className="gradient-border rounded-full">
          <button
            onClick={() => navigate("/")}
            className="bg-[#a497ff] dark:bg-[#5c5bb4] hover:bg-transparent max-[650px]:bg-[#849efd] max-[950px]:dark:bg-[#5f78ca] text-white rounded-full w-9 h-9 text-center grid justify-center content-center cursor-pointer outline-none"
            type="button"
          >
            {" "}
            <ArrowLeft size={20} />{" "}
          </button>
        </div>
        {/* BACK ARROW ENDS */}

        {/* THE BULB ICON DIV */}
        <div>
          <div className="relative top-[-10px]">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="outline-none cursor-pointer w-[40px] p-1 box-border block shadow rounded-2xl font-montserrat text-xs text-wrap"
            >
              {theme == "dark" ? (
                <img src={DarkThemeBulb} alt="Toggle Theme" />
              ) : (
                <img src={LightThemeBulb} alt="Toggle Theme" />
              )}
            </button>
          </div>
        </div>
        {/* BULB ICON ENDS */}
      </div>

      {/* THIS PART CONTAINS THE MAIN PAGE CONTENT */}
      <div className="grid gap-14 relative">
        <div className="grid gap-2 font-inter">
          <h1 className="text-[30px] font-semibold text-[#050607] dark:text-white max-[650px]:text-[23px]">
            MIRACLE JOHN OSO
          </h1>
          <h3 className="text-[25px] font-[350] text-[#3F424DCC] dark:text-[#FFFFFFCC] max-[650px]:text-[15px]">
            UI/UX Specialist, Product Designer
          </h3>
          <div className="grid gap-1.5">
            <p className="flex gap-3 items-center">
              <span className="text-[#D41503] dark:text-[#FDAEA7] text-xl w-8 h-8 max-[650px]:w-7 max-[650px]:h-7">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span className="text-[#3F424DCC] dark:text-[#FFFFFFCC] font-bold text-lg max-[650px]:text-sm">
                No 10, Araromi Qtrs, Akungba Akoko, Ondo State, Nigeria.{" "}
              </span>
            </p>
            <p className="flex gap-3 items-center">
              <span className="flex items-center justify-center bg-[#8D4DFD] p-1 rounded-full w-8 h-8 max-[650px]:w-7 max-[650px]:h-7 text-[#FFFFFF] text-[15px] max-[650px]:text-[12px]">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="text-[#050607] dark:text-[#FFFFFFCC] font-normal text-sm">
                www.charlieputh062@gmail.com
              </span>
            </p>
            <p className="flex gap-3 items-center">
              <span className="w-8 h-8 max-[650px]:w-7 max-[650px]:h-7 text-[#EA4C89] text-xl">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="text-[#050607] dark:text-[#FFFFFFCC] font-normal text-sm">
                08108261439
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="font-inter text-[#050607] dark:text-[#FFFFFF] text-[16px] font-normal max-[650px]:text-sm">
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

        <WorkExperience />
        <Education />
        <Skills />
      </div>
    </section>
  );
}
