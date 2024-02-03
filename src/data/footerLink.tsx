type TFooterLink = {
    id: number;
    title: string;
    children: TFooterChild[];
};

type TFooterChild = Omit<TFooterLink, "children"> & {
    url: string;
};

export const footerLinks: TFooterLink[] = [
    {
        id: 1,
        title: "Solutions",
        children: [
            {
                id: 1,
                title: "Marketing",
                url: "#",
            },
            {
                id: 2,
                title: "Analytics",
                url: "#",
            },
            {
                id: 3,
                title: "Commerce",
                url: "#",
            },
            {
                id: 4,
                title: "Insights",
                url: "#",
            },
        ],
    },
    {
        id: 2,
        title: "Support",
        children: [
            {
                id: 1,
                title: "Pricing",
                url: "#",
            },
            {
                id: 2,
                title: "Documentation",
                url: "#",
            },
            {
                id: 3,
                title: "Guides",
                url: "#",
            },
            {
                id: 4,
                title: "API Status",
                url: "#",
            },
        ],
    },
    {
        id: 3,
        title: "Company",
        children: [
            {
                id: 1,
                title: "About",
                url: "#",
            },
            {
                id: 2,
                title: "Blog",
                url: "#",
            },
            {
                id: 3,
                title: "Jobs",
                url: "#",
            },
            {
                id: 4,
                title: "Press",
                url: "#",
            },
            {
                id: 5,
                title: "Partners",
                url: "#",
            },
        ],
    },
    {
        id: 4,
        title: "Legal",
        children: [
            {
                id: 1,
                title: "Claim",
                url: "#",
            },
            {
                id: 2,
                title: "Privacy",
                url: "#",
            },
            {
                id: 3,
                title: "Terms",
                url: "#",
            },
        ],
    },
];
