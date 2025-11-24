import { Card } from "@/components/ui/card";
import { useBeautyData } from "@/hooks/useBeautyData";
import { Skeleton } from "@/components/ui/skeleton";

export const BrandTable = () => {
  const { data: beautyData, isLoading } = useBeautyData();

  const brands = beautyData?.brands.slice(0, 20) || [];

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
                  <th className="px-6 py-4 text-right text-sm font-semibold">Part de Marché</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Mentions Totales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {isLoading ? (
                  Array(20).fill(0).map((_, idx) => (
                    <tr key={idx}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-8 w-8 rounded-lg" />
                          <Skeleton className="h-10 w-10 rounded-lg" />
                          <Skeleton className="h-5 w-32" />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="ml-auto h-6 w-20" />
                      </td>
                      <td className="px-6 py-4">
                        <Skeleton className="ml-auto h-6 w-24" />
                      </td>
                    </tr>
                  ))
                ) : (
                  brands.map((brand) => (
                    <tr
                      key={brand.rank}
                      className="transition-colors hover:bg-muted/20 animate-fade-in"
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
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-4">
                          <span className="text-lg font-bold">{brand.marketShare.toFixed(2)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-semibold">{brand.totalMentions.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))
                )}
                <tr className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <td colSpan={3} className="px-6 py-4 text-center">
                    <span className="text-sm text-muted-foreground">
                      Votre entreprise
                    </span>
                    <span className="ml-2 cursor-pointer text-sm font-semibold text-primary transition-colors hover:text-secondary">
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
