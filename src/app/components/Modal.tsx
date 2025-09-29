"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { modalSwiperConfig } from "./SwiperConfig";
import { Project } from "./Projects";
import ProjectImage from "./ProjectImage";
import ProjectLinks from "./ProjectLinks";
import TechBadge from "./TechBadge";
import "swiper/css";
import "swiper/css/pagination";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
};

export default function Modal({ isOpen, onClose, project }: ModalProps) {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const allImages = [project.thumbnail, ...(project.images || [])];

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-cream rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl font-bold text-burgundy-dark cursor-pointer"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-burgundy">
                    {project.title}
                </h2>

                {/* Image carousel */}
                {allImages.length > 0 && (
                    <Swiper {...modalSwiperConfig} className="mb-6">
                        {allImages.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <ProjectImage
                                    src={img}
                                    alt={`${project.title} image ${idx + 1}`}
                                    className="h-80 sm:h-96"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

                {/* Description */}
                <p className="text-written text-base sm:text-lg mb-4">
                    {project.description}
                </p>

                {/* Tech stack */}
                {project.tech.length > 0 && (
                    <ul className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                            <TechBadge key={t} label={t} />
                        ))}
                    </ul>
                )}

                {/* Links */}
                <ProjectLinks project={project} />
            </div>
        </div>
    );
}
