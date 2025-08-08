import TypograpghyImage from "./styles/propifix/typography.svg";
export default function ChallengeSolution() {
  return (
    <section className="px-[75px] py-10 grid gap-10 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">Challenge</h1>
        <p className="text-left font-inter text-[13px] font-normal">
          Users often face a trust deficit when interacting with online property
          listings. The abundance of fake agents, unverifiable listings, and
          vague property descriptions make the buying or renting journey
          stressful. Additionally, navigation is often cluttered on real estate
          platforms, making discovery feel like a chore.
        </p>
      </div>
      <div className="grid gap-5 m-auto">
        <h1 className="font-inter text-3xl font-normal text-left">Solution</h1>
        <p className="text-left font-inter text-[13px] font-normal">
          PropiFix introduced verified listings and integrated a real-time chat
          system between users and agents to foster immediate and authentic
          communication. Location-aware search filters helped users explore
          nearby options easily, while a clean, intuitive UI guided them to
          listings without distractions. The end result was a smoother, more
          trustworthy property discovery experience.
        </p>
      </div>

      {/* Typography Section */}
      <div>
        <img className="m-auto " src={TypograpghyImage} alt="" />
      </div>
    </section>
  );
}
