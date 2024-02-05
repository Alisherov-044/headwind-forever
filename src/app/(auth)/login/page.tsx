"use client";
import Link from "next/link";
import { Button, Checkbox, Icons, Input, Label } from "@/components";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/form/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .email({ message: "email must be a valid." }),
    password: z.string({ required_error: "password is required" }),
});

export default function Login() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (event: z.infer<typeof formSchema>) => {
        console.log(event);
        form.reset();
    };

    return (
        <main className="flex flex-col items-center justify-center w-screen h-dvh max-w-[1340px] py-10 mx-auto">
            <Icons.logo className="h-12 w-12 shrink-0 mb-5" />
            <h1 className="font-bold text-2xl mb-10">
                Sign in to your account
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-y-5 w-full px-5 py-10 sm:max-w-[480px] sm:rounded-md border shadow mb-10"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Email address</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex items-center justify-between gap-x-2 mb-4">
                        <div className="flex items-center gap-x-2">
                            <Checkbox
                                id="remember"
                                className="border-gray-300 rounded-sm"
                            />
                            <Label
                                htmlFor="remember"
                                className="text-gray-600 text-sm cursor-pointer"
                            >
                                Remember me
                            </Label>
                        </div>
                        <Link
                            href="#"
                            className="text-sm text-blue-600 font-semibold"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Button type="submit">Sign in</Button>
                    <div className="w-full flex items-center justify-between gap-x-3 py-4">
                        <span className="grow h-[1px] bg-slate-200" />
                        <span className="text-sm text-gray-500 font-semibold">
                            Or continue with
                        </span>
                        <span className="grow h-[1px] bg-slate-200" />
                    </div>
                    <div className="flex items-center justify-between gap-x-4">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex items-center gap-x-2 grow"
                        >
                            <Icons.corporation.google className="w-5 h-5" />
                            <span>Google</span>
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="flex items-center gap-x-2 grow"
                        >
                            <Icons.corporation.github className="w-5 h-5" />
                            <span>Github</span>
                        </Button>
                    </div>
                </form>
            </Form>
            <p className="text-sm">
                Not a member?{" "}
                <Link href="#" className="font-semibold text-blue-600">
                    Start a 14 day free trial
                </Link>
            </p>
        </main>
    );
}
