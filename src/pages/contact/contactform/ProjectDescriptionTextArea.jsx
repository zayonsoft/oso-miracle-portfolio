export default function ProjectDescriptionTextArea({
  value,
  placeholder,
  focused,
  onchange,
}) {
  return (
    <p>
      <textarea
        onChange={(e) => onchange(e.target.value)}
        className={
          !focused
            ? "outline-none resize-none border w-full p-3 rounded-xl font-inter text-xs border-[#0000004D] focus:border-[#000000] h-[35vh] placeholder:text-xs"
            : "outline-none resize-none border w-full p-3 rounded-xl font-inter text-xs border-red-500 h-[35vh] placeholder:text-xs"
        }
        name=""
        value={value}
        placeholder="Enter your project description..."
      ></textarea>
    </p>
  );
}
