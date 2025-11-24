import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const keywords = [
  { keyword: "engagement utilisateur", volume: "1.1m", change: "+204.3k" },
  { keyword: "contenu original", volume: "1.1m", change: "+10.8k" },
  { keyword: "diffusion de contenu", volume: "964.8k", change: "+61.2k" },
  { keyword: "partenariats médias", volume: "752.8k", change: "+16.2k" },
  { keyword: "distribution de contenu", volume: "715.4k", change: "+142.5k" },
  { keyword: "découverte de contenu", volume: "701.3k", change: "+16k" },
  { keyword: "contenu à la demande", volume: "681.2k", change: "-4k" },
  { keyword: "ciblage publicitaire", volume: "567.8k", change: "+51.8k" },
];

export const KeywordTable = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold">
          Mots-clés les plus <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">recherchés</span>
        </h2>

        <Card className="overflow-hidden border-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Mot-clé</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Volume de Prompts</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Changement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {keywords.map((item, index) => (
                  <tr
                    key={item.keyword}
                    className="transition-colors hover:bg-muted/30"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="font-medium">{item.keyword}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold">
                      {item.volume}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-green-600">
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
