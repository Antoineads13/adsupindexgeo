import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(330_81%_50%/0.15),transparent_70%)]" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mb-6 inline-block">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-md">
            AD'S UP CONSULTING
          </span>
        </div>
        
        <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Commencez à suivre votre
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            visibilité IA aujourd'hui
          </span>
        </h2>
        
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          Rejoignez les millions de professionnels qui utilisent l'IA pour découvrir de nouveaux produits et marques
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary text-lg font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            Obtenir une Démo
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 bg-white text-lg font-semibold transition-all hover:scale-105"
          >
            Commencer Gratuitement
          </Button>
        </div>
      </div>
    </section>
  );
};
