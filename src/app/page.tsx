"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <div className="text-center">
            <Navbar />
            <Hero />
            <Projects />
        </div>
    );
}
