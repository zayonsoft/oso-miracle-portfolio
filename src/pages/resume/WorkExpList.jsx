export default function WorkExpList({ value }) {
  return (
    <div className="flex gap-3 items-center">
      <button
        type="button"
        className="bg-[#8D4DFD] block w-2 h-2 rounded-full"
      ></button>
      <span className="font-inter font-normal text-lg text-white">{value}</span>
    </div>
  );
}
