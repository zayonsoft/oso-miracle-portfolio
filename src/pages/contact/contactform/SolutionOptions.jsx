import { useState } from "react";
import SolutionOption from "./SolutionOption";
import { v4 } from "uuid";
export default function SolutionOptions(props) {
  const intialOptionList = [
    {
      id: [v4()],
      value: "Remote Design Partner",
      selected: false,
    },
    {
      id: [v4()],
      value: "Redesign Web/App",
      selected: false,
    },
    {
      id: [v4()],
      value: "Create New Features",
      selected: false,
    },
    { id: [v4()], value: "UI Kit & Template Production", selected: false },
  ];
  const [optionList, setOptionList] = useState(intialOptionList);

  function updateMultiSelect(id) {
    setOptionList((previousList) =>
      previousList.map((item) =>
        item.id == id
          ? { ...item, selected: true }
          : { ...item, selected: false }
      )
    );
  }

  return (
    <>
      {optionList.map((list) => (
        <SolutionOption
          id={list.id}
          key={list.id}
          value={list.value}
          selected={list.selected}
          updateFunction={updateMultiSelect}
        />
      ))}
    </>
  );
}
