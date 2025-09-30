"use client";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import SmartLink from "../customexports/SmartLink";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gold-light to-gold py-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-burgundy text-sm sm:text-base">
                <span className="flex items-center gap-2">
                    Made with{" "}
                    <FaReact className="text-2xl inline transition-transform duration-200 hover:scale-110" />
                    <SiTypescript className="text-2xl inline transition-transform duration-200 hover:scale-110" />
                    and{" "}
                    <RiTailwindCssFill className="text-2xl inline transition-transform duration-200 hover:scale-110" />
                </span>
                <SmartLink
                    href="/"
                    className="font-semibold underline hover:text-burgundy-dark transition"
                >
                    by SaraAlexie
                </SmartLink>
            </div>
        </footer>
    );
}
