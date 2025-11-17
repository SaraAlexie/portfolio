"use client";

type ProjectInfoProps = {
    title: string;
    tagline?: string;
};

export default function ProjectTagline({ title, tagline }: ProjectInfoProps) {
    return (
        <>
            <h3 className="text-primary-text font-semibold text-base mb-1 line-clamp-1">
                {title}
            </h3>
            <p className="text-primary-text text-xs line-clamp-2 flex-1">
                {tagline ? tagline : "Click for more details on this project"}
            </p>
        </>
    );
}
