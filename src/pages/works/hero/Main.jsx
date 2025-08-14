import Elipse from "../styles/elipse.svg";
import "../styles/work.css";
export default function Main() {
  return (
    <main className="absolute pt-24 top-0 left-0 right-0 left h-screen overflow-y-hidden">
      <div className="absolute grid gap-10 w-[90%] max-w-[800px] -translate-x-1/2 top-[45%] left-1/2 text-center max-[800px]:top-[40%]">
        <h1 className="text-white font-montserrat text-4xl font-semibold max-[800px]:text-2xl">
          Highlighted Client Projects I'm Proud of
        </h1>
        <p className="text-white font-inter font-light text-lg max-[800px]:text-sm">
          I take pride in the projects I have contributed to building. From
          concept to execution, I've honed my craft and delivered eye-catching
          outcomes.
        </p>
      </div>
      <div className="work-main-bg absolute w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 top-[100%] left-1/2 max-[700px]:w-[350px] max-[700px]:h-[350px] max-[500px]:w-[300px] max-[500px]:h-[350px]"></div>
    </main>
  );
}
