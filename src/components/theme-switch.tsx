"use client";

import { Button } from "~/components/ui/button";
import { useTheme } from "./theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  function handleClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <Icon width={20} height={20} className="text-black dark:text-white" />
    </Button>
  );
}

export { ThemeSwitch };
