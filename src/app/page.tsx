"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <Navbar />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}
