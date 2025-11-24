# Cahier des Charges - Plateforme d'Analytics AI pour Marques

## 1. Vue d'ensemble du projet

### 1.1 Objectif
Développer une plateforme web permettant de suivre et analyser la visibilité des marques dans les réponses des assistants IA (ChatGPT, Perplexity, AI Overview).

### 1.2 Public cible
- Marques et entreprises souhaitant optimiser leur visibilité dans l'écosystème IA
- Agences marketing et consultants
- Analystes et décideurs stratégiques

## 2. Architecture technique

### 2.1 Stack technologique recommandée

**Frontend:**
- Framework: React 18+ avec TypeScript
- Build tool: Vite
- Styling: Tailwind CSS avec design system personnalisé
- Composants UI: Shadcn/ui (Radix UI)
- Routing: React Router v6
- State management: TanStack Query (React Query)
- Graphiques: Recharts

**Backend:**
- Runtime: Deno (Edge Functions)
- Base de données: PostgreSQL (via Supabase ou équivalent)
- API: RESTful
- Authentification: JWT + OAuth (optionnel)

**Hébergement:**
- Frontend: Vercel / Netlify / Cloudflare Pages
- Backend: Supabase / Railway / Fly.io
- Base de données: Supabase PostgreSQL

### 2.2 Architecture système

```
┌─────────────────┐
│   Google Sheets │ (Source de données)
└────────┬────────┘
         │
         │ API REST
         │
┌────────▼────────┐
│  Edge Function  │ (Backend serverless)
│  Deno Runtime   │
└────────┬────────┘
         │
         │ JSON
         │
┌────────▼────────┐
│  React Frontend │
│  + Recharts     │
└─────────────────┘
```

## 3. Fonctionnalités détaillées

### 3.1 Page d'accueil (Landing Page)

**Header:**
- Logo
- Navigation principale (Accueil, Industries, Pricing, À propos)
- Bouton CTA "Commencer"

**Hero Section:**
- Titre accrocheur avec gradient
- Sous-titre explicatif
- Bouton d'action principal
- Image/animation illustrative
- Badge "Données mises à jour quotidiennement"

**Onglets de catégories:**
- Système de tabs sticky (reste visible au scroll)
- Catégories: Beauté, Aérospatiale, Automobile, Finance, Restauration, Pharmaceutique, Technologie, Plus
- État actif/inactif/disabled
- Design avec gradient pour l'onglet actif

### 3.2 Section Analytics - Top Marques

**Affichage:**
- Top 3 marques avec cartes dédiées
- Informations par carte:
  - Rang
  - Nom de la marque
  - Part de marché (%)
  - Nombre total de mentions

**Graphique de visibilité quotidienne:**
- Graphique en lignes (line chart)
- Axe X: Dates
- Axe Y: Nombre de mentions
- Lignes multiples (top 5 marques)
- Légende avec code couleur
- Tooltip interactif au survol
- Animation fluide

### 3.3 Tableau des marques (Brand Table)

**Colonnes:**
- Rang
- Nom de l'entreprise
- Part de marché (%)
- Total de mentions

**Fonctionnalités:**
- Scroll vertical avec header fixe
- Design responsive (mobile-friendly)
- États de chargement (skeleton loaders)
- Ligne spéciale "Votre entreprise" avec CTA

**Données:**
- Minimum 50+ marques affichées
- Tri par rang croissant
- Mise à jour automatique

### 3.4 Tableau des positions moyennes (Response Position Table)

**Colonnes:**
- Marque
- Position moyenne dans les réponses
- Mentions ChatGPT
- Mentions Perplexity

**Spécifications:**
- Affichage des positions avec précision (ex: 2.3)
- Code couleur pour les performances
- Note explicative du système de classement

### 3.5 Tableau des mots-clés (Keyword Table)

**Colonnes:**
- Mot-clé
- Volume de prompts
- Variation (↑/↓ avec %)

**Design:**
- Background avec gradient
- Effet de pattern décoratif
- Indicateurs visuels de tendance
- Format des nombres (1.2k, 45k, etc.)

### 3.6 Section Fonctionnalités (Feature Cards)

**3 cartes principales:**
1. **Analyse en temps réel**
   - Icône: Radar/Analytics
   - Description des capacités

2. **Insights détaillés**
   - Icône: Target/Bullseye
   - Description des métriques

3. **Rapports personnalisés**
   - Icône: FileText
   - Description des exports

### 3.7 Section Industries

**Affichage:**
- Grid de cartes par industrie
- Icônes représentatives
- Nombre de marques trackées
- État actif/à venir

**Industries couvertes:**
- Beauté & Cosmétiques
- Aérospatiale & Défense
- Automobile
- Finance & Banque
- Restauration
- Pharmaceutique
- Technologie
- E-commerce
- Santé
- Éducation
- Immobilier
- Énergie

### 3.8 FAQ

**Format:**
- Composant Accordion
- Minimum 6-8 questions
- Design épuré et accessible

**Questions types:**
- Comment fonctionne le système ?
- D'où viennent les données ?
- Fréquence de mise à jour
- Coût du service
- Intégrations disponibles

### 3.9 Call-to-Action (CTA)

**Contenu:**
- Titre impactant
- Sous-titre motivant
- Bouton d'action principal
- Design avec gradient de fond

### 3.10 Footer

**Sections:**
- À propos
- Liens utiles
- Réseaux sociaux
- Mentions légales
- Copyright

## 4. Backend - Edge Function

### 4.1 Endpoint principal: `/fetch-beauty-data`

**Méthode:** GET

**Fonctionnalités:**
- Récupération des données depuis Google Sheets API
- Parsing et transformation des données
- Gestion du cache (optionnel)
- Gestion des erreurs
- Support CORS

**Réponse JSON:**
```json
{
  "brands": [
    {
      "rank": 1,
      "name": "Nom de la marque",
      "totalMentions": 1234,
      "marketShare": 12.5,
      "chatGPTMentions": 567,
      "perplexityMentions": 345,
      "aiOverviewMentions": 322,
      "averagePosition": 2.3
    }
  ],
  "dailyVisibility": [
    {
      "date": "2024-01-15",
      "brand": "Nom de la marque",
      "mentions": 45
    }
  ],
  "lastUpdated": "2024-01-15T10:30:00Z"
}
```

### 4.2 Configuration requise

**Secrets/Variables d'environnement:**
- `GOOGLE_SHEETS_API_KEY`: Clé API Google Sheets
- `SPREADSHEET_ID`: ID de la feuille Google Sheets source
- `SUPABASE_URL` (si utilisé)
- `SUPABASE_ANON_KEY` (si utilisé)

**Permissions Google Sheets API:**
- Google Sheets API v4 activée
- Accès en lecture aux spreadsheets

## 5. Source de données - Google Sheets

### 5.1 Structure de la feuille principale

**Colonnes requises:**
- Rank (A)
- Company/Brand Name (B)
- Total Mentions (C)
- Market Share % (D)
- ChatGPT Mentions (E)
- Perplexity Mentions (F)
- AI Overview Mentions (G)
- Average Position (H)

### 5.2 Feuille "Daily Visibility" (optionnelle)

**Colonnes requises:**
- Date (A)
- Brand (B)
- Mentions (C)

**Format:**
- Une ligne par jour et par marque
- Dates au format ISO ou DD/MM/YYYY
- Données chronologiques

## 6. Design System

### 6.1 Palette de couleurs

**Variables CSS (HSL):**
```css
:root {
  --primary: [HSL principale]
  --secondary: [HSL secondaire]
  --accent: [HSL accent]
  --background: [HSL fond]
  --foreground: [HSL texte]
  --muted: [HSL sourdine]
  --border: [HSL bordure]
}
```

**Gradients:**
- Gradient primaire: primary → secondary
- Gradient hero: multi-étapes avec opacité

### 6.2 Typographie

**Polices:**
- Principale: Inter / Plus Jakarta Sans / System UI
- Titres: Font-weight 600-700
- Corps: Font-weight 400-500

**Tailles:**
- H1: 2.5rem - 4rem
- H2: 2rem - 3rem
- H3: 1.5rem - 2rem
- Body: 1rem
- Small: 0.875rem

### 6.3 Composants réutilisables

**Boutons:**
- Variants: default, outline, ghost, destructive
- Tailles: sm, md, lg
- États: hover, active, disabled

**Cards:**
- Padding standardisé
- Border radius cohérent
- Shadow subtile

**Tables:**
- Header sticky
- Zebra striping (optionnel)
- Hover states

## 7. Responsive Design

### 7.1 Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 7.2 Adaptations mobiles

**Navigation:**
- Menu hamburger sur mobile
- Navigation horizontale sur desktop

**Tableaux:**
- Scroll horizontal sur mobile
- Colonnes réduites si nécessaire

**Graphiques:**
- Height adaptatif
- Légende repositionnée

**Cards:**
- Stack vertical sur mobile
- Grid sur desktop

## 8. Performance

### 8.1 Optimisations frontend

- Code splitting par route
- Lazy loading des composants lourds
- Memoization des calculs (useMemo)
- Debouncing des recherches
- Virtual scrolling pour grandes listes

### 8.2 Optimisations backend

- Cache des données Google Sheets (5-10 min)
- Compression gzip/brotli
- CDN pour assets statiques
- Rate limiting

### 8.3 Métriques cibles

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90

## 9. Sécurité

### 9.1 Frontend

- Validation des entrées utilisateur
- Sanitization des données affichées
- HTTPS obligatoire
- Content Security Policy

### 9.2 Backend

- Rate limiting par IP
- Validation des requêtes
- Secrets dans variables d'environnement
- CORS configuré strictement
- Logs des erreurs (sans données sensibles)

### 9.3 Google Sheets API

- Clé API avec restrictions:
  - IP whitelist (si possible)
  - Restriction aux API Google Sheets uniquement
  - Quota monitoring

## 10. Tests

### 10.1 Tests unitaires

- Composants React (Jest + React Testing Library)
- Fonctions utilitaires
- Hooks personnalisés

### 10.2 Tests d'intégration

- Flux complets utilisateur
- Appels API
- Gestion des états de chargement/erreur

### 10.3 Tests E2E

- Parcours utilisateur critiques (Playwright/Cypress)
- Multi-navigateurs
- Responsive testing

## 11. Déploiement

### 11.1 Environnements

**Staging:**
- URL: staging.votredomaine.com
- Données de test
- CI/CD automatique

**Production:**
- URL: www.votredomaine.com
- Données réelles
- Déploiement manuel ou après validation

### 11.2 CI/CD

**Pipeline:**
1. Lint & Format check
2. Tests unitaires
3. Tests d'intégration
4. Build
5. Tests E2E
6. Déploiement

**Outils:**
- GitHub Actions / GitLab CI / CircleCI
- Vercel CLI / Netlify CLI

### 11.3 Monitoring

**Métriques à tracker:**
- Uptime (> 99.9%)
- Response time API
- Error rate
- Trafic utilisateur

**Outils:**
- Sentry (erreurs)
- Google Analytics / Plausible (analytics)
- UptimeRobot (monitoring)

## 12. Documentation

### 12.1 Documentation technique

**README.md:**
- Installation
- Configuration
- Scripts disponibles
- Architecture

**API Documentation:**
- Endpoints
- Paramètres
- Réponses
- Exemples

### 12.2 Guide utilisateur

- Comment lire les métriques
- Interprétation des graphiques
- FAQ
- Contact support

## 13. Évolutions futures (Phase 2)

### 13.1 Fonctionnalités avancées

- Authentification utilisateur
- Dashboard personnalisé
- Alertes email
- Export PDF/CSV
- Comparaison de marques
- Historique temporel étendu
- API publique

### 13.2 Nouvelles industries

- Expansion progressive
- Système de catégories dynamiques

### 13.3 Intelligence artificielle

- Prédictions de tendances
- Recommandations stratégiques
- Analyse sentiment

## 14. Budget et timeline (Estimation)

### 14.1 Phase 1 - MVP (4-6 semaines)

**Semaine 1-2:** Setup + Backend
- Configuration projet
- Edge function + Google Sheets
- Tests API

**Semaine 3-4:** Frontend Core
- Design system
- Components UI
- Intégration API

**Semaine 5-6:** Polish + Déploiement
- Responsive
- Performance
- Tests
- Déploiement

### 14.2 Ressources nécessaires

**Équipe minimale:**
- 1 Lead Developer Full-Stack (React + Deno)
- 1 UI/UX Designer
- 1 QA Tester (optionnel mais recommandé)

**Compétences requises:**
- React 18+ & TypeScript
- Tailwind CSS
- Recharts
- Deno runtime
- Google Sheets API
- PostgreSQL (optionnel)
- Git & CI/CD

### 14.3 Coûts d'infrastructure (mensuel)

- Hébergement frontend: $0-20 (Vercel/Netlify free tier)
- Backend/Database: $0-25 (Supabase free tier ou Pro)
- Domaine: $10-15/an
- Google Sheets API: Gratuit (quotas généreux)
- Total: ~$5-50/mois selon échelle

## 15. Livrables

### 15.1 Code source

- Repository Git avec historique complet
- Code commenté et documenté
- Tests inclus
- Configuration CI/CD

### 15.2 Documentation

- README complet
- Guide de déploiement
- Documentation API
- Guide utilisateur

### 15.3 Environnements

- Staging fonctionnel
- Production déployée
- Accès admin configurés

### 15.4 Transfert de connaissances

- Session de formation (2-4h)
- Documentation vidéo (optionnel)
- Support post-lancement (1 mois recommandé)

## 16. Critères de succès

- ✅ Application déployée et accessible
- ✅ Données affichées correctement depuis Google Sheets
- ✅ Responsive sur mobile/tablet/desktop
- ✅ Performance > 90 Lighthouse
- ✅ Zéro erreur console en production
- ✅ Tests passent à 100%
- ✅ Documentation complète

## 17. Annexes

### 17.1 Exemples de code

**Hook React Query:**
```typescript
export const useBeautyData = () => {
  return useQuery({
    queryKey: ["beauty-data"],
    queryFn: async () => {
      const response = await fetch("/api/fetch-beauty-data");
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    },
    refetchInterval: 5 * 60 * 1000, // 5 minutes
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};
```

**Edge Function (structure):**
```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const handler = async (req: Request): Promise<Response> => {
  // CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Fetch from Google Sheets
    const data = await fetchSheetData();
    
    // Transform data
    const transformed = transformData(data);
    
    return new Response(JSON.stringify(transformed), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { status: 500, headers: corsHeaders }
    );
  }
};

serve(handler);
```

### 17.2 Checklist de déploiement

- [ ] Variables d'environnement configurées
- [ ] Google Sheets API key valide et testée
- [ ] Domaine configuré (SSL actif)
- [ ] Analytics installé
- [ ] Monitoring actif
- [ ] Backups configurés
- [ ] Documentation à jour
- [ ] Tests E2E passent
- [ ] Performance validée
- [ ] SEO optimisé (meta tags, sitemap)

---

## Contact et support

Pour toute question ou clarification sur ce cahier des charges, veuillez contacter:
- Email: [votre-email]
- Téléphone: [votre-numéro]
- Disponibilité: [horaires]

**Date de création:** [Date]  
**Version:** 1.0  
**Dernière mise à jour:** [Date]
