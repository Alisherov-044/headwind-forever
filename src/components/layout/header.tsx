"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data";
import { useMenu } from "@/hooks";
import { cn } from "@/lib/utils";
import { Button, Icons } from "@/components";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Header() {
    const { isOpen, toggle } = useMenu();
    const [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <header className="relative flex items-center justify-between p-5 max-w-[1500px] mx-auto">
            <Link href="/" className="inline-block w-12 p-1.5">
                <Icons.logo />
            </Link>
            <ul className="hidden lg:flex items-center gap-x-12">
                {navLinks.map(({ id, title, url, children, footer }) =>
                    typeof url === "string" ? (
                        <Link
                            key={id}
                            href={url}
                            className="font-semibold text-sm"
                        >
                            {title}
                        </Link>
                    ) : (
                        <Popover key={id}>
                            <PopoverTrigger asChild>
                                <button className="flex items-center gap-x-1">
                                    <span className="font-semibold text-sm">
                                        {title}
                                    </span>
                                    <Icons.arrow.down />
                                </button>
                            </PopoverTrigger>
                            <PopoverContent
                                align="start"
                                className="relative -left-10 rounded-3xl mt-2 p-0 overflow-hidden hidden lg:flex"
                            >
                                <div className="transition duration-200 ease-out ring-gray-900">
                                    <ul className="flex flex-col gap-y-1 p-4">
                                        {children?.map(
                                            ({
                                                id,
                                                title,
                                                description,
                                                url,
                                                Icon,
                                            }) => (
                                                <Link
                                                    key={id}
                                                    href={url}
                                                    className="group flex items-center gap-x-6 p-4 hover:bg-gray-50 rounded-xl"
                                                >
                                                    <span className="relative">
                                                        <Icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                                    </span>
                                                    <span className="flex flex-col gap-y-1">
                                                        <h4 className="font-semibold text-gray-900">
                                                            {title}
                                                        </h4>
                                                        <p className="text-gray-900">
                                                            {description}
                                                        </p>
                                                    </span>
                                                </Link>
                                            )
                                        )}
                                    </ul>
                                    {typeof footer !== "undefined" && (
                                        <ul className="flex bg-gray-50 divide-x divide-gray-900/5">
                                            {footer.map(
                                                ({ id, title, url, Icon }) => (
                                                    <Button
                                                        key={id}
                                                        size="lg"
                                                        variant="ghost"
                                                        style={{
                                                            width: `${
                                                                100 /
                                                                footer.length
                                                            }%`,
                                                        }}
                                                        className="rounded-none h-auto py-3"
                                                    >
                                                        <Link
                                                            href={url}
                                                            className="h-full w-full flex items-center justify-center gap-x-2.5"
                                                        >
                                                            <span className="relative">
                                                                <Icon />
                                                            </span>
                                                            <span className="font-normal">
                                                                {title}
                                                            </span>
                                                        </Link>
                                                    </Button>
                                                )
                                            )}
                                        </ul>
                                    )}
                                </div>
                            </PopoverContent>
                        </Popover>
                    )
                )}
            </ul>
            <Link
                href="/login"
                className="hidden lg:inline-block font-semibold text-sm leading-6 transition-all text-gray-900 hover:text-blue-500"
            >
                Log in
                <span className="font-mono font-bold text-lg ml-2" aria-hidden>
                    →
                </span>
            </Link>
            <button onClick={toggle} className="cursor-pointer lg:hidden">
                {isOpen ? (
                    <Icons.close className="w-6 h-6" />
                ) : (
                    <Icons.burger className="w-6 h-6" />
                )}
            </button>
            <div
                className={cn(
                    "flex-col hidden absolute top-0 right-0 h-dvh w-full bg-white md:w-96 md:border-l lg:hidden",
                    isOpen && "flex z-50 fixed w-full h-dvh top-0 right-0"
                )}
            >
                <div className="relative flex items-center justify-between p-5">
                    <Link href="/" className="inline-block w-12 p-1.5">
                        <Icons.logo />
                    </Link>
                    <button
                        onClick={toggle}
                        className="cursor-pointer lg:hidden"
                    >
                        <Icons.close className="w-6 h-6" />
                    </button>
                </div>
                <div className="flex flex-col gap-y-5 divide-y divide-y-gray-900/5 p-5">
                    <ul className="flex flex-col gap-y-2">
                        {navLinks.map(({ id, title, url, children }) =>
                            typeof url === "string" ? (
                                <Link
                                    key={id}
                                    href={url}
                                    className="font-semibold text-md p-2"
                                >
                                    {title}
                                </Link>
                            ) : (
                                <Collapsible
                                    key={id}
                                    onOpenChange={(open) => setCollapsed(!open)}
                                >
                                    <CollapsibleTrigger className="w-full">
                                        <span className="flex items-center justify-between font-semibold text-md p-2">
                                            {title}
                                            <span
                                                className={cn(
                                                    !collapsed && "rotate-180"
                                                )}
                                            >
                                                <Icons.arrow.down />
                                            </span>
                                        </span>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <ul className="flex flex-col gap-y-2 p-2">
                                            {children?.map(
                                                ({ id, title, url }) => (
                                                    <Link
                                                        key={id}
                                                        href={url}
                                                        className="font-semibold text-md p-2"
                                                    >
                                                        {title}
                                                    </Link>
                                                )
                                            )}
                                        </ul>
                                    </CollapsibleContent>
                                </Collapsible>
                            )
                        )}
                    </ul>
                    <Link
                        href="/login"
                        className="block font-semibold text-md p-2 pt-7"
                    >
                        Log in
                    </Link>
                </div>
            </div>
        </header>
    );
}
