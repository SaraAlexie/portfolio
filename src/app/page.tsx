"use client";
import Navbar from "../../public/components/Navbar";
import Projects from "../../public/components/Projects";

export default function Home() {
    return (
        <div className="text-center bg-red-500">
            <h1 className="mb-10 text-5xl font-bold">Sara's portfolio</h1>
            <Navbar />
            <Projects />
        </div>
    );
}
