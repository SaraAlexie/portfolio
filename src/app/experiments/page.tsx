"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export type Project = {
    id: number;
    title: string;
    tagline: string;
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

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then(setProjects)
            .catch(console.error);
    }, []);

    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">
                Projects
            </h2>

            <div
                className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory
          scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400
        "
            >
                {projects.map((project) => (
                    <motion.article
                        className="
    min-w-[260px] max-w-[260px]
    sm:min-w-[320px] sm:max-w-[320px]
    md:min-w-[380px] md:max-w-[380px]
    lg:min-w-[420px] lg:max-w-[420px]

    min-h-[420px] sm:min-h-[480px] md:min-h-[500px]

    bg-card border border-border rounded-2xl
    shadow-sm md:shadow-md

    snap-start md:snap-center
    flex-shrink-0 flex flex-col
  "
                    >
                        <div className="w-full aspect-[4/3] overflow-hidden rounded-t-2xl bg-muted">
                            <img
                                src={project.thumbnail}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 flex-grow">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                                {project.title}
                            </h3>

                            <p className="text-xs sm:text-sm opacity-80 line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
