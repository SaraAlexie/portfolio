"use client";
import { useDimension } from "../contexts/DimentionContext";

export default function Navbar() {
    const { dimension } = useDimension();

    if (!dimension) return null;

    return dimension.width > 640 ? (
        <div className="max-w-5xl my-0 mx-auto flex justify-between sm:relative">
            <p>Logo</p>
            <nav className="sm:mr-8">
                <ul className="self-center flex justify-between w-48">
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    ) : (
        <p>Hej</p>
    );
}
