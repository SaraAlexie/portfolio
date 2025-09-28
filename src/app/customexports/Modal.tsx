"use client";
import { useEffect } from "react";
import { Project } from "../components/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SmartLink from "./SmartLink";
import "swiper/css";
import "swiper/css/pagination";

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
                {project.image && (
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={10}
                        className="mb-6"
                    >
                        {/* Support multiple images */}
                        {Array.isArray(project.image) ? (
                            project.image.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <img
                                        src={img}
                                        alt={`${project.title} image ${
                                            idx + 1
                                        }`}
                                        className="w-full h-80 sm:h-96 object-cover rounded"
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-80 sm:h-96 object-cover rounded"
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                )}

                {/* Description */}
                <p className="text-written text-base sm:text-lg mb-4">
                    {project.description}
                </p>

                {/* Tech stack */}
                {project.tech && (
                    <ul className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                            <li
                                key={t}
                                className="px-3 py-1 rounded bg-taupe text-written text-sm sm:text-base"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-2">
                    {project.live && (
                        <SmartLink
                            href={project.live}
                            className="px-4 py-2 bg-gold text-written font-bold rounded hover:bg-gold-light transition"
                        >
                            Live
                        </SmartLink>
                    )}
                    {project.demo && (
                        <SmartLink
                            href={project.demo}
                            className="px-4 py-2 bg-burgundy text-cream font-bold rounded hover:bg-burgundy-dark transition"
                        >
                            Demo
                        </SmartLink>
                    )}
                    {project.code && (
                        <SmartLink
                            href={project.code}
                            className="px-4 py-2 bg-taupe text-written font-bold rounded hover:bg-gold-light transition"
                        >
                            Code
                        </SmartLink>
                    )}
                    {project.api && (
                        <SmartLink
                            href={project.api}
                            className="px-4 py-2 bg-burgundy-dark text-cream font-bold rounded hover:bg-burgundy transition"
                        >
                            API
                        </SmartLink>
                    )}
                </div>
            </div>
        </div>
    );
}
