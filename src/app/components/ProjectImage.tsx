"use client";

type ProjectImageProps = {
    src?: string;
    alt: string;
    className?: string;
};

export default function ProjectImage({
    src,
    alt,
    className,
}: ProjectImageProps) {
    return (
        <img
            src={src || "/projects/fallback-image.jpg"}
            alt={alt}
            className={`w-full object-cover rounded ${className || ""}`}
            draggable={false}
        />
    );
}
