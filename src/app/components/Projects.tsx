"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { projectSwiperConfig } from "./SwiperConfig";
import SmartLink from "../customexports/SmartLink";
import Modal from "./Modal";
import ProjectImage from "./ProjectImage";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/customswiper.css";

export type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    thumbnail: string;
    images?: string[];
    videos?: string[];
    live?: string;
    demo?: string;
    code?: string;
    api?: string;
};

export default function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then(setProjects)
            .catch(console.error);
    }, []);

    return (
        <section id="projects" className="pt-5 bg-gold relative">
            <h2 className="text-burgundy font-bold text-center">
                Selected projects
            </h2>

            <div className="lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto my-4 relative">
                <Swiper {...projectSwiperConfig}>
                    {projects
                        .slice()
                        .reverse()
                        .map((project) => (
                            <SwiperSlide key={project.id}>
                                <li
                                    className="cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <ProjectImage
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="h-full"
                                    />
                                </li>
                            </SwiperSlide>
                        ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <button
                    className="custom-prev hidden md:flex absolute -left-15 transform -translate-y-1/2 text-burgundy text-9xl"
                    aria-label="Previous slide"
                >
                    ‹
                </button>
                <button
                    className="custom-next hidden md:flex absolute -right-15 transform -translate-y-1/2 text-burgundy text-9xl"
                    aria-label="Next slide"
                >
                    ›
                </button>
            </div>

            <p className="text-burgundy text-center pb-2">
                For more see my{" "}
                <SmartLink
                    href="https://github.com/SaraAlexie"
                    className="font-bold"
                >
                    Github
                </SmartLink>
            </p>

            {/* Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
}
