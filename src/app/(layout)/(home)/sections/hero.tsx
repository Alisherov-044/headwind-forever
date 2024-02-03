import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

export function Hero() {
    return (
        <section className="flex flex-col gap-y-6 mt-5 sm:gap-y-0 lg:flex-row lg:items-start lg:mt-10 lg:gap-x-4 lg:overflow-hidden xl:justify-center min-h-screen max-w-[1500px] mx-auto">
            <div className="flex flex-col p-5 lg:w-2/3 lg:shrink-0 xl:w-1/2 lg:pt-36">
                <h1 className="text-3xl font-bold mb-5 sm:text-6xl">
                    We&apos;re changing the way people connect.
                </h1>
                <p className="text-slate-500 leading-7 mb-7 sm:w-2/3 sm:text-lg lg:w-full">
                    Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                    quis cupidatat mollit aute velit. Et labore commodo nulla
                    aliqua proident mollit ullamco exercitation tempor. Sint
                    aliqua anim nulla sunt mollit id pariatur in voluptate
                    cillum.
                </p>
                <div className="flex items-center gap-x-6 sm:w-fit">
                    <Link href="#">
                        <Button>Get Started</Button>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-x-2 font-semibold transition-all hover:text-blue-500"
                    >
                        Live demo
                        <span
                            aria-hidden
                            className="font-mono text-xl font-bold"
                        >
                            →
                        </span>
                    </Link>
                </div>
            </div>
            <div className="w-full flex justify-end gap-x-10 pr-5 pb-36 sm:pb-14 lg:pb-40 lg:justify-start lg:pr-0 lg:w-fit">
                <div className="flex flex-col gap-y-10 w-44 shrink-0 order-1 lg:order-3 xl:order-1">
                    <Image
                        width={175}
                        height={265}
                        alt="hero img"
                        src="/hero/img-1.avif"
                        className="rounded-xl translate-y-1/2 xl:translate-y-full w-44 h-64 object-cover shrink-0"
                    />
                </div>
                <div className="flex flex-col gap-y-10 w-44 shrink-0 order-2 lg:order-1 xl:order-2">
                    <Image
                        width={175}
                        height={265}
                        alt="hero img"
                        src="/hero/img-2.avif"
                        className="rounded-xl lg:translate-y-1/2 w-44 h-64 object-cover shrink-0"
                    />
                    <Image
                        width={175}
                        height={265}
                        alt="hero img"
                        src="/hero/img-3.avif"
                        className="rounded-xl lg:translate-y-1/2 w-44 h-64 object-cover shrink-0"
                    />
                </div>
                <div className="flex flex-col gap-y-10 w-44 shrink-0 order-3 lg:order-2 xl:order-3">
                    <Image
                        width={175}
                        height={265}
                        alt="hero img"
                        src="/hero/img-4.avif"
                        className="rounded-xl translate-y-1/2 sm:-translate-y-1/2 lg:translate-y-0 w-44 h-64 object-cover shrink-0"
                    />
                    <Image
                        width={175}
                        height={265}
                        alt="hero img"
                        src="/hero/img-5.avif"
                        className="rounded-xl translate-y-1/2 sm:-translate-y-1/2 lg:translate-y-0 w-44 h-64 object-cover shrink-0"
                    />
                </div>
            </div>
        </section>
    );
}
