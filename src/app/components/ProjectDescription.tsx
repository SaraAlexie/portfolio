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
        <div>
            <h2 className="text-secondary">{title}</h2>
            <p className="text-primary-text">{description}</p>
        </div>
    );
}
