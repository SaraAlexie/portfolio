"use client";
import { useEffect } from "react";
import { Project } from "../components/Projects";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
};

export default function Modal({ isOpen, onClose, project }: ModalProps) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-rgba(0,0,0,0.6)"
            onClick={onClose}
        >
            <div
                className="rounded-lg max-w-lg w-full p-6 relative bg-cream"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 font-bold text-xl text-burgundy-dark cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-4 text-burgundy">
                    {project.title}
                </h2>
                <img
                    src={project.image || "/projects/fallback-image.jpg"}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-written">{project.description}</p>

                {project.tech && (
                    <ul className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((t) => (
                            <li
                                key={t}
                                className="px-2 py-1 rounded bg-taupe text-written"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
