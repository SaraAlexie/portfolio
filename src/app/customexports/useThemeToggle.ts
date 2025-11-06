"use client";
import { useState, useEffect } from "react";

/**
 * Easter Egg Trigger:
 * Rain happens when dark mode is enabled for the 2nd, 4th, 6th... time.
 * Event: "darkModeDoubleToggle"
 */

export function useThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [darkActivations, setDarkActivations] = useState(0);

  // Apply saved theme + OS preference on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const useDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;

    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");

    // Track dark activations for Easter egg trigger
    if (newIsDark) {
      setDarkActivations((prev) => {
        const next = prev + 1;

        // Only trigger on 2nd, 4th, 6th... dark mode toggle
        if (next % 2 === 0) {
          window.dispatchEvent(new CustomEvent("darkModeDoubleToggle"));
        }

        return next;
      });
    }
  };

  return { isDark, toggleTheme };
}
