"use client";

import React from "react";
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
import { motion } from "framer-motion";

export default function Skills() {
    const skills = [
        { title: "HTML", icon: <DiHtml5 /> },
        { title: "CSS", icon: <DiCss3 /> },
        { title: "JavaScript", icon: <DiJavascript /> },
        { title: "React", icon: <DiReact /> },
        { title: "Node.js", icon: <DiNodejs /> },
        { title: "Tailwind", icon: <RiTailwindCssFill /> },
        { title: "TypeScript", icon: <SiTypescript /> },
        { title: "Git", icon: <DiGit /> },
        { title: "Java", icon: <DiJava /> },
        { title: "Docker", icon: <DiDocker /> },
        { title: "Database", icon: <DiDatabase /> },
        { title: "IntelliJ", icon: <DiIntellij /> },
        { title: "NPM", icon: <DiNpm /> },
        { title: "Gulp", icon: <DiGulp /> },
        { title: "Sass", icon: <DiSass /> },
        { title: "VS Code", icon: <BiLogoVisualStudio /> },
    ];

    // Framer Motion variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary tracking-tight">
                Skills
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap justify-center gap-8 text-primary"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.08 }}
                        transition={{
                            type: "spring",
                            stiffness: 220,
                            damping: 18,
                        }}
                        className="flex flex-col items-center gap-2 w-24 cursor-default select-none"
                    >
                        <div className="text-5xl drop-shadow-sm">
                            {skill.icon}
                        </div>
                        <p className="text-sm font-medium text-primary-text text-center">
                            {skill.title}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
