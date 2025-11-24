import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const keywords = [
  { keyword: "acne", volume: "4,4M", change: "-330,5k", isPositive: false },
  { keyword: "rougeurs", volume: "80,8k", change: "+2,8k", isPositive: true },
  { keyword: "peaux sensibles", volume: "41,9k", change: "+10,9k", isPositive: true },
  { keyword: "protection solaire", volume: "35,6k", change: "-12,4k", isPositive: false },
  { keyword: "soins spécifiques", volume: "3,6k", change: "-5,6k", isPositive: false },
  { keyword: "eczéma psoriasis", volume: "3,2k", change: "+1,7k", isPositive: true },
  { keyword: "wrinkle treatments", volume: "3,2k", change: "-4,4k", isPositive: false },
  { keyword: "soins hydratants", volume: "1,9k", change: "-1,6k", isPositive: false },
  { keyword: "démaquillants", volume: "1,5k", change: "-1,9k", isPositive: false },
];

export const KeywordTable = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(330_81%_50%_/_0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(330_81%_50%_/_0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Mots-clés Beauté les plus{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              recherchés
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Volume de prompts et tendances dans les assistants IA
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/20 bg-card/80 backdrop-blur-xl shadow-[0_0_50px_hsl(var(--primary)_/_0.1)]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
                <tr>
                  <th className="px-6 py-5 text-left text-sm font-bold uppercase tracking-wider text-foreground">
                    Mot-clé
                  </th>
                  <th className="px-6 py-5 text-right text-sm font-bold uppercase tracking-wider text-foreground">
                    Volume de Prompts
                  </th>
                  <th className="px-6 py-5 text-right text-sm font-bold uppercase tracking-wider text-foreground">
                    Variation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {keywords.map((item, index) => (
                  <tr
                    key={item.keyword}
                    className="group transition-all hover:bg-primary/5"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-bold transition-all group-hover:scale-110 group-hover:shadow-lg">
                          {index + 1}
                        </span>
                        <span className="font-semibold text-base">{item.keyword}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span className="text-lg font-bold">{item.volume}</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-all group-hover:scale-105"
                        style={{
                          backgroundColor: item.isPositive 
                            ? "hsl(142 76% 36% / 0.1)" 
                            : "hsl(0 84% 60% / 0.1)"
                        }}
                      >
                        {item.isPositive ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        <span className={`font-bold text-base ${
                          item.isPositive ? "text-green-600" : "text-red-600"
                        }`}>
                          {item.change}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};
