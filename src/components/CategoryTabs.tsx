import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  "Tous",
  "Streaming",
  "Aérospatiale",
  "Automobile",
  "Finance",
  "Restauration",
  "Pharmaceutique",
  "Technologie",
  "Plus",
];

export const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  return (
    <section className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                  : "hover:bg-muted"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
