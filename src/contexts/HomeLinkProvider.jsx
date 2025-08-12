import { HomeLinkContext } from "./HomeLinkContext";
import { useState } from "react";

export default function HomeLinkProvider({ children }) {
  const [homeLinkClicked, setHomeLinkClicked] = useState(false);
  return (
    <HomeLinkContext.Provider value={{ homeLinkClicked, setHomeLinkClicked }}>
      {children}
    </HomeLinkContext.Provider>
  );
}
