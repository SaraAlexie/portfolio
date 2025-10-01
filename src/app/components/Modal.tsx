"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { modalSwiperConfig } from "./SwiperConfig";
import { Project } from "./Projects";
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

    // Collect media (videos + images). Fallback to thumbnail if none exist.
    const mediaItems = [...(project.videos || []), ...(project.images || [])];
    const hasMedia = mediaItems.length > 0;

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

                {/* Media carousel */}
                {hasMedia ? (
                    <>
                        <Swiper {...modalSwiperConfig} className="mb-6">
                            {project.images?.map((img, index) => (
                                <SwiperSlide key={`image-${index}`}>
                                    <div className="flex items-center justify-center w-full h-80 sm:h-96 bg-cream rounded">
                                        <img
                                            src={img}
                                            alt={`${project.title} image ${
                                                index + 1
                                            }`}
                                            className="max-h-full max-w-full object-contain rounded"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                            {project.videos?.map((video, index) => (
                                <SwiperSlide key={`video-${index}`}>
                                    <div className="flex items-center justify-center w-full h-80 sm:h-96 bg-black rounded">
                                        <video
                                            controls
                                            className="max-h-full max-w-full object-contain rounded"
                                        >
                                            <source
                                                src={video}
                                                type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                        </video>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="custom-prev hidden md:flex absolute -left-1 transform -translate-y-1/2 text-burgundy text-9xl">
                            ‹
                        </button>
                        <button className="custom-next hidden md:flex absolute -right-1 transform -translate-y-1/2 text-burgundy text-9xl">
                            ›
                        </button>
                    </>
                ) : (
                    // Fallback: show thumbnail if no other media exists
                    <div className="flex items-center justify-center w-full h-80 sm:h-96 bg-cream mb-6 rounded">
                        <img
                            src={project.thumbnail}
                            alt={`${project.title} thumbnail`}
                            className="max-h-full max-w-full object-contain rounded"
                        />
                    </div>
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
