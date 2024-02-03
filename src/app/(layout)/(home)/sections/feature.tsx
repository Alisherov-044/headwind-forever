import Image from "next/image";
import { features } from "@/data";

export function Feature() {
    return (
        <section className="flex flex-col p-5 sm:items-center max-w-[1340px] mx-auto">
            <h2 className="font-semibold text-blue-600 text-lg sm:text-center mb-3">
                Everything you need
            </h2>
            <h1 className="font-bold text-3xl mb-7 sm:text-center sm:text-2xl lg:text-3xl xl:text-4xl">
                No server? No problem.
            </h1>
            <p className="text-slate-500 leading-7 mb-12 sm:text-center lg:text-lg max-w-[700px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
            </p>
            <div className="relative w-full aspect-video border rounded-xl shadow-lg rotate-180 mb-12 lg:mb-16">
                <Image
                    fill
                    src="/feature/bg.png"
                    alt="feature background"
                    className="object-cover rotate-180 z-10 rounded-xl pt-1 object-right-top"
                />
                <div className="after absolute -top-1 left-0 bg-white/75 w-full h-10 shadow-primary z-20"></div>
            </div>
            <ul className="grid grid-cols-1 gap-y-10 gap-x-7 max-w-[750px] mx-auto sm:grid-cols-2 lg:max-w-full lg:grid-cols-3">
                {features.map(({ id, title, description, Icon }) => (
                    <li key={id} className="flex gap-x-3">
                        <span className="leading-7 pt-1">
                            <Icon className="w-6 h-6 fill-blue-800" />
                        </span>
                        <h4 className="text-slate-700 leading-7">
                            <b className="font-semibold text-black">{title}</b>{" "}
                            {description}
                        </h4>
                    </li>
                ))}
            </ul>
        </section>
    );
}
