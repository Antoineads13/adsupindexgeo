import { Card } from "@/components/ui/card";

const brands = [
  { rank: 1, name: "Amazon", icon: "🛒", score: "43.3%", change: "+6.7%", positive: true },
  { rank: 2, name: "Hulu", icon: "🎬", score: "36.7%", change: "+1%", positive: true },
  { rank: 3, name: "Netflix", icon: "🎬", score: "31.9%", change: "+1.4%", positive: true },
  { rank: 4, name: "Disney", icon: "🏰", score: "32.2%", change: "-0.2%", positive: false },
  { rank: 5, name: "Apple", icon: "🍎", score: "30.2%", change: "+11.5%", positive: true },
  { rank: 6, name: "Peacock", icon: "📺", score: "23.7%", change: "+8.3%", positive: true },
  { rank: 7, name: "Max", icon: "🎥", score: "23.7%", change: "+2.5%", positive: true },
  { rank: 8, name: "Paramount", icon: "⛰️", score: "23.3%", change: "+7.6%", positive: true },
  { rank: 9, name: "Roku", icon: "📱", score: "20.8%", change: "+1.8%", positive: true },
  { rank: 10, name: "Tubi", icon: "📺", score: "15.5%", change: "+2.2%", positive: true },
];

export const BrandTable = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Classement des Entreprises</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Votre entreprise</span>
            <span className="text-sm font-semibold">Suivez votre Visibilité IA →</span>
          </div>
        </div>

        <Card className="overflow-hidden border-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-border bg-muted/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Entreprise</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Score de Visibilité</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {brands.map((brand) => (
                  <tr
                    key={brand.rank}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground">
                          {brand.rank}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                          <span className="text-xl">{brand.icon}</span>
                        </div>
                        <span className="text-base font-semibold">{brand.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-4">
                        <span className="text-lg font-bold">{brand.score}</span>
                        <span
                          className={`min-w-[80px] text-right text-sm font-semibold ${
                            brand.positive ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {brand.change}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                <tr className="bg-muted/10">
                  <td colSpan={2} className="px-6 py-4 text-center">
                    <span className="text-sm text-muted-foreground">
                      Votre entreprise
                    </span>
                    <span className="ml-2 text-sm font-semibold text-primary">
                      Suivez votre Visibilité IA →
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};
