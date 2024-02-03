import { Icons } from "@/components";
import type { FC } from "react";
import type { IconProps } from "@/components/ui/icons";

type TFeature = {
    id: number;
    title: string;
    description: string;
    Icon: FC<IconProps>;
};

export const features: TFeature[] = [
    {
        id: 1,
        title: "Push to deploy. ",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
        Icon: Icons.feature.push,
    },
    {
        id: 2,
        title: "SSL certificates.",
        description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        Icon: Icons.feature.security,
    },
    {
        id: 3,
        title: "Simple queues.",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
        Icon: Icons.feature.queue,
    },
    {
        id: 4,
        title: "Advanced security.",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
        Icon: Icons.feature.advancedSecurity,
    },
    {
        id: 5,
        title: "Powerful API.",
        description:
            "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        Icon: Icons.feature.api,
    },
    {
        id: 6,
        title: "Database backups.",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
        Icon: Icons.feature.database,
    },
];
