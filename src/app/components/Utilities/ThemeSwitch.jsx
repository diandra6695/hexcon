"use client";
import { SunDim, Moon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="">loading</div>;
  if (resolvedTheme == "dark") {
    return <SunDim onClick={() => setTheme("light")} size={25} />;
  }

  if (resolvedTheme == "light") {
    return <Moon onClick={() => setTheme("dark")} size={25} />;
  }
};

export default ThemeSwitch;
