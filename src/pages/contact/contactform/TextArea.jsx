export default function TextArea({ value, placeholder, focused, onchange }) {
  return (
    <textarea
      onChange={(e) => onchange(e.target.value)}
      style={{
        boxShadow: focused && !value.trim() ? "0px 4px 5px 0px #D02E284D" : "",
      }}
      className={
        focused && !value.trim()
          ? "outline-none resize-none border w-full p-3 rounded-xl font-inter text-xs border-red-500 h-[35vh] placeholder:text-xs"
          : "outline-none resize-none border w-full p-3 rounded-xl font-inter text-xs border-[#0000004D] focus:border-[#000000] h-[35vh] placeholder:text-xs"
      }
      name=""
      value={value}
      placeholder={placeholder}
    ></textarea>
  );
}
