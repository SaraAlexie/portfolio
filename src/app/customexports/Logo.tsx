"use client";
import React from "react";
import SmartLink from "./SmartLink";

type LogoProps = {
    size?: number; // icon size in px
    className?: string;
    href?: string;
    ariaLabel?: string;
};

export default function Logo({
    size = 40,
    className = "",
    href = "/",
    ariaLabel = "Sara Alexie - Home",
}: LogoProps) {
    // CSS variable fallbacks in case vars are not defined globally
    const primary = "var(--color-primary, #6b2737)";
    const tertiary = "var(--color-tertiary, #d4a373)";
    const lightText = "var(--color-primary-text, #f4ede4)";

    const iconStyle: React.CSSProperties = {
        width: size,
        height: size,
        minWidth: size,
    };

    return (
        <SmartLink
            href={href}
            aria-label={ariaLabel}
            className={`inline-flex items-center gap-3 no-underline ${className}`}
        >
            {/* Icon (hexagon with code brackets) */}
            <svg
                viewBox="0 0 64 64"
                role="img"
                aria-hidden="true"
                style={iconStyle}
                className="flex-shrink-0"
            >
                {/* background hexagon */}
                <polygon
                    points="32,4 56,18 56,46 32,60 8,46 8,18"
                    fill={tertiary}
                    stroke={primary}
                    strokeWidth="1.5"
                />
                {/* inner hexagon outline for subtle depth */}
                <polygon
                    points="32,10 50,20 50,44 32,54 14,44 14,20"
                    fill="none"
                    stroke={lightText}
                    strokeOpacity="0.06"
                    strokeWidth="1"
                />
                {/* left bracket */}
                <path
                    d="M26 22 L20 32 L26 42"
                    stroke={primary}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
                {/* right bracket */}
                <path
                    d="M38 22 L44 32 L38 42"
                    stroke={primary}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>

            {/* Wordmark */}
            <span className="leading-none">
                <span className="font-semibold text-lg md:text-xl text-tertiary">
                    SaraAlexie
                </span>
            </span>
        </SmartLink>
    );
}
