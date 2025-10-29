"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Navbar />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
