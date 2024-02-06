import Image from "next/image";
import { incentives } from "@/data";

export function Incentives() {
    return (
        <section className="flex flex-col gap-y-5 lg:gap-y-10 max-w-[1340px] mx-auto p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mt-4">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-3 lg:text-4xl">
                        We built our business on great customer service
                    </h1>
                    <p className="text-slate-500 text-sm lg:text-lg">
                        At the beginning at least, but then we realized we could
                        make a lot more money if we kinda stopped caring about
                        that. Our new strategy is to write a bunch of things
                        that look really good in the headlines, then clarify in
                        the small print but hope people don&apos;t actually read
                        it.
                    </p>
                </div>
                <div className="relative w-full md:w-1/2 aspect-video rounded-md overflow-hidden">
                    <Image
                        fill
                        alt="hero image"
                        src="/features/hero.jpg"
                        className="object-cover object-center"
                    />
                </div>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                {incentives.map(({ id, title, description, Icon }) => (
                    <li
                        key={id}
                        className="flex flex-col items-center text-center gap-y-2 sm:flex-row sm:text-start sm:gap-x-4 lg:flex-col lg:text-center"
                    >
                        <Icon className="w-[112px] h-[96px] shrink-0" />
                        <div className="flex flex-col gap-y-2 sm:items-start lg:items-center">
                            <h4 className="font-semibold">{title}</h4>
                            <p className="text-sm text-slate-500">
                                {description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
