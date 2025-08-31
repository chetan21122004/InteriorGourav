import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How much does interior design cost in Patna?",
      answer: "Interior design costs in Patna vary based on your requirements, space size, and chosen package. We offer flexible pricing starting from ₹3.57L for complete home interiors with transparent pricing and no hidden costs.",
    },
    {
      question: "How to find an interior designer in Patna?",
      answer: "Livspace makes it easy to find qualified interior designers in Patna. Simply book a free consultation, and we'll connect you with experienced designers who understand local requirements and preferences.",
    },
    {
      question: "How much does a 2BHK interior cost in Patna?",
      answer: "A 2BHK interior in Patna typically starts from ₹4.23L, depending on your design preferences, material choices, and customization requirements. We provide detailed cost estimates after understanding your specific needs.",
    },
    {
      question: "How much does 3BHK interior design cost in Patna?",
      answer: "3BHK interior design in Patna starts from ₹4.81L. The final cost depends on the scope of work, materials selected, and level of customization. We offer flexible payment options and transparent pricing.",
    },
    {
      question: "Why is Livspace perfect for your home interior design?",
      answer: "Livspace offers end-to-end interior design solutions with 45-day move-in guarantee, flat 10-year warranty, expert designers, transparent pricing, and quality materials from trusted brands.",
    },
    {
      question: "What will be the timelines for my project completion?",
      answer: "Most projects are completed within 45 days from the start of execution. We provide a detailed timeline during the consultation phase and ensure timely delivery with our move-in guarantee.",
    },
    {
      question: "What services are included under home interior design?",
      answer: "Our services include modular kitchens, wardrobes, lighting, flooring, electrical work, civil work, false ceiling, wall design & painting, and complete home furnishing solutions.",
    },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-livspace-dark mb-12">FAQs</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-livspace-dark hover:no-underline">
                {index + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-livspace-text-muted leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};