import Services from "./services/Services";

export default function ServiceSection() {
  return (
    <section className="py-20">
      <div className="grid gap-5 w-11/12 max-w-2xl m-auto">
        <h1 className="font-montserrat text-2xl font-bold text-center">
          Services
        </h1>
        <p className="text-center font-montserrat text-[13px] font-normal">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let's craft exceptional digital experiences
          together.
        </p>
      </div>

      {/* THE DIV THAT LISTS THE SERVICES */}
      <Services />
    </section>
  );
}
