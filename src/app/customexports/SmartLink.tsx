"use client";
import Link from "next/link";
import { ReactNode } from "react";

type SmartLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

export default function SmartLink({
    href,
    children,
    className,
}: SmartLinkProps) {
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}
