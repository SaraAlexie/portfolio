"use client";
import Link from "next/link";
import SmartLink from "../customexports/SmartLink";

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto md:flex justify-between items-center p-4">
            <img
                src="/front-facing-pic.png"
                alt="headshot"
                className="rounded-full object-cover w-sm h-sm lg:w-96 lg:h-96 mx-auto md:mx-0"
            />
            <div className="text-left p-4">
                <p className="text-lg text-primary-text">Software Developer</p>
                <h1 className="text-secondary dark:text-primary">
                    Sara A. N. Nederskov
                </h1>
                <p className="text-primary-text">
                    Did you say creative, diligent and awesome programmer? No?
                    Well, good thing I did because that&apos;s what I am. I love
                    making beautiful and functional websites your customers are
                    going to enjoy using. Take a look around my portfolio and if
                    you are interested in connecting, don&apos;t stay a stranger
                    and reach out.
                </p>
                <div className="flex mt-2">
                    <button className="border-none py-3 px-6 rounded-lg text-base cursor-pointer mr-2 bg-primary text-secondary-text">
                        <Link
                            href="/sara-nederskov-resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </Link>
                    </button>
                    <button className="border-none py-3 px-6 rounded-lg text-base cursor-pointer bg-tertiary text-secondary">
                        <SmartLink href="https://github.com/SaraAlexie">
                            Github
                        </SmartLink>
                    </button>
                </div>
            </div>
        </section>
    );
}
