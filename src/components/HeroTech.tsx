import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export const HeroTech = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(236, 36, 119, 0.4)";
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(236, 36, 119, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated particle network background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(330_81%_50%_/_0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(330_81%_50%_/_0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[100px] animate-pulse [animation-delay:1s]" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main content centered */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ad's Up INDEX GEO
              </span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Analysez votre
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
                    Présence IA
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10" />
                </span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
                Le premier indice de mesure pour votre visibilité dans les assistants IA. 
                Données en temps réel, benchmarks sectoriels, optimisation continue.
              </p>
            </div>

            {/* Animated brand logos carousel */}
            <div className="relative overflow-hidden py-8">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex gap-12 animate-scroll">
                {/* First set of logos */}
                {["L'Oréal", "Estée Lauder", "Nivea", "Maybelline", "Lancôme", "Clinique", "Garnier", "Neutrogena", "Shiseido", "MAC"].map((brand, i) => (
                  <div
                    key={`brand-1-${i}`}
                    className="flex-shrink-0 flex items-center justify-center min-w-[160px] h-20 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm px-6 hover:border-primary/40 hover:bg-card/70 transition-all"
                  >
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {brand}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {["L'Oréal", "Estée Lauder", "Nivea", "Maybelline", "Lancôme", "Clinique", "Garnier", "Neutrogena", "Shiseido", "MAC"].map((brand, i) => (
                  <div
                    key={`brand-2-${i}`}
                    className="flex-shrink-0 flex items-center justify-center min-w-[160px] h-20 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm px-6 hover:border-primary/40 hover:bg-card/70 transition-all"
                  >
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-lg font-semibold shadow-[0_0_40px_hsl(var(--primary)_/_0.3)] transition-all hover:shadow-[0_0_60px_hsl(var(--primary)_/_0.5)] hover:scale-105"
              >
                <span className="relative z-10">
                  Réservez votre Audit GEO
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-border/50 max-w-md mx-auto">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full border-4 border-background bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg"
                    style={{ zIndex: 5 - i }}
                  >
                    {i === 1 ? "L" : i === 2 ? "O" : i === 3 ? "R" : "E"}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">200+ marques</p>
                <p className="text-xs text-muted-foreground">nous font confiance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
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
