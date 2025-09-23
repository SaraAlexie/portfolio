"use client";
import { DimensionProvider } from "./contexts/DimentionContext";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
    return (
        <DimensionProvider>
            <div className="text-center">
                <h1 className="mb-10 text-5xl font-bold">Sara's portfolio</h1>
                <Navbar />
                <Projects />
            </div>
        </DimensionProvider>
    );
}
