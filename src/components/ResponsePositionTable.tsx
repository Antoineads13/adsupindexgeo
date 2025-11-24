import { Card } from "@/components/ui/card";
import { useBeautyData } from "@/hooks/useBeautyData";
import { Skeleton } from "@/components/ui/skeleton";

export const ResponsePositionTable = () => {
  const { data: beautyData, isLoading } = useBeautyData();

  const brands = beautyData?.brands.slice(0, 10) || [];

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
                  <th className="px-6 py-4 text-right text-sm font-semibold">Mentions ChatGPT</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Mentions Perplexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {isLoading ? (
                  Array(10).fill(0).map((_, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-8 w-8 rounded-lg" />
                          <Skeleton className="h-10 w-10 rounded-lg" />
                          <Skeleton className="h-5 w-32" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="ml-auto h-6 w-16" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="ml-auto h-6 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="ml-auto h-6 w-20" />
                      </td>
                    </tr>
                  ))
                ) : (
                  brands.map((brand) => (
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
                            <span className="text-xl">💄</span>
                          </div>
                          <span className="text-base font-semibold">{brand.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-lg font-bold">{brand.averagePosition.toFixed(1)}</span>
                        <span className="ml-1 text-sm text-muted-foreground">ème</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-semibold">{brand.chatGPTMentions.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-semibold">{brand.perplexityMentions.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))
                )}
                <tr className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <td colSpan={4} className="px-6 py-4 text-center">
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
