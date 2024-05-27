"use client";

import React from "react";
import ThemeItem from "./themeItem/ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./Themes.css";
import { themes } from "@/src/data";

const getStorageColor = () => {
  let color = "hsl(252, 35%, 51%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const Themes = () => {
  const [showSwitcher, setShowSwitcher] = React.useState(false);
  const [color, setColor] = React.useState(getStorageColor());
  const [theme, setTheme] = React.useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  React.useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  React.useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitcher ? "show_switcher" : ""} style_switcher`}>
        <div
          className="style_switcher_toggle"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>

        <div className="theme_toggle" onClick={toggleTheme}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className="style_switcher_title">Style Switcher</h3>

        <div className="style_switcher_item">
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>

        <div
          className="style_switcher_close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
