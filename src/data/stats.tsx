type TState = {
    id: number;
    title: string;
    description: string;
    amount: string;
};

export const stats: TState[] = [
    {
        id: 1,
        title: "Users on the platform",
        description: "Vel labore deleniti veniam consequuntur sunt nobis.",
        amount: "250k",
    },
    {
        id: 2,
        title: "We’re proud that our customers have made over $8 billion in total revenue.",
        description:
            "Eu duis porta aliquam ornare. Elementum eget magna egestas.",
        amount: "$8.9 billion",
    },
    {
        id: 3,
        title: "Transactions this year",
        description:
            "Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.",
        amount: "401,093",
    },
];
