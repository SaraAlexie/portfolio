"use client";
import SmartLink from "../customexports/SmartLink";
import { Project } from "./Projects";

const linkStyles: Record<string, string> = {
    live: "bg-tertiary text-tech-text hover:bg-btn-bg-secondary",
    demo: "bg-secondary text-nav-link-text hover:bg-primary",
    code: "bg-secondary text-nav-link-text hover:bg-primary",
    api: "bg-secondary text-nav-link-text hover:bg-primary",
};

export default function ProjectLinks({ project }: { project: Project }) {
    const links = [
        { label: "Live", href: project.live, style: linkStyles.live },
        { label: "Demo", href: project.demo, style: linkStyles.demo },
        { label: "Code", href: project.code, style: linkStyles.code },
        { label: "API", href: project.api, style: linkStyles.api },
    ];

    return (
        <div className="flex flex-wrap gap-4 mt-2">
            {links
                .filter((link) => link.href)
                .map((link) => (
                    <SmartLink
                        key={link.label}
                        href={link.href!}
                        className={`px-4 py-2 font-bold rounded transition ${link.style}`}
                    >
                        {link.label}
                    </SmartLink>
                ))}
        </div>
    );
}
