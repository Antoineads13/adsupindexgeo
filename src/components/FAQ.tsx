import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que l'Index Ad's Up ?",
    answer:
      "L'Index Ad's Up est un outil de classement de marques qui analyse la visibilité dans la recherche IA. Il suit et mesure la performance des marques dans les conversations IA.",
  },
  {
    question: "Comment fonctionne l'Index ?",
    answer:
      "Nous analysons des millions de conversations IA en temps réel, utilisons des algorithmes de clustering intelligent pour identifier les tendances, et classons les marques selon leur visibilité et leur impact.",
  },
  {
    question: "L'Index Ad's Up est-il gratuit ?",
    answer:
      "Oui, la consultation de l'index est gratuite. Pour des analyses approfondies et des rapports personnalisés, nous proposons des plans premium adaptés à vos besoins.",
  },
  {
    question: "À quelle fréquence l'Index est-il mis à jour ?",
    answer:
      "L'index est mis à jour en temps réel avec de nouvelles données ajoutées quotidiennement. Les classements sont recalculés chaque semaine pour refléter les dernières tendances.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold">
            Questions{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4 rounded-lg border-2 bg-card px-6 transition-all hover:border-primary"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
