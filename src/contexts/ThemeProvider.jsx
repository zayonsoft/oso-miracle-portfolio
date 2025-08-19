import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let savedTheme = localStorage.getItem("pageZsTheme") || "light";
    document.documentElement.className = savedTheme;
    setTheme(savedTheme);
  }, []);

  function toggleTheme() {
    const newTheme = theme == "light" ? "dark" : "light";
    document.documentElement.className = newTheme;
    setTheme(newTheme);
    localStorage.setItem("pageZsTheme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
