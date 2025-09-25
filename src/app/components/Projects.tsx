"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then(setProjects)
            .catch(console.error);
    }, []);

    return (
        <section id="projects" className="pt-5 bg-main">
            <ul className="lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={16}
                    centeredSlides={true}
                    initialSlide={0}
                    /*autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}*/
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 12 }, // mobile-first
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                        }, // mobile
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                            centeredSlides: false,
                        }, // tablets
                        1024: { slidesPerView: 3, spaceBetween: 24 }, // desktop
                    }}
                >
                    {projects
                        .slice()
                        .reverse()
                        .map((project) => (
                            <SwiperSlide key={project.id}>
                                <li>
                                    <img
                                        src={
                                            project.image ||
                                            "/projects/fallback-image.jpg"
                                        }
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top"
                                        draggable={false}
                                    />
                                </li>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </ul>
        </section>
    );
}
