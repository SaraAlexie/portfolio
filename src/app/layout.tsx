import type { Metadata } from "next";
import "./globals.css";
import CodeRain from "./components/CodeRain";
import ConsoleEasterEgg from "./components/ConsoleEasterEgg";

export const metadata: Metadata = {
    title: "Sara Nederskov - Software Developer",
    description: `Did you say creative, diligent and awesome programmer? No?
                    Well, good thing I did because that&apos;s what I am. I love
                    making beautiful and functional websites your customers are
                    going to enjoy using. Take a look around my portfolio and if
                    you are interested in connecting, don't stay a stranger and
                    reach out.`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <CodeRain />
                <ConsoleEasterEgg />
            </body>
        </html>
    );
}
