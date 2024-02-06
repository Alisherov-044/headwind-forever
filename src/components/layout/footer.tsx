"use client";
import Link from "next/link";
import { z } from "zod";
import { footerLinks, socialNetworks } from "@/data";
import { useForm } from "react-hook-form";
import { Input, Button } from "@/components";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/form/form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z.string({ required_error: "email is required" }).email({
        message: "email must be a valid.",
    }),
});

export function Footer() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const footerLinksWrap = [footerLinks.slice(0, 2), footerLinks.slice(2, 4)];

    const onSubmit = (event: z.infer<typeof formSchema>) => {
        console.log(event.email);
        form.reset();
    };

    return (
        <footer className="relative w-full p-5 pt-14 mt-10 border-t">
            <div className="flex flex-col max-w-[1340px] mx-auto divide-y">
                <div className="flex flex-col gap-y-10 pb-10 xl:flex-row xl:justify-between xl:gap-x-20">
                    <div className="flex justify-around shrink-0 xl:w-2/4 xl:gap-x-20">
                        {footerLinksWrap.map((footerRow, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-y-10 w-full md:flex-row md:justify-around xl:justify-between"
                            >
                                {footerRow.map(({ id, title, children }) => (
                                    <div key={id}>
                                        <h2 className="font-semibold text-black">
                                            {title}
                                        </h2>
                                        <ul className="flex flex-col gap-y-4 mt-6">
                                            {children.map(
                                                ({ id, title, url }) => (
                                                    <Link
                                                        href={url}
                                                        key={id}
                                                        className="text-sm text-slate-500 transition hover:text-black"
                                                    >
                                                        {title}
                                                    </Link>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-4 xl:w-[450px]">
                        <h2 className="font-semibold">
                            Subscribe to our newsletter
                        </h2>
                        <p className="text-sm leading-6 text-slate-500 max-w-[360px]">
                            The latest news, articles, and resources, sent to
                            your inbox weekly.
                        </p>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="w-full flex flex-col gap-4 sm:flex-row"
                            >
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="xl:grow">
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter you email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full sm:w-fit"
                                >
                                    Subscribe
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
                <div className="flex flex-col gap-y-7 pt-10 md:flex-row-reverse md:items-center md:justify-between">
                    <ul className="flex items-center gap-x-5">
                        {socialNetworks.map(({ id, url, Icon }) => (
                            <Link key={id} href={url}>
                                <Icon className="h-6 w-6 fill-slate-400 transition-all hover:fill-slate-600" />
                            </Link>
                        ))}
                    </ul>
                    <p className="text-xs text-stone-400">
                        &copy; {new Date().getFullYear()} Your Company, Inc. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
