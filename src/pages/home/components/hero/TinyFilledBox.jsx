export default function TinyFilledBox(props) {
  return (
    <div
      style={{
        right: props.right,
        top: props.top,
        width: props.width,
        height: props.width,
      }}
      className="absolute rounded-[20px] -rotate-45 bg-[#175DC20D] z-[5]"
    ></div>
  );
}
