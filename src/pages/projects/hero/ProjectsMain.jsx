import HeroImage from "../styles/propifix/project_hero.png";
export default function ProjectsMain() {
  return (
    <>
      <main>
        <div className="grid gap-12 content-start px-[75px] py-7 max-[830px]:px-[50px] max-[700px]:px-[30px]">
          <h1 className="text-white font-montserrat font-semibold text-2xl">
            PropiFix - Real Estate & Home Service Network
          </h1>
          {/* Where the Image Will Sit */}
          <div className="relative max-h-full">
            <img
              className="max-w-full block height-auto max-h-[100%]"
              src={HeroImage}
              alt=""
            />
          </div>
          <div className="flex justify-between font-inter text-[#FFFFFFCC]">
            <p className="text-sm">Designed 2024/2025</p>
            <p className="text-sm">RIVERT DESIGN</p>
          </div>
        </div>
      </main>
    </>
  );
}
