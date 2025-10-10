"use client";
import { useState } from "react";

export default function ToggleTheme() {
    const [isDark, setIsDark] = useState(false);

    return (
        <button
            onClick={() => {
                setIsDark(!isDark);
                document.documentElement.classList.toggle("dark");
            }}
            className="px-4 py-2 rounded transition"
        >
            {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}
