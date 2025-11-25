import { Card } from "@/components/ui/card";
import { MessageSquare, Filter, Brain, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Conversations Réelles",
    description:
      "Notre système analyse des millions de conversations IA quotidiennes pour identifier les vraies tendances de recherche.",
  },
  {
    icon: Filter,
    title: "Filtrage Alimenté par l'IA",
    description:
      "Nous utilisons des analyses avancées pour filtrer les conversations et éliminer le bruit des données.",
  },
  {
    icon: Brain,
    title: "Clustering Intelligent",
    description:
      "Nous utilisons le clustering de sujets et générons des questions authentiques et quantifiables.",
  },
  {
    icon: TrendingUp,
    title: "Classement par Impact",
    description:
      "Nous classons par impact grâce à la même méthode utilisée pour tous les clients Ad's up.",
  },
];

export const FeatureCards = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Comment nous avons sélectionné{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ces Prompts
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Chaque information de l'écosystème Ad's up se nourrit de notre indice de classement de marques.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-2 p-6 transition-all hover:border-primary hover:shadow-xl"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-3">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-2xl transition-all group-hover:scale-150" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
