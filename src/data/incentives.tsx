import { Icons } from "@/components";
import type { FC } from "react";
import type { IconProps } from "@/components/ui/icons";

type TIncentive = {
    id: number;
    title: string;
    description: string;
    Icon: FC<IconProps>;
};

export const incentives: TIncentive[] = [
    {
        id: 1,
        title: "Free Shipping",
        description:
            "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
        Icon: Icons.incentives.shipping,
    },
    {
        id: 2,
        title: "24/7 Customer Support",
        description:
            "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
        Icon: Icons.incentives.support,
    },
    {
        id: 3,
        title: "Fast Shopping Cart",
        description:
            "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
        Icon: Icons.incentives.cart,
    },
];
