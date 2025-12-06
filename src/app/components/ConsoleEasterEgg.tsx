"use client";
import { useEffect } from "react";

export default function ConsoleEasterEgg() {
    useEffect(() => {
        console.log(`
        < SURPRISE />
    `);

        console.log(
            "👋 Hey fellow developer! You’ve unlocked a hidden console interface. Try: console.help()"
        );

        const api: Partial<Console> = {
            help: () => {
                console.log(`
Available commands:

console.help()        → Show this menu
console.about()       → Show tech stack and portfolio info
console.joke()        → Random dev jokes
console.rain()        → Manually activate code rain
                `);
            },

            about: () => {
                console.log(`
Stack & other fun facts:

Made with Next.js, TypeScript and Tailwind
Design by: Yours truly
Easter eggs: you found this, how many more to go?

Hint: try toggling dark mode a few times 😉
                    `);
            },

            joke: () => {
                const jokes = [
                    "Why do programmers prefer dark mode? Because the light attracts bugs.",
                    "There are 10 types of people: those who understand binary and those who don't.",
                    "A UDP joke? Might not get it…",
                    "Why do Java devs always wear glasses? Because they can't C#",
                    "Why did the programmer go broke? Because he used up all his cache",
                    "Why was the computer cold? Because it left it's windows open",
                    "Why do astronauts use Linux? Because they can't open windows in space",
                ];

                console.log(
                    "💬 " + jokes[Math.floor(Math.random() * jokes.length)]
                );
            },

            rain: () => {
                window.dispatchEvent(new CustomEvent("darkModeDoubleToggle"));
                console.log("🌧️ Let it rain…");
            },
        };

        Object.assign(window.console, api);
    }, []);

    return null;
}
