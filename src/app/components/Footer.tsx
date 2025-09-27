"use client";
import { DiReact } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import SmartLink from "../customexports/SmartLink";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gold-light to-gold py-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-burgundy text-sm sm:text-base">
                <span className="flex items-center gap-2">
                    Made with{" "}
                    <DiReact className="text-2xl inline transition-transform duration-200 hover:scale-110" />{" "}
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
