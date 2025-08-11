import { useState } from "react";
import { NavHeightContext } from "./NavHeightContext";

export default function NavHeightProvider({ children }) {
  const [navHeight, setNavHeight] = useState();

  return (
    <NavHeightContext.Provider value={{ navHeight, setNavHeight }}>
      {children}
    </NavHeightContext.Provider>
  );
}
