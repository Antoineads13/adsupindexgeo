import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useBeautyData, DailyVisibility } from "@/hooks/useBeautyData";
import { useMemo } from "react";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

export const DailyVisibilityChart = () => {
  const { data, isLoading } = useBeautyData();

  const chartData = useMemo(() => {
    if (!data?.dailyVisibility || data.dailyVisibility.length === 0) return [];

    // Group data by date
    const groupedByDate: Record<string, Record<string, number>> = {};
    
    data.dailyVisibility.forEach((item: DailyVisibility) => {
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
          date: format(parsedDate, "dd MMM", { locale: fr }),
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
  }, [data]);

  // Get top brands for the legend
  const topBrands = useMemo(() => {
    if (!data?.brands) return [];
    return data.brands.slice(0, 5).map(b => b.name);
  }, [data]);

  const brandColors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))", 
    "hsl(142 76% 36%)",
    "hsl(217 91% 60%)",
    "hsl(280 69% 50%)",
  ];

  if (isLoading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-64 mb-8" />
            <div className="h-96 bg-muted rounded" />
          </div>
        </div>
      </section>
    );
  }

  if (!chartData || chartData.length === 0) {
    console.log("No daily visibility data available");
    return null;
  }

  console.log("Daily visibility chart data:", chartData.length, "days", topBrands);

  return (
    <section className="relative py-16 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(330_81%_50%_/_0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(330_81%_50%_/_0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Visibilité{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jour par Jour
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Évolution quotidienne des mentions dans les assistants IA
          </p>
        </div>

        <Card className="overflow-hidden border-2 border-primary/20 bg-card/80 backdrop-blur-xl shadow-[0_0_50px_hsl(var(--primary)_/_0.1)] p-6">
          <ResponsiveContainer width="100%" height={500}>
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
              {topBrands.map((brand, index) => (
                <Line
                  key={brand}
                  type="monotone"
                  dataKey={brand}
                  stroke={brandColors[index]}
                  strokeWidth={3}
                  dot={{ fill: brandColors[index], r: 6, strokeWidth: 2, stroke: "hsl(var(--background))" }}
                  activeDot={{ r: 8, strokeWidth: 2 }}
                  name={brand}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Données basées sur {chartData.length} jours d'analyse • Top 5 marques
          </div>
        </Card>
      </div>
    </section>
  );
};
