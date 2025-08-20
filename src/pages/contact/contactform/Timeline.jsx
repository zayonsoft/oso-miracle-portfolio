import { useEffect, useState } from "react";
import { FormOPtion } from "./FormOption";
import { v4 } from "uuid";
import { ContactFormContext } from "../../../contexts/ContactFormContext";
import { useContext } from "react";

export default function Timeline(props) {
  const intialOptionList = [
    {
      id: [v4()],
      value: "1-2 weeks",
      selected: true,
    },
    {
      id: [v4()],
      value: "2-4 weeks",
      selected: false,
    },
    {
      id: [v4()],
      value: "1-2 months",
      selected: false,
    },
    { id: [v4()], value: "Long term", selected: false },
  ];
  const [optionList, setOptionList] = useState(intialOptionList);
  const [timeline, setTimeline] = useState("1-2 weeks");

  const { contactData, setContactData } = useContext(ContactFormContext);

  useEffect(() => {
    setContactData({ ...contactData, timeline });
  }, [timeline]);

  function updateMultiSelect(id) {
    setOptionList((previousList) =>
      previousList.map((item) => {
        item.id == id ? setTimeline(item.value) : "";
        return item.id == id
          ? { ...item, selected: true }
          : { ...item, selected: false };
      })
    );
  }
  return (
    <div className="grid gap-10 box-border p-2">
      <h2 className="text-center font-inter font-medium text-3xl max-[750px]:text-2xl">
        Do You Have a Timeline in Mind
      </h2>
      <div className="max-w-[500px] w-[90%] grid gap-3 m-auto">
        {optionList.map((list) => (
          <FormOPtion
            id={list.id}
            key={list.id}
            value={list.value}
            selected={list.selected}
            updateFunction={updateMultiSelect}
          />
        ))}
      </div>
    </div>
  );
}
