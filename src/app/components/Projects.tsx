"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SmartLink from "../customexports/SmartLink";
import Modal from "../customexports/Modal";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/customswiper.css";

export type Project = {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
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
                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    spaceBetween={16}
                    centeredSlides={true}
                    initialSlide={0}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 12 },
                        640: { slidesPerView: 1, spaceBetween: 12 },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                            centeredSlides: false,
                        },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                >
                    {projects
                        .slice()
                        .reverse()
                        .map((project) => (
                            <SwiperSlide key={project.id}>
                                <li
                                    className="cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <img
                                        src={
                                            project.image ||
                                            "/projects/fallback-image.jpg"
                                        }
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top rounded-lg"
                                        draggable={false}
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
