"use client";
import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { Laptop, Moon, Sun } from "lucide-react";

export default function ToggleThemeSwitch() {
  const { themes, setTheme, theme } = useTheme();
  return (
    <Button
      onClick={() => {
        setTheme(
          theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
        );
      }}
      className="w-full justify-start cursor-pointer"
    >
      {theme === "light" ? <Sun /> : theme === "dark" ? <Moon /> : <Laptop />}
      <span className="capitalize">{theme}</span>
    </Button>
  );
}
