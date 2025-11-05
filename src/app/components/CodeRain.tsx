"use client";
import { useEffect, useRef } from "react";

export default function CodeRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d")!;
        let animationFrame: number;
        const characters = "アイウエオカキクケコサシスセソ0123456789<>[]{}";
        const fontSize = 16;
        let columns: number;
        let drops: number[];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / fontSize);
            drops = Array.from({ length: columns }, () => 1);
        };

        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            // Fade canvas slightly for trailing effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, i) => {
                const text =
                    characters[Math.floor(Math.random() * characters.length)];
                const x = i * fontSize;
                ctx.fillText(text, x, y * fontSize);

                // reset drop randomly after screen ends
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });

            animationFrame = requestAnimationFrame(draw);
        };

        const startRain = () => {
            canvas.style.opacity = "1";
            draw();
            setTimeout(stopRain, 3000);
        };

        const stopRain = () => {
            canvas.style.opacity = "0";
            setTimeout(() => cancelAnimationFrame(animationFrame), 700);
        };

        const handler = () => startRain();
        window.addEventListener("darkModeDoubleToggle", handler);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("darkModeDoubleToggle", handler);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999] opacity-0 transition-opacity duration-700"
        />
    );
}
