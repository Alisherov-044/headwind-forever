import { Icons } from "@/components";
import type { FC } from "react";
import type { IconProps } from "@/components/ui/icons";

type TSocial = {
    id: number;
    url: string;
    Icon: FC<IconProps>;
};

export const socialNetworks: TSocial[] = [
    {
        id: 1,
        url: "#",
        Icon: Icons.social.facebook,
    },
    {
        id: 2,
        url: "#",
        Icon: Icons.social.instagram,
    },
    {
        id: 3,
        url: "#",
        Icon: Icons.social.twitter,
    },
    {
        id: 4,
        url: "#",
        Icon: Icons.social.github,
    },
    {
        id: 5,
        url: "#",
        Icon: Icons.social.youTube,
    },
];
