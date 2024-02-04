import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import type { LayoutProps } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Headwind Forever",
    description: "The website that i fall in love with (tail|head)windcss.",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
