import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import useDarkSide from "../../lib/useDarkSide";

export default function Swithcer() {
  const { colorTheme, setTheme } = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="color-switch mainside">
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={20}
        sunColor="white"
        moonColor="#8364e2"
      />
    </div>
  );
}
