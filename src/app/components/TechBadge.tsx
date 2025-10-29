"use client";

export default function TechBadge({ label }: { label: string }) {
    return (
        <li className="px-3 py-1 rounded bg-tech-bg text-tech-text text-sm sm:text-base">
            {label}
        </li>
    );
}
