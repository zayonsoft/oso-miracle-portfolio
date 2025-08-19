import SolutionOptions from "./SolutionOptions";

export default function Solution(props) {
  return (
    <div className="grid gap-10 box-border p-2">
      <h2 className="text-center font-inter font-medium text-3xl max-[750px]:text-2xl">
        Choose Solution
      </h2>
      <div className="max-w-[500px] w-[90%] grid gap-3 m-auto">
        <SolutionOptions />
      </div>
    </div>
  );
}
