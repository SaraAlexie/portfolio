"use client";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const useDark = savedTheme === "dark" || (!savedTheme && prefersDark);

        setIsDark(useDark);
        document.documentElement.classList.toggle("dark", useDark);
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle("dark", newIsDark);
        localStorage.setItem("theme", newIsDark ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-14 h-7 flex items-center p-1 rounded-full bg-[--color-btn-bg-primary] relative transition-colors duration-300"
        >
            {/* Sliding circle container */}
            <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full shadow-md transform transition-transform duration-500
          ${isDark ? "translate-x-7" : "translate-x-0"}`}
            >
                {/* Sun SVG */}
                <svg
                    className={`w-5 h-5 text-yellow-400 transition-opacity duration-500 ${
                        isDark ? "opacity-0" : "opacity-100"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <circle cx="12" cy="12" r="5" />
                    <g stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="3" />
                        <line x1="12" y1="21" x2="12" y2="23" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                        <line x1="1" y1="12" x2="3" y2="12" />
                        <line x1="21" y1="12" x2="23" y2="12" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                </svg>

                {/* Moon SVG */}
                <svg
                    className={`w-5 h-5 text-gray-200 transition-opacity duration-500 absolute top-0 left-0
            ${isDark ? "opacity-100" : "opacity-0"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
            </span>
        </button>
    );
}
