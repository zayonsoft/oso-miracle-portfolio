import SkillImage from "../../styles/skill/skill_image.png";
export default function SkillSection() {
  return (
    <section className="grid content-center min-h-screen w-full bg-white">
      <img
        className="max-w-[500px] w-20% block m-auto  max-[601px]:max-w-[380px] skills-bg"
        src={SkillImage}
        alt=""
      />
    </section>
  );
}
