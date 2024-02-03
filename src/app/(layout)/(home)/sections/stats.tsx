import { stats } from "@/data";
import { cn } from "@/lib/utils";

type TVariant = {
    [key: number]: string;
};

export function Stats() {
    const variants: TVariant = {
        0: "bg-gray-50 text-black max-w-[448px] md:h-[288px]",
        1: "bg-gray-900 text-white max-w-[672px] md:h-[427px]",
        2: "bg-blue-500 text-white max-w-[576px] md:h-[324px]",
    };

    return (
        <section className="flex flex-col gap-y-5 p-7 max-w-[1340px] mx-auto mt-14">
            <div className="flex flex-col max-w-[670px]">
                <h2 className="font-bold text-3xl mb-5">
                    We approach the workplace as something that adds to our
                    lives and adds value to world.
                </h2>
                <p className="text-slate-600 leading-7 mb-8">
                    Diam nunc lacus lacus aliquam turpis enim. Eget hac velit
                    est euismod lacus. Est non placerat nam arcu. Cras purus
                    nibh cursus sit eu in id. Integer vel nibh.
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-y-10 md:grid-cols-3 md:items-end md:gap-x-10">
                {stats.map(({ id, title, description, amount }, index) => (
                    <li
                        key={id}
                        className={cn(
                            "flex flex-col p-5 rounded-xl sm:flex-row sm:justify-between sm:items-end md:flex-col md:items-start md:max-w-fit",
                            variants[index]
                        )}
                    >
                        <div className="flex flex-col max-w-[300px] order-1 md:order-2">
                            <h3 className="leading-5 mb-4 font-semibold text-lg">
                                {title}
                            </h3>
                            <p className="text-sm leading-5 text-gray-300 mb-7 md:mb-0">
                                {description}
                            </p>
                        </div>
                        <span className="text-3xl font-bold order-2 md:order-1">
                            {amount}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
