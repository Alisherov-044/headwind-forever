import Image from "next/image";
import { Hero } from "./sections/hero";
import { Feature } from "./sections/feature";
import { Pricing } from "./sections/pricing";
import { Stats } from "./sections/stats";
import { CTA } from "./sections/cta";
import { LogoCloud } from "./sections/logoCloud";

export default function Home() {
    return (
        <main className="w-full">
            <Image
                fill
                src="/hero/shadow.png"
                alt="hero background"
                className="absolute hidden xl:block top-0 right-0 translate-x-1/4 object-contain -z-10 -rotate-90"
            />
            <Image
                src="/hero/grid.png"
                width={900}
                height={900}
                alt="hero background"
                className="absolute object-cover top-0 left-0 w-screen h-screen md:h-auto md:object-contain -z-20"
            />
            <Hero />
            <Feature />
            <Stats />
            <LogoCloud />
            <CTA />
            <Pricing />
        </main>
    );
}
