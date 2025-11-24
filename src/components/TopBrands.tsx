import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const brands = [
  { name: "Amazon", score: "43.3%", change: "+5%", trending: "up", icon: "🛒" },
  { name: "Hulu", score: "36.7%", change: "+11%", trending: "up", icon: "🎬" },
  { name: "Netflix", score: "31.9%", change: "+4%", trending: "up", icon: "🎬" },
  { name: "Disney", score: "32.2%", change: "-0.2%", trending: "down", icon: "🏰" },
  { name: "Apple", score: "30.2%", change: "+11.5%", trending: "up", icon: "🍎" },
  { name: "Peacock", score: "23.7%", change: "+8.3%", trending: "up", icon: "📺" },
];

export const TopBrands = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Top <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Marques</span> cette semaine
            </h2>
            <p className="mt-2 text-muted-foreground">
              Classement basé sur la visibilité de la recherche IA
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2">
            <span className="text-sm text-muted-foreground">ChatGPT</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <Card
              key={brand.name}
              className="group relative overflow-hidden border-2 p-6 transition-all hover:border-primary hover:shadow-xl"
            >
              <div className="absolute right-4 top-4 text-4xl opacity-20 transition-opacity group-hover:opacity-30">
                {brand.icon}
              </div>
              
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Score de Visibilité</p>
                    <h3 className="mt-1 text-3xl font-bold">{brand.score}</h3>
                  </div>
                  <div
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
                      brand.trending === "up"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {brand.trending === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {brand.change}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <span className="text-lg">{brand.icon}</span>
                  </div>
                  <h4 className="text-xl font-semibold">{brand.name}</h4>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
