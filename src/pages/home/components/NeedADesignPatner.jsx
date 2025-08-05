export default function NeedADesignPatner() {
  return (
    <section className="grid gap-4 bg-[#01071A] px-5 py-7">
      <div className="w-[90%] max-w-[650px] m-auto font-semibold">
        <h1 className="text-white font-montserrat  text-3xl text-center leading-12">
          Looking for a Design Partner? <br /> Let’s Get Started
        </h1>
      </div>
      <div className="flex m-auto gap-2 mt-7">
        <a
          className="bg-[#175DC2] text-white text-[10px] font-montserrat font-semibold p-[6px] w-[120px] rounded-full block text-center"
          href=""
        >
          {" "}
          Hire Me{" "}
        </a>
        <a
          className="bg-white text-[#1F1F1F] text-[10px] font-montserrat font-bold p-[6px] w-[120px] rounded-full block text-center"
          href=""
        >
          {" "}
          See My Work{" "}
        </a>
      </div>
      <div className="m-auto flex gap-2 items-center flex-wrap ">
        <hr className="block border-0 w-6 h-0.5 bg-white rounded-sm" />
        <p className="text-white font-inter text-sm font-light">
          Available for new projects
        </p>
        <hr className="block border-0 w-6 h-0.5 bg-white rounded-sm" />
      </div>
    </section>
  );
}
