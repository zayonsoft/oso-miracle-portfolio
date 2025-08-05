import AboutDetails from "./about/AboutDetails";
import ProfileImage from "./about/ProfileImage";

export default function AboutMe() {
  return (
    <section className="grid gap-12 w-full h-full bg-white px-[75px] py-10 max-[830px]:px-[50px] max-[700px]:px-[30px]">
      <div className="grid gap-5 w-11/12 max-w-2xl m-auto">
        <h1 className="font-montserrat text-2xl font-bold text-center">
          About Me
        </h1>
        <p className="text-center font-montserrat text-[13px] font-normal">
          I'm Miracle John, a UI/UX designer dedicated to crafting intuitive and
          visually stunning digital experiences. With a passion for user-centric
          design, I transform ideas into functional and beautiful interfaces.
          Let's collaborate and shape the future of design together.
        </p>
      </div>
      {/* THE SECTION THAT SHOWS THE LIST OF THINGS AND PICTURE */}
      <div className="grid grid-cols-5 max-[661px]:grid-cols-1">
        <ProfileImage />
        <AboutDetails />
      </div>
    </section>
  );
}
