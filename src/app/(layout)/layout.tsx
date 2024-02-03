import { Header, Footer } from "@/components";
import type { LayoutProps } from "@/app/types";

export default function layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
