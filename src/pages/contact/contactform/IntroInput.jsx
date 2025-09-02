export default function IntroInput(props) {
  return (
    <input
      className="rounded-4xl border-1 outline-none border-[#0000004D] text-xs px-2.5 py-2 text-[#00000099] max-[750px]:text-xs focus:border-[#000000] placeholder:text-[#0000004D] placeholder:text-xs max-[750px]:placeholder:text-xs"
      placeholder={`${props.placeholder}`}
      value={props.value}
      onChange={(e) => props.onchangeFunction(props.id, e.target.value)}
    />
  );
}
