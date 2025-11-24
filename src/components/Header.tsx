import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
            <span className="text-xl font-bold text-white">A</span>
          </div>
          <div>
            <span className="text-xl font-bold">
              Ad's Up <span className="text-primary">Consulting</span>
            </span>
            <p className="text-xs text-muted-foreground">Index GEO</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Se connecter
          </Button>
          <Button className="bg-gradient-to-r from-primary to-secondary font-semibold">
            Audit Gratuit
          </Button>
        </div>
      </div>
    </header>
  );
};
