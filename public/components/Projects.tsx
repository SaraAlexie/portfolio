"use client";
import { useEffect, useState } from "react";

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

    return projects ? (
        <section className="py-12 bg-green-400">
            <ul>
                {projects?.map((project) => (
                    <li key={project.id}>
                        <img src={project.image} alt="fhgjhgjgf" />
                    </li>
                ))}
            </ul>
        </section>
    ) : (
        <h2 className="text-center font-bold">
            Projects cannot be shown at the moment
        </h2>
    );
}
