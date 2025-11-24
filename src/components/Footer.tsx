export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <span className="text-lg font-bold">Ad's Up</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Votre partenaire pour dominer la visibilité dans la recherche IA.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Produit</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Légal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Ad's Up Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
