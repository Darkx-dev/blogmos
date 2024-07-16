"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  
  const handleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);

  if (mounted)
    return (
      <button
        onClick={handleTheme}
        className="h-full gap-2 flex md:w-28 items-center"
      >
        {resolvedTheme === "dark" ? (
          <IconSun size={25} />
        ) : (
          <IconMoon size={25} />
        )}
        <span className="text-sm max-sm:hidden">
          {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    );
};

export default ThemeSwitch;
