import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavHeightContext } from "./contexts/NavHeightContext";

export default function ScrollController() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
