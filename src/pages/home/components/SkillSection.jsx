import SkillImage from "../styles/skill/skill_image.svg";
import "../styles/skill/skills.css";
export default function SkillSection() {
  return (
    <section className="grid content-center min-h-screen w-full bg-white">
      <img
        className="max-w-[600px] object-center object-contain w-20% block m-auto  max-[601px]:max-w-[380px] skills-bg"
        src={SkillImage}
        alt=""
      />
    </section>
  );
}
