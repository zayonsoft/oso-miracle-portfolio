import "../../styles/testimony/testimony.css";
export default function Testimony(props) {
  return (
    <section className="grid gap-2 font-montserrat box-border justify-self-center max-w-[350px] p-3 border-[1px] border-[#00000099] rounded-4xl">
      <p className="text-[12px] font-medium h-32 overflow-y-scroll testimony-scrollbar">
        “{props.testimony}”
      </p>
      <div className="self-end">
        <p className="font-semibold text-[12px]">{props.testifier}</p>
        <p className="font-semibold text-[12px] text-[#00000099]">
          {props.role}
        </p>
      </div>
    </section>
  );
}
