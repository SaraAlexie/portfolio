"use client";
import { useEffect, useState } from "react";
import SmartLink from "./customexports/SmartLink";

export default function Custom404() {
    const [bounce, setBounce] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => setBounce((prev) => !prev), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary-dark px-4 text-light-text">
            <h1
                className={`text-9xl sm:text-[12rem] font-extrabold mb-4 transition-transform duration-500 ${
                    bounce ? "translate-y-[-10px]" : "translate-y-[10px]"
                }`}
            >
                404
            </h1>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-secondary text-center">
                Page Not Found
            </h2>

            <p className="text-btn-bg-primary text-center mb-8 max-w-lg sm:text-lg">
                Oops! The page you’re looking for doesn’t exist. Maybe the URL
                is wrong, or the page has been moved.
            </p>

            <SmartLink
                href="/"
                className="bg-secondary text-primary font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-btn-bg-secondary transition"
            >
                Go Back Home
            </SmartLink>
        </main>
    );
}
