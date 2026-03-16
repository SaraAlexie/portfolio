"use client";
import {
    DiReact,
    DiJavascript,
    DiHtml5,
    DiCss3,
    DiNodejs,
    DiJava,
    DiDocker,
    DiGit,
    DiDatabase,
    DiGulp,
    DiNpm,
    DiSass,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiCypress, SiJest } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

const skillCategories = [
    {
        label: "Languages",
        skills: [
            { title: "HTML", icon: <DiHtml5 /> },
            { title: "CSS", icon: <DiCss3 /> },
            { title: "JavaScript", icon: <DiJavascript /> },
            { title: "TypeScript", icon: <SiTypescript /> },
            { title: "Java", icon: <DiJava /> },
        ],
    },
    {
        label: "Frameworks & Libraries",
        skills: [
            { title: "React", icon: <DiReact /> },
            { title: "Next.js", icon: <SiNextdotjs /> },
            { title: "Vue.js", icon: <FaVuejs /> },
            { title: "Node.js", icon: <DiNodejs /> },
            { title: "Tailwind", icon: <RiTailwindCssFill /> },
            { title: "Sass", icon: <DiSass /> },
            { title: "Spring Boot", icon: <BiLogoSpringBoot /> },
        ],
    },
    {
        label: "Tools & DevOps",
        skills: [
            { title: "Git", icon: <DiGit /> },
            { title: "Docker", icon: <DiDocker /> },
            { title: "Database", icon: <DiDatabase /> },
            { title: "NPM", icon: <DiNpm /> },
            { title: "Gulp", icon: <DiGulp /> },
        ],
    },
    {
        label: "Testing",
        skills: [
            { title: "Jest", icon: <SiJest /> },
            { title: "Cypress", icon: <SiCypress /> },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="max-w-5xl mx-auto px-4 py-8 bg-body-bg">
            <h2 className="text-2xl font-bold mb-10 text-center text-primary">
                Skills
            </h2>
            <div className="flex flex-col gap-10">
                {skillCategories.map((category) => (
                    <div key={category.label}>
                        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-text/60 mb-4 text-center">
                            {category.label}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.title}
                                    className="group flex flex-col items-center gap-2 w-20 cursor-default"
                                >
                                    <div className="text-5xl text-primary transition-transform duration-200 ease-out group-hover:scale-125 group-hover:text-accent">
                                        {skill.icon}
                                    </div>
                                    <p className="text-xs font-medium text-center text-primary-text transition-opacity duration-200 group-hover:opacity-100 opacity-70">
                                        {skill.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
