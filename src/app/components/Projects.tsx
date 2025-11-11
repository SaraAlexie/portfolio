"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSwiperConfig } from "./SwiperConfig";
import SmartLink from "../customexports/SmartLink";
import Modal from "./Modal";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
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

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then(setProjects)
            .catch(console.error);
    }, []);

    return (
        <section id="projects" className="pt-5 bg-tertiary relative">
            <h2 className="text-primary font-bold text-center">
                Selected projects
            </h2>

            <div className="lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto my-4 relative">
                <Swiper
                    {...projectSwiperConfig}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{ el: paginationRef.current, clickable: true }}
                    onBeforeInit={(swiper) => {
                        // Bind navigation and pagination before init
                        // @ts-expect-error for deployment to work
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-expect-error for deployment to work
                        swiper.params.navigation.nextEl = nextRef.current;
                        // @ts-expect-error for deployment to work
                        swiper.params.pagination.el = paginationRef.current;
                    }}
                >
                    {projects
                        .slice()
                        .reverse()
                        .map((project) => (
                            <SwiperSlide key={project.id}>
                                <li
                                    className="group cursor-pointer rounded-xl overflow-hidden bg-body-bg
               transition-all duration-300 ease-out
                hover:shadow-lg relative
               w-72 h-96 mx-auto flex flex-col"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Image container - More space to image */}
                                    <div className="w-full h-64 overflow-hidden rounded-xl">
                                        <ProjectImage
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-cover rounded-xl
+                      transition-transform duration-300 group-hover:scale-110 backface-hidden"
                                        />
                                    </div>

                                    {/* Description always takes same leftover space */}
                                    <div className="p-3 flex-1 flex flex-col">
                                        <ProjectDescription
                                            title={project.title}
                                            description={project.description}
                                        />
                                    </div>

                                    {/* Hover overlay CTA */}
                                    <div
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100
+                  transition-opacity duration-300 flex items-center justify-center
+                  rounded-xl overflow-hidden"
                                    >
                                        <span className="text-white font-semibold text-sm">
                                            View Details
                                        </span>
                                    </div>
                                </li>
                            </SwiperSlide>
                        ))}
                </Swiper>

                {/* Pagination container */}
                <div ref={paginationRef} className="swiper-pagination" />

                {/* Custom Navigation Buttons */}
                <button
                    className="custom-prev hidden md:flex absolute -left-15 transform -translate-y-1/2 text-primary text-9xl"
                    aria-label="Previous slide"
                    ref={prevRef}
                >
                    ‹
                </button>
                <button
                    className="custom-next hidden md:flex absolute -right-15 transform -translate-y-1/2 text-primary text-9xl"
                    aria-label="Next slide"
                    ref={nextRef}
                >
                    ›
                </button>
            </div>

            <p className="text-primary text-center pb-2">
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
