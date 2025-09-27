"use client";
import { useEffect, useState } from "react";
import SmartLink from "./customexports/SmartLink";

export default function Custom404() {
    const [bounce, setBounce] = useState(false);

    // Toggle bounce animation every second
    useEffect(() => {
        const interval = setInterval(() => setBounce((prev) => !prev), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-burgundy to-burgundy-dark px-4 text-cream">
            {/* Animated 404 */}
            <h1
                className={`text-9xl sm:text-[12rem] font-extrabold mb-4 transition-transform duration-500 ${
                    bounce ? "translate-y-[-10px]" : "translate-y-[10px]"
                }`}
            >
                404
            </h1>

            {/* Subtitle */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gold text-center">
                Page Not Found
            </h2>

            {/* Description */}
            <p className="text-taupe text-center mb-8 max-w-lg sm:text-lg">
                Oops! The page you’re looking for doesn’t exist. Maybe the URL
                is wrong, or the page has been moved.
            </p>

            {/* CTA */}
            <SmartLink
                href="/"
                className="bg-gold text-burgundy font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gold-light transition"
            >
                Go Back Home
            </SmartLink>
        </main>
    );
}
