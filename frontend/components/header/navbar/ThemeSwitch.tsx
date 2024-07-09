"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), [mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="py-2 px-4 flex items-center gap-1 text-white rounded transition duration-300"
    >
      <MoonIcon width={20} className="text-black dark:text-white"/>
    </button>
  );
};

export default ThemeSwitch;
