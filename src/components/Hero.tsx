import { Button } from "@/components/ui/button";

const brandLogos = [
  { name: "Amazon", icon: "🛒" },
  { name: "Apple", icon: "🍎" },
  { name: "Google", icon: "🔍" },
  { name: "Meta", icon: "📱" },
  { name: "Microsoft", icon: "💻" },
  { name: "Netflix", icon: "🎬" },
  { name: "Nike", icon: "👟" },
  { name: "Spotify", icon: "🎵" },
  { name: "Tesla", icon: "⚡" },
  { name: "Uber", icon: "🚗" },
  { name: "Disney", icon: "🏰" },
  { name: "Samsung", icon: "📱" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(330_81%_50%/0.1),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(280_69%_50%/0.1),transparent_50%)]" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mb-6 inline-block">
          <span className="text-sm font-semibold tracking-wider text-primary">
            AD'S up CONSULTING
          </span>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Découvrez qui domine
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            la Recherche IA
          </span>
        </h1>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Explorez les meilleures marques, augmentez la visibilité de votre recherche IA, 
          alimentée par des millions de conversations IA réelles.
        </p>
        
        <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary text-lg font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Commencer Gratuitement
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 text-lg font-semibold transition-all hover:scale-105"
          >
            Réserver une Démo
          </Button>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:gap-6">
            {brandLogos.map((brand, index) => (
              <div
                key={brand.name}
                className="group relative aspect-square rounded-2xl bg-card p-4 shadow-md transition-all hover:scale-110 hover:shadow-xl"
                style={{
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex h-full items-center justify-center">
                  <span className="text-4xl opacity-80 transition-opacity group-hover:opacity-100">
                    {brand.icon}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};
