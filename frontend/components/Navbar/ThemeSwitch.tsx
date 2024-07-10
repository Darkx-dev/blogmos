"use client";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <button onClick={handleTheme}>
      {resolvedTheme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeSwitch;
