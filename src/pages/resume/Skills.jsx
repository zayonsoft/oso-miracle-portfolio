import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import SkillList from "./SkillList";
export default function Skills(props) {
  return (
    <div className="grid gap-8 font-inter">
      <h2 className="flex items-center gap-4 pt-2 pb-4 border-b border-[#585D6C]">
        {/* ADD CONDITIONAL RENDERING */}
        <span className="text-[#6A1CFD] dark:text-[#C19CFE] text-2xl max-[650px]:text-xl">
          <FontAwesomeIcon icon={faUserFriends} />
        </span>
        <span className="text-[#050607] dark:text-white font-semibold text-4xl max-[650px]:text-[23px]">
          Skills
        </span>
      </h2>

      <section className="grid gap-5">
        <div className="grid gap-5">
          <h3 className="text-[#050607] dark:text-white text-[28px] max-[650px]:text-[22px] font-semibold">
            Ethical Hacking & Cybersecurity
          </h3>
          <ul className="grid gap-4">
            <SkillList
              value={
                "Skills: penetration testing, vulnerability analysis, and ICT security systems."
              }
            />
            <SkillList
              value={
                "Tools: Wireshark, Nmap, Nessus, Burp Suite, Metasploit, Kali Linux."
              }
            />
          </ul>
        </div>
      </section>

      <section className="grid gap-5">
        <div className="grid gap-5">
          <h3 className="text-[#050607] dark:text-white text-[28px] max-[650px]:text-[22px] font-semibold">
            Soft Skills and General Competencies
          </h3>
          <ul className="grid gap-4">
            <SkillList value={"Leadership"} />
            <SkillList value={"Problem-solving"} />
            <SkillList value={"Communication skills"} />
          </ul>
        </div>
      </section>
      <section className="grid gap-5">
        <div className="grid gap-5">
          <h3 className="text-[#050607] dark:text-white text-[28px] max-[650px]:text-[22px] font-semibold">
            Certifications
          </h3>
          <ul className="grid gap-4">
            <SkillList
              value={"CEH (Certified Ethical Hacker) with DISTINCTION"}
            />
            <SkillList
              value={
                "CCNA (Cisco Certified Network Associate) with DISTINCTION"
              }
            />
          </ul>
        </div>
      </section>
    </div>
  );
}
