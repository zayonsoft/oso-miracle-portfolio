export default function Service(props) {
  return (
    <div className="grid gap-1.5 p-1 max-w-[350px] m-auto">
      <div>
        <img src={props.image} alt="" />
      </div>
      <p className="font-bold text-lg text-[#448EF9]">{props.name}</p>
      <p className="font-normal text-sm">{props.details}</p>
    </div>
  );
}
