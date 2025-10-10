"use client";

export default function TechBadge({ label }: { label: string }) {
    return (
        <li className="px-3 py-1 rounded bg-btn-bg-primary text-inverse-text text-sm sm:text-base">
            {label}
        </li>
    );
}
