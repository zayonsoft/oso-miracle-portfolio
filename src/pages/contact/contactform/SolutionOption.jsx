export default function SolutionOption({
  id,
  value,
  selected,
  updateFunction,
}) {
  return (
    <div>
      <p
        onClick={() => updateFunction(id)}
        className="flex cursor-pointer items-center gap-3 rounded-4xl border outline-none font-normal font-inter border-[#0000004D] text-sm px-2.5 py-1.5 text-[#000000] placeholder:text-sm"
      >
        {!selected ? (
          <button
            type="button"
            className="cursor-pointer block p-2 w-5 h-5 border border-[#0000004D] rounded-full"
          ></button>
        ) : (
          <button
            type="button"
            className="cursor-pointer bg-[#000000] block p-2 w-5 h-5 border border-[#000000] rounded-full"
          ></button>
        )}

        <span className="h-auto">{value}</span>
      </p>
    </div>
  );
}
