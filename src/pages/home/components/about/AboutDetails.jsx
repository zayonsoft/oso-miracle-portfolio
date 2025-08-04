import AboutLists from "./AboutLists";

export default function AboutDetails() {
  return (
    <section className="col-span-3 grid gap-3 content-start">
      <div className="font-montserrat font-semibold">
        <h1 className="text-[#448EF9] text-lg ">UI/UX Designer</h1>
        <div className="font-semibold text-sm">
          <p>Company : HiiTPlc</p>
          <p>Duration : 2023 - 2024</p>
          <p>Now self-Employed</p>
        </div>
      </div>
      <AboutLists />
    </section>
  );
}
