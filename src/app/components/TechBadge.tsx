"use client";

export default function TechBadge({ label }: { label: string }) {
    return (
        <li className="px-3 py-1 rounded bg-taupe text-written text-sm sm:text-base">
            {label}
        </li>
    );
}
