export default function IntroInput(props) {
  return (
    <input
      className="rounded-4xl border outline-none border-[#0000004D] text-xs px-2.5 py-1.5 text-[#00000099] focus:border-[#000000] placeholder:text-[#00000099] placeholder:text-xs"
      placeholder={`${props.placeholder}`}
      value={props.value}
      onChange={(e) => props.onchangeFunction(props.id, e.target.value)}
    />
  );
}
