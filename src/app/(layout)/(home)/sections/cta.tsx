import Image from "next/image";
import { Button } from "@/components";

export function CTA() {
    return (
        <section className="flex flex-col gap-y-5 mt-14">
            <div className="p-5 flex justify-between gap-x-10 max-w-[1340px] mx-auto overflow-hidden">
                <div className="max-w-[650px] md:shrink-0">
                    <h2 className="font-bold text-3xl mb-5 sm:text-4xl">
                        Our people
                    </h2>
                    <h4 className="text-lg leading-7 text-gray-600 mb-5">
                        Quasi est quaerat. Sit molestiae et. Provident ad
                        dolorem occaecati eos iste. Soluta rerum quidem minus ut
                        molestiae velit error quod. Excepturi quidem expedita
                        molestias quas.
                    </h4>
                    <p className="leading-7 text-gray-500 mb-7">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat. Quasi aperiam sit non sit neque
                        reprehenderit.
                    </p>
                    <Button className="flex items-center gap-x-2">
                        Join our team{" "}
                        <span
                            aria-hidden
                            className="font-mono text-xl font-bold"
                        >
                            →
                        </span>
                    </Button>
                </div>
                <Image
                    width={500}
                    height={500}
                    alt="team img"
                    src="/team/img-1.avif"
                    className="hidden lg:block object-cover rounded-2xl w-[592px] h-[350px] flex-shrink-0"
                />
            </div>
            <div className="flex flex-col gap-y-5 items-center overflow-hidden lg:flex-row lg:gap-x-5 lg:items-end lg:-translate-x-14 max-w-[1500px] mx-auto">
                <div className="flex items-end gap-x-5 -translate-x-24 sm:translate-x-0">
                    <Image
                        width={500}
                        height={500}
                        alt="team img"
                        src="/team/img-2.avif"
                        className="object-cover object-right-bottom rounded-2xl w-96 h-72 shrink-0"
                    />
                    <Image
                        width={500}
                        height={500}
                        alt="team img"
                        src="/team/img-1.avif"
                        className="object-cover object-left-bottom rounded-2xl w-[592px] h-[422px] flex-shrink-0 lg:hidden"
                    />
                </div>
                <div className="flex gap-x-5 -translate-x-14 sm:translate-x-0">
                    <Image
                        width={500}
                        height={500}
                        alt="team img"
                        src="/team/img-3.avif"
                        className="object-cover rounded-2xl w-[592px] h-[422px] shrink-0"
                    />
                    <Image
                        width={500}
                        height={500}
                        alt="team img"
                        src="/team/img-4.avif"
                        className="object-cover rounded-2xl w-96 h-72 shrink-0"
                    />
                </div>
            </div>
        </section>
    );
}
