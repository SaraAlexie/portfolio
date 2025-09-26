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
        { title: "Sass", icon: <DiSass /> },
        { title: "Visual Studio", icon: <DiVisualstudio /> },
    ];

    return (
        <section id="skills" className="max-w-5xl mx-auto px-4 py-8 bg-cream">
            <h2 className="text-2xl font-bold mb-6 text-center text-burgundy">
                Skills
            </h2>

            <div className="flex flex-wrap justify-center gap-6 text-burgundy">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 w-24"
                    >
                        <div className="text-5xl">{skill.icon}</div>
                        <p className="text-sm font-medium text-center text-written">
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
