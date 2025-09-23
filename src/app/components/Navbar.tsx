"use client";
import { useState } from "react";

const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="max-w-5xl mx-auto flex justify-between items-center relative px-4 py-2">
            <p>Logo</p>

            {/* Desktop nav */}
            <nav className="hidden sm:block sm:mr-8">
                <ul className="flex justify-between w-48">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile menu button */}
            <button
                className="sm:hidden text-2xl"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                ☰
            </button>

            {/* Mobile dropdown */}
            {open && (
                <nav className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-xl p-4 sm:hidden z-50">
                    <ul className="flex flex-col gap-2">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
