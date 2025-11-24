import { Card } from "@/components/ui/card";

const responsePositions = [
  { rank: 1, name: "Amazon", icon: "🛒", position: "1.2", change: "+0.3", positive: true },
  { rank: 2, name: "Netflix", icon: "🎬", position: "1.5", change: "+0.1", positive: true },
  { rank: 3, name: "Hulu", icon: "🎬", position: "1.8", change: "-0.2", positive: false },
  { rank: 4, name: "Disney", icon: "🏰", position: "2.1", change: "+0.4", positive: true },
  { rank: 5, name: "Apple", icon: "🍎", position: "2.3", change: "-0.1", positive: false },
  { rank: 6, name: "HBO Max", icon: "🎥", position: "2.7", change: "+0.2", positive: true },
  { rank: 7, name: "Peacock", icon: "📺", position: "3.1", change: "+0.5", positive: true },
  { rank: 8, name: "Paramount", icon: "⛰️", position: "3.4", change: "+0.3", positive: true },
  { rank: 9, name: "Roku", icon: "📱", position: "3.8", change: "-0.4", positive: false },
  { rank: 10, name: "Tubi", icon: "📺", position: "4.2", change: "+0.1", positive: true },
];

export const ResponsePositionTable = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Classement des{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Positions dans les Réponses
              </span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Position moyenne dans les réponses des assistants IA
            </p>
          </div>
        </div>

        <Card className="overflow-hidden border-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-border bg-muted/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Entreprise</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Position Moyenne</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Changement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {responsePositions.map((brand) => (
                  <tr
                    key={brand.rank}
                    className="transition-all hover:bg-muted/20 animate-fade-in"
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
                    <td className="px-6 py-4 text-right">
                      <span className="text-lg font-bold">{brand.position}</span>
                      <span className="ml-1 text-sm text-muted-foreground">ème</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold ${
                          brand.positive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {brand.positive ? "↑" : "↓"} {Math.abs(parseFloat(brand.change))}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <td colSpan={3} className="px-6 py-4 text-center">
                    <span className="text-sm text-muted-foreground">
                      Votre entreprise
                    </span>
                    <span className="ml-2 cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-secondary">
                      Suivez votre Position →
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-6 rounded-lg border border-border bg-muted/20 p-4">
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-semibold">Note:</span> Une position plus basse (proche de 1) indique que la marque 
            apparaît plus tôt dans les réponses des assistants IA, ce qui signifie une meilleure visibilité.
          </p>
        </div>
      </div>
    </section>
  );
};
