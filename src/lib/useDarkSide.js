import { useEffect, useMemo, useState } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "light"
  );

  const colorTheme = useMemo(() => {
    return theme === "dark" ? "light" : "dark";
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    //Save theme to local storage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme, colorTheme]);

  return { colorTheme, setTheme };
}
