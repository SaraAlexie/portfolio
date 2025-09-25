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
    DiVisualstudio,
} from "react-icons/di";

export default function Skills() {
    const skills = [
        { title: "Html", icon: <DiHtml5 /> },
        { title: "CSS", icon: <DiCss3 /> },
        { title: "JavaScript", icon: <DiJavascript /> },
        { title: "React", icon: <DiReact /> },
        { title: "Node", icon: <DiNodejs /> },
        { title: "Git", icon: <DiGit /> },
        { title: "Java", icon: <DiJava /> },
        { title: "Docker", icon: <DiDocker /> },
        { title: "Database", icon: <DiDatabase /> },
        { title: "IntelliJ", icon: <DiIntellij /> },
        { title: "NPM", icon: <DiNpm /> },
        { title: "Gulp", icon: <DiGulp /> },
        { title: "Sass ", icon: <DiSass /> },
        { title: "Visual Studio", icon: <DiVisualstudio /> },
    ];

    return (
        <section
            id="skills"
            className="lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto flex justify-between items-center"
        >
            {skills.map((skill, index) => (
                <p key={index}>{skill.icon}</p>
            ))}
        </section>
    );
}
