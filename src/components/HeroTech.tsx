import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Globe } from "lucide-react";

export const HeroTech = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
              <Globe className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                INDEX GEO AD'S UP
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Mesurez votre
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                  Présence IA
                </span>
              </h1>
              
              <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                L'outil de référence pour analyser et optimiser votre visibilité dans les assistants IA.
                Données en temps réel, insights exploitables, positionnement sectoriel.
              </p>
            </div>

            {/* Key metrics */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">98.3%</p>
                  <p className="text-sm text-muted-foreground">Précision</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">15K+</p>
                  <p className="text-sm text-muted-foreground">Marques suivies</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-primary to-secondary text-lg font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                Audit Gratuit de Présence IA
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 text-lg font-semibold transition-all hover:scale-105"
              >
                Voir la Démo Interactive
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-secondary"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">+500 marques nous font confiance</p>
                <p className="text-xs text-muted-foreground">dans 12 secteurs d'activité</p>
              </div>
            </div>
          </div>

          {/* Right content - Data visualization */}
          <div className="relative">
            <div className="relative rounded-2xl border-2 border-border bg-card/50 p-6 backdrop-blur-sm">
              <img 
                src="/geo-animation.gif" 
                alt="Index GEO Animation"
                className="w-full rounded-lg"
              />
              
              {/* Floating stats cards */}
              <div className="absolute -left-4 top-1/4 rounded-lg border border-border bg-card p-4 shadow-xl">
                <p className="text-xs text-muted-foreground">Visibilité ChatGPT</p>
                <p className="text-2xl font-bold text-green-600">+24%</p>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 rounded-lg border border-border bg-card p-4 shadow-xl">
                <p className="text-xs text-muted-foreground">Position Moyenne</p>
                <p className="text-2xl font-bold text-primary">2.3</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
