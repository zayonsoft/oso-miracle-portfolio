import { useEffect, useState } from "react";
import { ContactFormContext } from "./ContactFormContext";

export default function ContactFormProvider({ children }) {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    companyName: "",
    country: "",
    solution: "Remote Design Partner",
    projectDescription: "",
    projectProgress: "",
    projectGoals: "",
    competitors: "",
    timeline: "",
  });

  return (
    <ContactFormContext.Provider value={{ contactData, setContactData }}>
      {children}
    </ContactFormContext.Provider>
  );
}
