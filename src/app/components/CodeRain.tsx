"use client";
import { useEffect, useRef } from "react";

export default function CodeRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const characters = "</>{}()[]=+-;:/*%";
        const fontSize = 18;

        let columns: number;
        let drops: number[];
        let animationFrame: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / fontSize);
            drops = Array.from({ length: columns }, () => 1);
        };

        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            // Transparent fade trails
            ctx.fillStyle = "rgba(244,237,228,0.01)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const xBase = i * fontSize;
                const char =
                    characters[Math.floor(Math.random() * characters.length)];

                // Tiny horizontal drift
                const x = xBase + Math.sin(Date.now() / 200 + i) * 2;

                // Glow effect (stronger on special color)
                const isSpecial = Math.random() > 0.88;
                ctx.fillStyle = isSpecial ? "#6b2737" : "#d4a373";
                ctx.shadowColor = ctx.fillStyle;
                ctx.shadowBlur = isSpecial ? 10 : 6;

                ctx.fillText(char, x, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });

            animationFrame = requestAnimationFrame(draw);
        };

        const start = () => {
            canvas.style.opacity = "1";
            draw();
            setTimeout(stop, 3000);
        };

        const stop = () => {
            canvas.style.opacity = "0";
            setTimeout(() => cancelAnimationFrame(animationFrame), 700);
        };

        const trigger = () => start();
        window.addEventListener("darkModeDoubleToggle", trigger);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("darkModeDoubleToggle", trigger);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-700"
            style={{ background: "transparent" }}
        />
    );
}
