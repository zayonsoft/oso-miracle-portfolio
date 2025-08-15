import IntroInputs from "./IntroInputs";

export default function Introduction(props) {
  return (
    <div className="grid gap-5 box-border bg-red p-2">
      <h2 className="text-center font-inter font-medium text-3xl">
        Let’s get to know you first
      </h2>
      <div className="max-w-[500px] w-[90%] grid gap-2 m-auto">
        <IntroInputs />
      </div>
    </div>
  );
}
