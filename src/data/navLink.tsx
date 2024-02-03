import { Icons } from "@/components";
import type { FC } from "react";
import type { IconProps } from "@/components/ui/icons";

type TNavLink = {
    id: number;
    title: string;
    url?: string;
    children?: TNavChild[];
    footer?: TNavFooter[];
};

type TNavChild = Omit<TNavLink, "children" | "footer" | "url"> & {
    url: string;
    Icon: FC<IconProps>;
    description: string;
};

type TNavFooter = Omit<TNavChild, "description" | "footer">;

export const navLinks: TNavLink[] = [
    {
        id: 1,
        title: "Product",
        children: [
            {
                id: 1,
                title: "Analytics",
                url: "#",
                description: "Build strategic funnels that will convert",
                Icon: Icons.nav.product.analytics,
            },
            {
                id: 2,
                title: "Engagment",
                url: "#",
                description: "Speak directly to your customers",
                Icon: Icons.nav.product.engagment,
            },
            {
                id: 3,
                title: "Security",
                url: "#",
                description: "Your customers’ data will be safe and secure",
                Icon: Icons.nav.product.security,
            },
            {
                id: 4,
                title: "Integrations",
                url: "#",
                description: "Connect with third-party tools",
                Icon: Icons.nav.product.integrations,
            },
            {
                id: 5,
                title: "Automations",
                url: "#",
                description: "Build strategic funnels that will convert",
                Icon: Icons.nav.product.automations,
            },
        ],
        footer: [
            {
                id: 1,
                title: "Watch demo",
                url: "#",
                Icon: Icons.nav.product.footer.video,
            },
            {
                id: 2,
                title: "Contact sales",
                url: "#",
                Icon: Icons.nav.product.footer.phone,
            },
        ],
    },
    {
        id: 2,
        title: "Features",
        url: "#",
    },
    {
        id: 3,
        title: "Marketplace",
        url: "#",
    },
    {
        id: 4,
        title: "Company",
        url: "#",
    },
];
