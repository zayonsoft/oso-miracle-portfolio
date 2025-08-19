export default function WorkExpList({ value }) {
  return (
    <div className="flex gap-3 items-start content-start">
      <span className="py-1.5">
        <button
          type="button"
          className="bg-[#8D4DFD] block w-2 h-2 rounded-full"
        ></button>
      </span>

      <span className=" font-inter font-normal text-lg text-[#050607] max-[650px]:text-[13px] dark:text-white">
        {value}
      </span>
    </div>
  );
}
