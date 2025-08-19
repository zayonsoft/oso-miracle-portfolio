export default function SkillList({ value }) {
  return (
    <div className="flex gap-3 items-center">
      <button
        type="button"
        className="bg-[#8D4DFD] block w-2 h-2 rounded-full"
      ></button>
      <span className="font-inter font-normal text-sm max-[650px]:text-[13px] text-[#050607] dark:text-white">
        {value}
      </span>
    </div>
  );
}
