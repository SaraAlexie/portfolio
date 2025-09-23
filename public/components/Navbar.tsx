"use client";

export default function Navbar() {
    return (
        <div className="max-w-5xl my-0 mx-auto flex justify-between sm:relative">
            <p>Logo</p>
            <nav className="sm:mr-8">
                <ul className="self-center">
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
    );
}
