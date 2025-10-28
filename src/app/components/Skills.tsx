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
    DiIntellij,
    DiNpm,
    DiSass,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";

export default function Skills() {
    const skills = [
        { title: "Html", icon: <DiHtml5 /> },
        { title: "CSS", icon: <DiCss3 /> },
        { title: "JavaScript", icon: <DiJavascript /> },
        { title: "React", icon: <DiReact /> },
        { title: "Node", icon: <DiNodejs /> },
        { title: "Tailwind", icon: <RiTailwindCssFill /> },
        { title: "Typescript", icon: <SiTypescript /> },
        { title: "Git", icon: <DiGit /> },
        { title: "Java", icon: <DiJava /> },
        { title: "Docker", icon: <DiDocker /> },
        { title: "Database", icon: <DiDatabase /> },
        { title: "IntelliJ", icon: <DiIntellij /> },
        { title: "NPM", icon: <DiNpm /> },
        { title: "Gulp", icon: <DiGulp /> },
        { title: "Sass", icon: <DiSass /> },
        { title: "Visual Studio Code", icon: <BiLogoVisualStudio /> },
    ];

    return (
        <section id="skills" className="max-w-5xl mx-auto px-4 py-8 bg-body-bg">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">
                Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-6 text-primary">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 w-24"
                    >
                        <div className="text-5xl">{skill.icon}</div>
                        <p className="text-sm font-medium text-center text-primary-text">
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
