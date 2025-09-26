"use client";
import { DiReact } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="bg-gold">
            <p className="text-burgundy w-64 m-auto">
                Made with <DiReact /> and <RiTailwindCssFill /> by SaraAlexie
            </p>
        </footer>
    );
}
