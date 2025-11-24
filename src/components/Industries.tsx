import { Badge } from "@/components/ui/badge";

const industries = [
  "Aérospatiale",
  "Automobile",
  "Finance",
  "Restauration",
  "Santé",
  "Assurance",
  "IT Consulting",
  "Podcasting",
  "Pharmaceutique",
  "Énergie Renouvelable",
  "Semiconducteurs",
  "Streaming",
];

export const Industries = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">
          Industries que nous{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            suivons
          </span>
        </h2>

        <div className="flex flex-wrap gap-3">
          {industries.map((industry, index) => (
            <Badge
              key={industry}
              variant="outline"
              className="cursor-pointer border-2 px-6 py-3 text-base font-medium transition-all hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:scale-105"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {industry}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
