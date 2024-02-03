import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components";

export default function notFound() {
    return (
        <main className="flex h-dvh">
            <div className="w-full flex flex-col justify-between lg:w-1/2">
                <div className="p-5">
                    <Link href="/" className="">
                        <Icons.logo className="h-14 w-14" />
                    </Link>
                </div>
                <div className="flex flex-col p-5">
                    <span className="font-normal text-blue-600 mb-3 font-mono">
                        404
                    </span>
                    <h1 className="font-bold text-3xl mb-3 md:text-5xl">
                        Page not found
                    </h1>
                    <p className="text-slate-500 mb-7">
                        Sorry, we couldn&apos;t find the page you&apos;re
                        looking for.
                    </p>
                    <Link
                        href="/"
                        className="flex items-center gap-x-2 text-blue-600"
                    >
                        <span
                            aria-hidden
                            className="font-mono font-bold text-xl"
                        >
                            ←
                        </span>
                        <span className="text-sm">Back to home</span>
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-x-4 px-5 py-10 bg-slate-50 border-t sm:justify-start">
                    <Link
                        href="#"
                        className="text-slate-500 text-sm hover:underline"
                    >
                        Contact support
                    </Link>
                    <span className="w-0.5 h-0.5 rounded-full bg-slate-500" />
                    <Link
                        href="#"
                        className="text-slate-500 text-sm hover:underline"
                    >
                        Status
                    </Link>
                </div>
            </div>
            <div className="relative w-1/2 hidden lg:block">
                <Image
                    fill
                    src="/not-found.avif"
                    alt="not found"
                    className="object-cover object-left-bottom"
                />
            </div>
        </main>
    );
}
