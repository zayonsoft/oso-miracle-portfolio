import { Check } from "lucide-react";

export function FormOPtion({ id, value, selected, updateFunction }) {
  return (
    <div>
      <p
        onClick={() => updateFunction(id)}
        className={
          selected
            ? "flex cursor-pointer items-center gap-3 rounded-4xl border outline-none font-normal font-inter border-[#0000004D] text-sm px-2.5 py-1.5 text-[#000000] max-[750px]:text-xs"
            : "flex cursor-pointer items-center gap-3 rounded-4xl border outline-none font-normal font-inter border-[#0000004D] text-sm px-2.5 py-1.5 text-[#00000099] max-[750px]:text-xs"
        }
      >
        {!selected ? (
          <button
            type="button"
            className="cursor-pointer block p-2.5 w-5 h-5 border max-[750px]:w-4 max-[750px]:h-4 border-[#0000004D] rounded-full"
          ></button>
        ) : (
          <button
            type="button"
            className="grid text-white justify-center font-bold box-border content-center text-center cursor-pointer bg-[#448EF9] p-2.5 w-5 h-5 max-[750px]:w-4 max-[750px]:h-4 border border-[#448EF9] rounded-full"
          >
            <Check size={14} strokeWidth={4} />
          </button>
        )}

        <span className="h-auto">{value}</span>
      </p>
    </div>
  );
}
