import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useBeautyData, DailyVisibility } from "@/hooks/useBeautyData";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useMemo } from "react";
import { format, parseISO } from "date-fns";

const brandColors: Record<string, string> = {
  "La Roche-Posay": "#0066CC",
  "Avène": "#FF6B6B",
  "Bioderma": "#4ECDC4",
  "CeraVe": "#95E1D3",
  "SVR": "#F38181",
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="mb-2 text-sm font-semibold">{payload[0].payload.period}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span>{entry.name}:</span>
            </div>
            <span className="font-semibold">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const TopBrandsWithChart = () => {
  const { data: beautyData, isLoading, error } = useBeautyData();

  if (error) {
    return (
      <section className="bg-gradient-to-b from-background to-muted/20 py-16">
        <div className="container mx-auto px-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Erreur lors du chargement des données. Veuillez réessayer plus tard.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  const topBrands = beautyData?.brands.slice(0, 3) || [];
  
  // Process daily visibility data
  const chartData = useMemo(() => {
    if (!beautyData?.dailyVisibility || beautyData.dailyVisibility.length === 0) return [];

    // Group data by date
    const groupedByDate: Record<string, Record<string, number>> = {};
    
    beautyData.dailyVisibility.forEach((item: DailyVisibility) => {
      if (!groupedByDate[item.date]) {
        groupedByDate[item.date] = {};
      }
      groupedByDate[item.date][item.brand] = item.mentions;
    });

    // Convert to array format for recharts and format dates
    return Object.entries(groupedByDate).map(([date, brands]) => {
      try {
        const parsedDate = parseISO(date);
        return {
          date: format(parsedDate, "dd/MM"),
          fullDate: date,
          ...brands,
        };
      } catch {
        return {
          date,
          fullDate: date,
          ...brands,
        };
      }
    }).sort((a, b) => new Date(a.fullDate).getTime() - new Date(b.fullDate).getTime());
  }, [beautyData]);

  // Get top 5 brands for the chart
  const topChartBrands = useMemo(() => {
    if (!beautyData?.brands) return [];
    return beautyData.brands.slice(0, 5).map(b => b.name);
  }, [beautyData]);

  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Top <span className="text-foreground">Beauté</span> marques cette semaine
            </p>
            {beautyData?.lastUpdated && (
              <p className="text-xs text-muted-foreground">
                Dernière mise à jour: {new Date(beautyData.lastUpdated).toLocaleString('fr-FR')}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-sm font-medium">ChatGPT</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-sm font-medium">France</span>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden border-2 p-0">
          {/* Top 3 Brands */}
          <div className="grid grid-cols-3 border-b-2 border-border">
            {isLoading ? (
              Array(3).fill(0).map((_, idx) => (
                <div key={idx} className={`p-8 ${idx < 2 ? "border-r-2 border-border" : ""}`}>
                  <Skeleton className="mb-4 h-12 w-24" />
                  <Skeleton className="h-8 w-32" />
                </div>
              ))
            ) : (
              topBrands.map((brand, index) => (
                <div
                  key={brand.name}
                  className={`group relative p-8 transition-all hover:bg-muted/30 ${
                    index < 2 ? "border-r-2 border-border" : ""
                  }`}
                >
                  <div className="absolute right-6 top-6 text-5xl opacity-20 transition-opacity group-hover:opacity-30">
                    💄
                  </div>
                  
                  <div className="relative">
                    <p className="mb-2 text-sm font-medium text-muted-foreground">Part de Marché</p>
                    <div className="mb-6 flex items-end gap-3">
                      <h3 className="text-5xl font-bold">{brand.marketShare.toFixed(1)}%</h3>
                      <span className="mb-2 text-lg font-bold text-green-600">
                        {brand.rank === 1 ? "↑" : "→"}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                        style={{ 
                          backgroundColor: `${brandColors[brand.name] || "#E91E63"}20` 
                        }}
                      >
                        <span className="text-2xl">💄</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{brand.name}</h4>
                        <p className="text-xs text-muted-foreground">{brand.totalMentions.toLocaleString()} mentions</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Chart */}
          <div className="p-6">
            {isLoading ? (
              <Skeleton className="h-[400px] w-full" />
            ) : (
              <>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))"
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      label={{ 
                        value: 'Mentions', 
                        angle: -90, 
                        position: 'insideLeft', 
                        fill: "hsl(var(--muted-foreground))",
                        style: { fontWeight: 'bold' }
                      }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "2px solid hsl(var(--primary) / 0.3)",
                        borderRadius: "12px",
                        backdropFilter: "blur(12px)",
                        padding: "12px",
                      }}
                      labelStyle={{ color: "hsl(var(--foreground))", fontWeight: "bold", marginBottom: "8px" }}
                      itemStyle={{ color: "hsl(var(--foreground))" }}
                    />
                    <Legend 
                      wrapperStyle={{
                        paddingTop: "20px",
                      }}
                      iconType="line"
                    />
                    {topChartBrands.map((brand, index) => (
                      <Line
                        key={brand}
                        type="monotone"
                        dataKey={brand}
                        stroke={brandColors[brand] || "#E91E63"}
                        strokeWidth={3}
                        dot={{ fill: brandColors[brand] || "#E91E63", r: 6, strokeWidth: 2, stroke: "hsl(var(--background))" }}
                        activeDot={{ r: 8, strokeWidth: 2 }}
                        name={brand}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
                
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Données basées sur {chartData.length} jours d'analyse • Top 5 marques
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
