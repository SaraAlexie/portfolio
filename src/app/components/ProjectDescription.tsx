"use client";

type ProjectInfoProps = {
    title: string;
    description: string;
};

export default function ProjectDescription({
    title,
    description,
}: ProjectInfoProps) {
    return (
        <>
            <h3 className="text-secondary font-semibold text-base mb-1 line-clamp-1">
                {title}
            </h3>
            <p className="text-primary-text text-xs line-clamp-3 flex-1">
                {description}
            </p>
        </>
    );
}
