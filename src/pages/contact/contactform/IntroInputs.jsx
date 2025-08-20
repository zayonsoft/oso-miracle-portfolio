import { useEffect, useState } from "react";
import IntroInput from "./IntroInput";
import { v4 } from "uuid";
import { ContactFormContext } from "../../../contexts/ContactFormContext";
import { useContext } from "react";

export default function IntroInputs(props) {
  const { contactData, setContactData } = useContext(ContactFormContext);
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

  useEffect(() => {
    let name = inputList[0].value;
    let email = inputList[1].value;
    let companyName = inputList[2].value;
    let country = inputList[3].value;
    setContactData({ ...contactData, name, email, companyName, country });
  }, [inputList]);

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
