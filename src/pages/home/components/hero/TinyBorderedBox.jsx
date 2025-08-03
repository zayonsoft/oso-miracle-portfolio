export default function TinyOpaqueBox(props) {
  return (
    <div
      style={{
        right: props.right,
        top: props.top,
        width: props.width,
        height: props.width,
      }}
      className="absolute rounded-[15px] -rotate-45 border-[#175DC21A] z-[5] border-[1.5px]"
    ></div>
  );
}
