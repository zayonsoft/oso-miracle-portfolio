import SolutionOptions from "./SolutionOptions";

export default function Solution(props) {
  return (
    <div className="grid gap-10 w-[90%] box-border max-w-[550px] bg-red p-2 m-auto">
      <h2 className="text-center font-inter font-medium text-3xl">
        Choose Solution
      </h2>
      <div className="max-w-[500px] w-[90%] grid gap-3 m-auto">
        <SolutionOptions />
      </div>
    </div>
  );
}
