import { Button, Icons } from "@/components";

export function Pricing() {
    const includes = [
        "Private forum access",
        "Private forum access",
        "Entry to annual conference",
        "Official member t-shirt",
    ];

    return (
        <section className="flex flex-col p-5 max-w-[1340px] mx-auto mt-14">
            <h2 className="font-bold text-3xl mb-5 sm:text-center">
                Simple no-tricks pricing
            </h2>
            <p className="text-slate-500 leading-7 mb-10 max-w-[600px] mx-auto sm:text-center">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe
                et quasi iusto modi velit ut non voluptas in. Explicabo id ut
                laborum.
            </p>
            <div className="flex flex-col p-2 border rounded-3xl lg:flex-row lg:gap-x-4">
                <div className="p-3 lg:grow">
                    <h3 className="font-bold text-[22px] mb-3">
                        Lifetime membership
                    </h3>
                    <p className="text-slate-500 leading-7 mb-12">
                        Lorem ipsum dolor sit amet consect etur adipisicing
                        elit. Itaque amet indis perferendis blanditiis
                        repellendus etur quidem assumenda.
                    </p>
                    <div className="w-full flex items-center gap-x-3 mb-10">
                        <span className="text-blue-600 text-sm font-semibold">
                            What&apos;s included
                        </span>
                        <line className="grow h-[1px] bg-slate-100 rounded-sm" />
                    </div>
                    <ul className="grid grid-cols-1 gap-y-4 mb-7 sm:grid-cols-2 sm:gap-x-4">
                        {includes.map((include, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-x-2"
                            >
                                <Icons.check className="h-6 w-5 flex-none text-indigo-600" />
                                <span className="text-slate-700 text-sm">
                                    {include}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center bg-gray-50 border rounded-2xl px-5 py-7 lg:w-[432px] lg:shrink-0">
                    <h3 className="font-semibold mb-5 text-gray-500">
                        Pay once, own it forever
                    </h3>
                    <h2 className="text-5xl font-bold mb-8">
                        $349 <span className="text-sm">USD</span>
                    </h2>
                    <Button className="w-full max-w-64 mb-5">Get access</Button>
                    <p className="text-slate-500 text-xs text-center max-w-64">
                        Invoices and receipts available for easy company
                        reimbursement
                    </p>
                </div>
            </div>
        </section>
    );
}
