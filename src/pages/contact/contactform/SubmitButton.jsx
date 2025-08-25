import { useEffect, useState } from "react";
import { ContactFormContext } from "../../../contexts/ContactFormContext";
import { useContext } from "react";

export default function SubmitButton({ formOkay }) {
  const { contactData, setContactData } = useContext(ContactFormContext);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setClicked(false);
  }, [contactData]);

  return (
    <p className="max-w-[500px] w-[90%] grid gap-0.5 m-auto">
      <button
        onClick={() => {
          setClicked(true);
        }}
        className="border border-black outline-none transition ease-in-out duration-900 rounded-3xl p-1.5 font-montserrat font-semibold hover:border-[#448EF9] text-sm hover:bg-[#448EF9] hover:text-white"
      >
        {" "}
        Submit Form
      </button>
      {clicked && !formOkay ? (
        <span className="text-center text-xs font-montserrat font-semibold text-red-700">
          Please Fill All Aspects of the Form
        </span>
      ) : (
        ""
      )}
    </p>
  );
}
