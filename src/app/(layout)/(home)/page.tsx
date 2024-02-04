"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useToast } from "@/hooks";
import { Button } from "@/components";
import { Hero } from "./sections/hero";
import { Feature } from "./sections/feature";
import { Pricing } from "./sections/pricing";
import { Stats } from "./sections/stats";
import { CTA } from "./sections/cta";
import { LogoCloud } from "./sections/logoCloud";
import { ToastAction } from "@/components/ui/toast";
import { FAQ } from "./sections/faq";
import { Contact } from "./sections/contact";

export default function Home() {
    const { toast } = useToast();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            toast({
                duration: 300000,
                className:
                    "fixed left-0 bottom-0 flex flex-col p-2 items-start gap-y-5 w-full rounded-none min-[616px]:left-5 min-[616px]:bottom-5 min-[616px]:p-5 min-[616px]:rounded-2xl min-[616px]:max-w-[576px]",
                children: (
                    <p className="text-sm font-semibold leading-6">
                        This website uses cookies to supplement a balanced diet
                        and provide a much deserved reward to the senses after
                        consuming bland but nutritious meals. Accepting our
                        cookies is optional but recommended, as they are
                        delicious. See our{" "}
                        <Link href="#" className="text-blue-500">
                            cookie policy.
                        </Link>
                    </p>
                ),
                action: (
                    <div className="flex gap-x-5">
                        <ToastAction altText="Accept all">
                            <Button className="bg-black text-white hover:bg-gray-900">
                                Accept all
                            </Button>
                        </ToastAction>
                        <ToastAction altText="Reject all">
                            <Button variant="ghost">Reject all</Button>
                        </ToastAction>
                    </div>
                ),
            });
        }, 0);

        return () => clearTimeout(timeoutId);
    }, []);

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
            <FAQ />
            <Contact />
        </main>
    );
}
