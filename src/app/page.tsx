"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
    return (
        <div className="text-center">
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
        </div>
    );
}
