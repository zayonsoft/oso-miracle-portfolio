import MyWorks from "./works/MyWorks";

export default function MyWorksSection(props) {
  return (
    <section
      style={{ scrollMarginTop: props.scrollMargin }}
      id="my_work"
      className="px-[75px] py-10 grid gap-5 bg-white max-[830px]:px-[50px] max-[700px]:px-[30px]"
    >
      <div className="grid gap-5 w-11/12 max-w-2xl m-auto">
        <h1 className="font-montserrat text-2xl font-bold text-center">
          Discover My Work
        </h1>
        <p className="text-center font-montserrat text-[13px] font-medium">
          Explore some of my design projects that I have designed, from user
          interface and experience to prototyping and testing. Let's craft
          exceptional digital experiences together.
        </p>
      </div>
      <MyWorks />
    </section>
  );
}
