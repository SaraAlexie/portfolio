"use client";
import Link from "next/link";
import SmartLink from "../customexports/SmartLink";

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto md:flex justify-between items-center p-4">
            <img
                src="/framed-profile.png"
                alt="headshot"
                className="rounded-full object-cover w-sm h-sm lg:w-96 lg:h-96 mx-auto md:mx-0"
            />
            <div className="text-left p-4">
                <p className="text-lg">Software Developer</p>
                <h1 className="text-burgundy-dark">Sara A. N. Nederskov</h1>
                <p>
                    Did you say creative, diligent and awesome programmer? No?
                    Well, good thing I did because that&apos;s what I am. I love
                    making beautiful and functional websites your customers are
                    going to enjoy using. Take a look around my portfolio and if
                    you are interested in connecting, don&apos;t stay a stranger
                    and reach out.
                </p>
                <div className="flex mt-2">
                    <button className="border-none py-3 px-6 rounded-lg text-base cursor-pointer mr-2 bg-burgundy text-cream">
                        <Link
                            href="/resume-sara-nederskov-english.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </Link>
                    </button>
                    <button className="border-none py-3 px-6 rounded-lg text-base cursor-pointer bg-gold text-burgundy-dark">
                        <SmartLink href="https://github.com/SaraAlexie">
                            Github
                        </SmartLink>
                    </button>
                </div>
            </div>
        </section>
    );
}
