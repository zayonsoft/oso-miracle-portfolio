import ListButtonIcon from "./ListButtonIcon";

export default function AboutList(props) {
  return (
    <p className="flex gap-0.5">
      <span>
        <ListButtonIcon />
      </span>
      <span>{props.text}</span>
    </p>
  );
}
