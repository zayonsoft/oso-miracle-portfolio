import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import SkillList from "./SkillList";
export default function Skills(props) {
  return (
    <div className="grid gap-8 font-inter">
      <h2 className="flex items-center gap-4 pt-2 pb-4 border-b border-[#585D6C]">
        {/* ADD CONDITIONAL RENDERING */}
        <span className="text-[#C19CFE] text-2xl">
          <FontAwesomeIcon icon={faUserFriends} />
        </span>
        <span className="text-white font-semibold text-4xl">Skills</span>
      </h2>

      <section className="grid gap-5">
        <div className="grid gap-5">
          <h3 className="text-white text-[28px] font-semibold">
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
          <h3 className="text-white text-[28px] font-semibold">
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
          <h3 className="text-white text-[28px] font-semibold">
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
