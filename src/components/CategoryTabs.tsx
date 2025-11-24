import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Beauté", enabled: true },
  { name: "Aérospatiale", enabled: false },
  { name: "Automobile", enabled: false },
  { name: "Finance", enabled: false },
  { name: "Restauration", enabled: false },
  { name: "Pharmaceutique", enabled: false },
  { name: "Technologie", enabled: false },
  { name: "Plus", enabled: false },
];

export const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("Beauté");

  return (
    <section className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "ghost"}
              size="sm"
              onClick={() => category.enabled && setActiveCategory(category.name)}
              disabled={!category.enabled}
              className={`whitespace-nowrap transition-all ${
                activeCategory === category.name
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                  : category.enabled
                  ? "hover:bg-muted"
                  : "text-muted-foreground opacity-50 cursor-not-allowed"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
