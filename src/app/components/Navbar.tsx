"use client";
import { useState } from "react";
import SmartLink from "../customexports/SmartLink";

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
                <SmartLink
                    href="/"
                    className="w-10 h-10 rounded-full bg-cream flex items-center justify-center"
                >
                    <span className="text-burgundy font-extrabold text-lg">
                        {"</>"}
                    </span>
                </SmartLink>

                {/* Desktop nav */}
                <nav className="hidden sm:block sm:mr-8">
                    <ul className="flex gap-x-14">
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
                    <nav className="absolute top-full right-4 mt-2 bg-burgundy shadow-lg rounded-xl p-4 sm:hidden z-50">
                        <ul className="flex flex-col gap-2">
                            {navLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className="block cursor-pointer"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
