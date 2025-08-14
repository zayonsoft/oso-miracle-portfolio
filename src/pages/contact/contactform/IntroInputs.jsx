import { useState } from "react";
import IntroInput from "./IntroInput";
import { v4 } from "uuid";

export default function IntroInputs(props) {
  const intialInputList = [
    {
      id: [v4()],
      placeholder: "Enter your name e.g. John Doe",
      value: "",
    },
    {
      id: [v4()],
      placeholder: "Enter your email e.g. johndoe@gmail.com",
      value: "",
    },
    {
      id: [v4()],
      placeholder: "Enter your company name e.g. Rivert Design",
      value: "",
    },
    { id: [v4()], placeholder: "Enter your country e.g. Nigeria", value: "" },
  ];
  const [inputList, setInputList] = useState(intialInputList);
  function updateList(id, value) {
    setInputList((prev) =>
      prev.map((item) => (item.id == id ? { ...item, value: value } : item))
    );
  }
  return (
    <>
      {inputList.map((list) => (
        <IntroInput
          id={list.id}
          key={list.id}
          value={list.value}
          placeholder={list.placeholder}
          onchangeFunction={updateList}
        />
      ))}
    </>
  );
}
