import "../home/styles/footer/footer.css";
import "./styles/resume.css";
import DarkThemeBulb from "./styles/dark_theme_bulb.svg";

import { ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";

export default function ResumeWrapper(props) {
  const [theme, setTheme] = useState("dark");

  return (
    <section className="relative py-3.5 px-[120px] min-h-screen dark:bg-[#000000] max-[850px]:px-[70px] max-[550px]:px-[40px]">
      {/* THE DIV THAT WRAPS THE STAR UNDERLAY AND LINEAR GRADIENT */}

      <div className="resume-effect absolute top-0 bottom-0 left-0 right-0"></div>
      <div className="flares-effect absolute top-0 h-[100vh] left-0 right-0"></div>
      <div className="stars-effect absolute top-0 bottom-1/2 left-0 right-0"></div>
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

        <WorkExperience />
        <Education />
        <Skills />
      </div>
    </section>
  );
}
