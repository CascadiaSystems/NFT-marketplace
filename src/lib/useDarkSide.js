import { useEffect, useMemo, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState("dark");

  const colorTheme = useMemo(() => {
    return theme === "dark" ? "light" : "dark";
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    //Save theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return { colorTheme, setTheme };
}
