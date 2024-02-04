import Image from "next/image";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/form/form";
import { Button, Input, Icons, Textarea } from "@/components";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import type { IconProps } from "@/components/ui/icons";

type TContact = {
    Icon: FC<IconProps>;
    title: string;
};

const formSchema = z.object({
    first_name: z.string({ required_error: "first name is required" }),
    last_name: z.string().optional(),
    email: z
        .string({ required_error: "email is required" })
        .email({ message: "email must be a valid." }),
    phone_number: z.string({ required_error: "phone number is required" }),
    message: z.string({ required_error: "message is required" }),
});

const contactDetails: TContact[] = [
    {
        Icon: Icons.contact.location,
        title: "545 Mavis Island Chicago, IL 99191",
    },
    {
        Icon: Icons.contact.phone,
        title: "+1 (555) 234-5678",
    },
    {
        Icon: Icons.contact.email,
        title: "hello@example.com",
    },
];

export function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (event: z.infer<typeof formSchema>) => {
        console.log(event);
        form.reset();
    };

    return (
        <section className="flex flex-col lg:flex-row max-w-[1340px] mx-auto border mt-5">
            <div className="relative px-5 py-16 border-b lg:w-1/2 lg:border-b-0 lg:border-r">
                <h2 className="text-3xl font-bold mb-5">Get in touch</h2>
                <p className="text-slate-500 mb-6 max-w-[576px] md:text-lg">
                    Proin volutpat consequat porttitor cras nullam gravida at.
                    Orci molestie a eu arcu. Sed ut tincidunt integer elementum
                    id sem. Arcu sed malesuada et magna.
                </p>
                <div className="flex flex-col gap-y-5">
                    {contactDetails.map(({ Icon, title }, index) => (
                        <div key={index} className="flex gap-x-4">
                            <Icon className="w-6 h-6 stroke-slate-500" />
                            <p className="text-slate-500 max-w-44">{title}</p>
                        </div>
                    ))}
                </div>
                <Image
                    fill
                    src="/contact/bg.png"
                    alt="background"
                    className="object-cover object-right-top -z-10"
                />
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-[576px] flex flex-col mx-auto gap-4 px-5 py-16 lg:w-1/2"
                >
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem className="grow">
                                    <FormLabel>First name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="last_name"
                            render={({ field }) => (
                                <FormItem className="grow">
                                    <FormLabel>Last name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone_number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone number</FormLabel>
                                <FormControl>
                                    <Input type="tel" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-fit self-end">
                        Send message
                    </Button>
                </form>
            </Form>
        </section>
    );
}
