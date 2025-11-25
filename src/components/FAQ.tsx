import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que l'Index de visibilité IA proposé ?",
    answer:
      "L'Index est un classement quantifié qui mesure la fréquence et la qualité d'apparition d'une marque dans les réponses générées par des systèmes d'intelligence artificielle (assistants, chatbots, moteurs conversationnels). Il fournit un repère chiffré (« score de visibilité ») permettant de situer votre marque vis-à-vis de ses concurrents et d'identifier les opportunités d'amélioration.",
  },
  {
    question: "Comment fonctionne concrètement le calcul de cet Index ?",
    answer:
      "Le calcul repose sur plusieurs étapes : collecte d'un large volume de conversations IA, identification des « prompts » utilisateurs, repérage des réponses dans lesquelles des marques sont citées, puis agrégation en un score de visibilité hebdomadaire selon le nombre de mentions, la récurrence et la pertinence de la réponse (ex. présence de la marque dans une réponse, qualité de la source).",
  },
  {
    question: "Sur quel périmètre géographique et linguistique peut-on travailler sa stratégie GEO ?",
    answer:
      "La stratégie GEO peut être déployée sur tous les marchés que vous souhaitez viser : pays, langues, régions locales. Il est donc possible de travailler autant une couverture globale multilingue qu'un ciblage très fin (pays, région, langue) selon vos objectifs et ressources.",
  },
  {
    question: "Pourquoi la visibilité dans les systèmes d'IA (GEO/GSO) est-elle devenue essentielle ?",
    answer:
      "Parce que les usages évoluent : de plus en plus de requêtes sont formulées à des assistants ou IA (ex. ChatGPT, Claude, etc.), et ces systèmes livrent une réponse directe plutôt qu'une longue liste de liens. Sans stratégie GEO/GSO, votre marque peut rester invisible dans ce canal et manquer une part de l'audience.",
  },
  {
    question: "Comment mesure-t-on la performance d'une marque dans le cadre d'une stratégie GEO/GSO ?",
    answer:
      "On suit des indicateurs tels que : le nombre de citations de la marque dans les réponses des IA, la part de voix relative par rapport aux concurrents dans un domaine donné, la qualité des sources renvoyant à votre marque, et la couverture des prompts auxquels votre marque répond. À partir du diagnostic, un plan de contenu et d'autorité est défini, puis suivi dans le temps.",
  },
  {
    question: "Quelle typologie de contenus fonctionne bien pour améliorer sa visibilité via GEO/GSO ?",
    answer:
      "Les contenus efficaces sont ceux qui répondent clairement à des questions d'utilisateurs (« prompts »), qui sont bien structurés (titres, sous-titres, balises sémantiques), qui intègrent des données fiables et des sources reconnues, et qui sont diffusés sur des supports crédibles et optimisés pour les IA (schémas, données structurées). Cela permet aux systèmes IA de reconnaître et citer votre contenu comme pertinent.",
  },
  {
    question: "Combien de temps faut-il prévoir pour observer une amélioration dans la visibilité IA ?",
    answer:
      "Une amélioration peut apparaître assez rapidement (quelques semaines), mais pour un positionnement stable et significatif dans les réponses IA, il faut souvent envisager un horizon de 3 à 6 mois voire plus. Le rythme dépend fortement de la concurrence, de la langue, du marché et de l'intensité des efforts d'optimisation.",
  },
  {
    question: "En quoi la stratégie GEO/GSO se distingue-t-elle du SEO traditionnel ?",
    answer:
      "Le SEO traditionnel vise surtout à apparaître dans les listes de résultats des moteurs de recherche via des liens bleus. La stratégie GEO/GSO, quant à elle, vise à ce que votre contenu soit cité ou utilisé par les IA dans leurs réponses générées. Autrement dit : dans le SEO on optimise pour le classement, dans le GEO/GSO pour la référence dans la réponse.",
  },
  {
    question: "Quelles sont les limites ou précautions à avoir lorsqu'on déploie une stratégie GEO/GSO ?",
    answer:
      "Il faut garder en tête que la méthodologie est encore émergente ; les modèles IA et leurs critères évoluent rapidement, être visible dans les réponses IA ne garantit pas automatiquement une conversion ou un trafic important, la couverture géographique ou linguistique peut varier fortement selon le marché, la langue ou l'IA ciblée, et la visibilité IA ne remplace pas les canaux classiques : elle vient en complément.",
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
