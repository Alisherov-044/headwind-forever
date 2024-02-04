import { faqList } from "@/data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
    return (
        <section className="max-w-[1340px] mx-auto p-5 mt-5">
            <h2 className="text-2xl text-center font-semibold mb-5 md:text-3xl">
                Frequently asked questions
            </h2>
            <Accordion type="single" collapsible>
                {faqList.map(({ id, question, answer }) => (
                    <AccordionItem key={id} value={`${id}`}>
                        <AccordionTrigger className="text-sm text-start md:text-[16px]">
                            <span className="mr-5">{question}</span>
                        </AccordionTrigger>
                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
