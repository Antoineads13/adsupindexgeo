import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const topBrands = [
  { name: "Amazon", score: "43.3%", change: "+5%", trending: "up", icon: "🛒", color: "#FF9900" },
  { name: "Hulu", score: "36.7%", change: "+11%", trending: "up", icon: "🎬", color: "#1CE783" },
  { name: "Netflix", score: "31.9%", change: "+4%", trending: "up", icon: "🎬", color: "#E50914" },
];

const trendData = [
  { date: "Nov 10", Amazon: 42.5, Hulu: 34.2, Netflix: 30.8 },
  { date: "Nov 13", Amazon: 41.8, Hulu: 35.1, Netflix: 31.2 },
  { date: "Nov 15", Amazon: 43.1, Hulu: 36.0, Netflix: 31.5 },
  { date: "Nov 17", Amazon: 42.9, Hulu: 36.5, Netflix: 31.0 },
  { date: "Nov 19", Amazon: 43.3, Hulu: 36.7, Netflix: 31.9 },
];

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

export const TopBrandsWithChart = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-muted-foreground">
              Top <span className="text-foreground">Beauté</span> marques cette semaine
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-sm font-medium">ChatGPT</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-sm font-medium">United States</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-sm font-medium">Week of Nov 19</span>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden border-2 p-0">
          {/* Top 3 Brands */}
          <div className="grid grid-cols-3 border-b-2 border-border">
            {topBrands.map((brand, index) => (
              <div
                key={brand.name}
                className={`group relative p-8 transition-all hover:bg-muted/30 ${
                  index < 2 ? "border-r-2 border-border" : ""
                }`}
              >
                <div className="absolute right-6 top-6 text-5xl opacity-20 transition-opacity group-hover:opacity-30">
                  {brand.icon}
                </div>
                
                <div className="relative">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">Score de Visibilité</p>
                  <div className="mb-6 flex items-end gap-3">
                    <h3 className="text-5xl font-bold">{brand.score}</h3>
                    <span
                      className={`mb-2 text-lg font-bold ${
                        brand.trending === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {brand.change}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${brand.color}20` }}
                    >
                      <span className="text-2xl">{brand.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold">{brand.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="p-6">
            <ResponsiveContainer width="100%" height={350}>
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
                  stroke="#FF9900"
                  strokeWidth={3}
                  dot={{ fill: "#FF9900", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Hulu"
                  stroke="#1CE783"
                  strokeWidth={3}
                  dot={{ fill: "#1CE783", r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Netflix"
                  stroke="#E50914"
                  strokeWidth={3}
                  dot={{ fill: "#E50914", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </section>
  );
};
