import Testimonies from "./testimony/Testimonies";

export default function TestimonySection(props) {
  return (
    <section
      style={{ scrollMarginTop: props.scrollMargin }}
      className="grid gap-10 bg-white px-[75px] py-10 max-[830px]:px-[50px]  max-[700px]:px-[30px]"
    >
      <div className="grid w-11/12 max-w-2xl m-auto">
        <h1 className="font-montserrat text-2xl font-bold text-center">
          Testemonials
        </h1>
      </div>
      <Testimonies />
    </section>
  );
}
