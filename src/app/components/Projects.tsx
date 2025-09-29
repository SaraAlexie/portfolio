"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SmartLink from "../customexports/SmartLink";
import Modal from "./Modal";
import { projectSwiperConfig } from "./SwiperConfig";
import ProjectImage from "./ProjectImage";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/customswiper.css";

export type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    thumbnail: string;
    images?: string[];
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
        <section id="projects" className="pt-5 bg-gold">
            <h2 className="text-burgundy font-bold text-center">
                Selected projects
            </h2>

            <ul className="lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto my-4">
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
            </ul>

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
