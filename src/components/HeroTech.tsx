import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const HeroTech = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stats, setStats] = useState({
    visibility: 0,
    position: 0,
    brands: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        visibility: Math.floor(24 * progress),
        position: (2.3 * progress).toFixed(1) as any,
        brands: Math.floor(15247 * progress),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

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

            {/* Animated metrics centered */}
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm min-w-[140px]">
                  <p className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                    +{stats.visibility}%
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Croissance moyenne</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm min-w-[140px]">
                  <p className="text-4xl font-bold bg-gradient-to-br from-secondary to-secondary/60 bg-clip-text text-transparent">
                    {stats.position}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Position moyenne</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm min-w-[140px]">
                  <p className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                    {stats.brands.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Marques suivies</p>
                </div>
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
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/30 text-lg font-semibold backdrop-blur-sm bg-background/50 hover:bg-primary/5 hover:border-primary/50 transition-all hover:scale-105"
              >
                Voir la Démo Live
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
                <p className="text-sm font-bold">+500 marques</p>
                <p className="text-xs text-muted-foreground">nous font confiance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes expandBar {
          from {
            width: 0;
          }
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
