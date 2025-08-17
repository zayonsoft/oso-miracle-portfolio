import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
export default function Education(props) {
  return (
    <div className="grid gap-8 font-inter">
      <h2 className="flex items-center gap-4 pt-2 pb-4 border-b border-[#585D6C]">
        {/* ADD CONDITIONAL RENDERING */}
        <span className="text-[#C19CFE] text-2xl">
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <span className="text-white font-semibold text-4xl">Education</span>
      </h2>

      <section className="grid gap-5">
        <div className="flex justify-between">
          <div className="flex gap-3 font-inter">
            <div className="grid gap-0">
              <h3 className="text-white text-[28px] font-semibold">
                Deeper Life High School
              </h3>
              <p className="text-[#C19CFE] text-[16px] font-normal">
                Major studies: Mathematics, Physics, Chemistry, Biology and ICT
                (Science Track)
              </p>
            </div>
          </div>
          <p className="font-inter text-[#FFFFFFCC]">09/2013 - 07/2019</p>
        </div>
        <p className="font-inter text-sm text-white">
          Successfully completed WAEC and Cambridge International Examinations.
          Built a strong academic base, excelling in science and technology
          subjects. awarded “Best in Technical Drawing (TD)” sparking an
          interest in design.
        </p>
      </section>

      <section className="grid gap-5">
        <div className="flex justify-between">
          <div className="flex gap-3 font-inter">
            <div className="grid gap-0">
              <h3 className="text-white text-[28px] font-semibold">
                Adekunle Ajasin University Akungba (AAUA)
              </h3>
              <p className="text-[#C19CFE] text-[16px] font-semibold">
                Bachelor Of Science
              </p>
              <p className="text-[#C19CFE] text-[16px] font-normal">
                Computer Science (Major) - Second Upper Division (2:1)
              </p>
            </div>
          </div>
          <p className="font-inter text-[#FFFFFFCC]">12/2019 - 12/2024</p>
        </div>
        <p className="font-inter text-sm text-white">
          Achieved a strong academic foundation in computer science, with a
          focus on networking & network security, systems analysis, computer
          organization and architecture, information system, software
          engineering and UI/UX principles. Developed skills in critical
          thinking, problem-solving, and technical analysis through coursework
          and projects, including project on Development of a Unified Finance
          Management Platform. Graduated with a B.Sc. in Computer Science.
        </p>
      </section>
    </div>
  );
}
