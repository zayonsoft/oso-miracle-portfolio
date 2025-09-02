import { Check } from "lucide-react";

export function FormOPtion({ id, value, selected, updateFunction }) {
  return (
    <div>
      <p
        onClick={() => updateFunction(id)}
        className={
          selected
            ? "flex cursor-pointer items-center gap-3 rounded-4xl border outline-none font-normal font-inter border-[#0000004D] text-xs px-3 py-2 text-[#000000] max-[750px]:text-xs"
            : "flex cursor-pointer items-center gap-3 rounded-4xl border outline-none font-normal font-inter border-[#0000004D] text-xs px-3 py-2 text-[#000000] max-[750px]:text-xs"
        }
      >
        {!selected ? (
          <button
            type="button"
            className="cursor-pointer block box-border p-1.5 w-4 h-4 border max-[750px]:w-4 max-[750px]:h-4 border-[#0000004D] rounded-full"
          ></button>
        ) : (
          <button
            type="button"
            className="grid text-white justify-center font-bold box-border content-center text-center cursor-pointer bg-[#448EF9] p-1.5 w-4 h-4 max-[750px]:w-4 max-[750px]:h-4 border border-[#448EF9] rounded-full"
          >
            <Check size={9} strokeWidth={4} />
          </button>
        )}

        <span className="h-auto">{value}</span>
      </p>
    </div>
  );
}
