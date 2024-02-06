import { Icons } from "@/components";

export function LogoCloud() {
    const companyLogos = [
        Icons.companies.transistor,
        Icons.companies.reform,
        Icons.companies.tuple,
        Icons.companies.savvycal,
        Icons.companies.statamic,
    ];

    return (
        <section className="flex flex-col p-5 gap-y-7 max-w-[1340px] mx-auto my-32">
            <h2 className="text-center font-semibold text-lg">
                Trusted by the world&apos;s most innovative teams
            </h2>
            <ul className="flex justify-center gap-5 flex-wrap">
                {companyLogos.map((Icon, index) => (
                    <Icon key={index} className="w-30 h-10 md:w-40 md:h-16" />
                ))}
            </ul>
        </section>
    );
}
