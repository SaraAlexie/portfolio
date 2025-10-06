"use client";
import { useState } from "react";
import Logo from "../customexports/Logo";

const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-burgundy h-16">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4 h-full text-header font-bold">
                <Logo size={44} className="ml-0" href="/" />

                {/* Desktop nav */}
                <nav className="hidden sm:block sm:mr-8">
                    <ul className="flex gap-x-14">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="text-cream hover:text-gold transition-colors duration-200"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile menu button */}
                <button
                    className={`sm:hidden text-2xl text-cream transition-transform duration-300 ${
                        open ? "rotate-90 text-gold" : "rotate-0"
                    }`}
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    ☰
                </button>
            </div>

            {/* Mobile dropdown */}
            <nav
                className={`sm:hidden bg-burgundy/95 text-cream overflow-hidden transition-all duration-500 ease-in-out ${
                    open
                        ? "max-h-40 opacity-100 shadow-md"
                        : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-5 py-5">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block text-cream hover:text-gold transition-colors duration-200"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
