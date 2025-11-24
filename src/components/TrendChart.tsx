import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const trendData = [
  { date: "Nov 10", Amazon: 42.5, Hulu: 34.2, Netflix: 30.8 },
  { date: "Nov 13", Amazon: 41.8, Hulu: 35.1, Netflix: 31.2 },
  { date: "Nov 15", Amazon: 43.1, Hulu: 36.0, Netflix: 31.5 },
  { date: "Nov 17", Amazon: 42.9, Hulu: 36.5, Netflix: 31.0 },
  { date: "Nov 19", Amazon: 43.3, Hulu: 36.7, Netflix: 31.9 },
];

const brandColors = {
  Amazon: "#FF9900",
  Hulu: "#1CE783",
  Netflix: "#E50914",
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card p-3 shadow-lg">
        <p className="mb-2 text-sm font-semibold">{payload[0].payload.date}</p>
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

export const TrendChart = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-2 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Évolution de la Visibilité</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5">
                  <span className="text-sm font-medium">ChatGPT</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5">
                  <span className="text-sm font-medium">United States</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-1.5">
                  <span className="text-sm font-medium">Week of Nov 19</span>
                </div>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="date"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickLine={false}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 60]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                wrapperStyle={{
                  paddingTop: "20px",
                }}
                iconType="circle"
              />
              <Line
                type="monotone"
                dataKey="Amazon"
                stroke={brandColors.Amazon}
                strokeWidth={3}
                dot={{ fill: brandColors.Amazon, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Hulu"
                stroke={brandColors.Hulu}
                strokeWidth={3}
                dot={{ fill: brandColors.Hulu, r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Netflix"
                stroke={brandColors.Netflix}
                strokeWidth={3}
                dot={{ fill: brandColors.Netflix, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
};
