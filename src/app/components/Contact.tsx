"use client";
import { FaLinkedin } from "react-icons/fa";
import SmartLink from "../customexports/SmartLink";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-burgundy text-cream text-center py-12"
        >
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="mb-6">
                If you want to get in touch or learn more about my skillset,
                please visit my LinkedIn page
            </p>
            <SmartLink
                href="https://linkedin.com/in/saranederskov"
                className="inline-flex items-center gap-2 bg-gold text-written font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gold-light transition"
            >
                <FaLinkedin size={20} />
                LinkedIn
            </SmartLink>
        </section>
    );
}
