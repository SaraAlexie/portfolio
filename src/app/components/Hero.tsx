"use client";
import SmartLink from "../customexports/SmartLink";

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto md:flex justify-between items-center p-4">
            <img
                src="/sun_cartoonyfied.png"
                alt="headshot placeholder"
                className="rounded-full"
            />
            <div className="text-left p-4">
                <p className="text-lg">Software Developer</p>
                <h1 className="text-burgundy-dark">Sara A. N. Nederskov</h1>
                <p>
                    Sit in box lick sellotape and scoot butt on the rug, take a
                    deep sniff of sock then walk around with mouth half open.
                    Poop on floor and watch human clean up time to go zooooom.
                    Play riveting piece on synthesizer keyboard instead of
                    drinking water from the cat bowl, make sure to steal water
                    from the toilet yet get scared by sudden appearance of
                    cucumber.
                </p>
                <div className="flex mt-2">
                    <button className="border-none py-3 px-6 rounded-lg text-base cursor-pointer mr-2 bg-burgundy text-cream">
                        Resume
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
