# Brief Claude Code — Refonte du site **L'Épopée** (bistrot à Tours)

## Contexte projet

Refonte du site web du restaurant **L'Épopée** (https://epopeetours.fr/), bistrot convivial situé à Tours (37).

**Site actuel** : basique, dominé par un gros QR code sur la home, design daté.
**Objectif** : faire passer le site à un niveau design très supérieur (inspiration template Framer "Savoria") tout en gardant l'ADN bistrot chaleureux (pas Michelin froid).

Positionnement :
- **Bistrot** (ton chaleureux, pas guindé, pas étoilé)
- Produits de saison, cuisine du marché
- Sélection de vins
- Ambiance conviviale, moments à partager

**Identité visuelle existante à préserver** : le logo "L'ÉPOPÉE" est déjà bien identifiable — écriture rouge vif avec un "É" stylisé en lightning bolt. **C'est l'élément d'identité à garder** et autour duquel la palette est construite.

**Référence visuelle** : template Savoria fournie dans ce dossier (`index.html`). On garde le squelette et le niveau de raffinement, on adapte le ton (bistrot chaleureux vs palace Michelin).

---

## Objectif

Page one-page (home) en **HTML/CSS/JS vanilla**, déployée sur **GitHub Pages**.

Visuellement inspirée de la référence fournie, mais :
- Contenu 100 % adapté à L'Épopée (voir section Contenu ci-dessous)
- **Direction "bistrot chic sombre"** — sections sombres contrastées + accents rouge L'Épopée
- Photos actuelles de Savoria utilisées comme **placeholders** — Victor fournira les vraies photos plus tard
- Zéro dépendance Framer runtime

**Les horaires, téléphone, adresse précise** sont pour l'instant des placeholders — c'est une maquette visuelle, pas le site de production.

---

## Ce que tu as dans ce dossier

```
├── index.html                  ← maquette de référence (ouvre-la pour voir la cible visuelle)
├── css/framer-styles.css       ← CSS complet Framer (150 KB) — référence de tokens UNIQUEMENT
├── assets/images/              ← 31 images Savoria (placeholders)
├── assets/fonts/               ← 56 fonts woff2 (Fraunces + Inter)
├── DESIGN-TOKENS.md            ← couleurs, fonts, tailles extraites du CSS
├── ASSETS-INVENTORY.json       ← liste source des assets
├── url-to-local-map.json       ← mapping URL Framer → chemin local
└── BRIEF-CLAUDE-CODE.md        ← ce fichier
```

**Ouvre `index.html` dans un navigateur avant de commencer** pour visualiser la cible. Le CSS Framer est à utiliser comme **référence de design tokens**, pas à copier-coller dans ta refonte.

---

## Stack cible

**HTML + CSS + JS vanilla** (single-page).

Structure finale :
```
/
├── index.html                  ← unique page
├── css/
│   ├── reset.css               ← modern-normalize ou reset minimal
│   ├── tokens.css              ← variables CSS (couleurs, fonts, spacings)
│   ├── base.css                ← typo, boutons, éléments de base
│   ├── components.css          ← nav, cards, marquee, slider, etc.
│   └── sections.css            ← styles spécifiques par section
├── js/
│   └── main.js                 ← nav mobile, scroll animations, slider
├── assets/
│   ├── fonts/                  ← woff2 (Fraunces + Inter) auto-hébergées
│   └── images/                 ← placeholders Savoria puis photos L'Épopée
├── .nojekyll                   ← pour GitHub Pages
└── README.md                   ← infos de build/deploy
```

Pas de bundler, pas de node_modules. Déploiement : push sur `main` → GitHub Pages sert la racine.

---

## Design tokens L'Épopée — Direction "Bistrot chic sombre"

**Palette** (validée par Victor) :

```css
:root {
  /* Fonds */
  --color-bg:          #1a1613;   /* brun-noir chaud — sections principales (hero, nav, footer) */
  --color-bg-alt:      #faf5ed;   /* crème ivoire — sections contrastantes (ambiance, menu) */
  --color-bg-deep:     #0f0b09;   /* brun-noir très profond — hover, overlays */

  /* Textes */
  --color-fg:          #f5ebe0;   /* ivoire — texte sur fond sombre */
  --color-fg-alt:      #2a1f1a;   /* brun très foncé — texte sur fond clair */
  --color-fg-muted:    #a8998b;   /* marron clair — texte secondaire sur sombre */
  --color-fg-muted-alt:#6b5d52;   /* marron doux — texte secondaire sur clair */

  /* Accent — Rouge L'Épopée (basé sur le logo actuel) */
  --color-accent:      #c41e1e;   /* rouge signature — CTAs, liens, détails */
  --color-accent-hover:#a01818;   /* rouge foncé — hover des CTAs */
  --color-accent-soft: #f4d4d4;   /* rouge très pâle — fonds de badges, survols légers */

  /* Utilitaires */
  --color-border:      rgba(245, 235, 224, 0.12);  /* bordures subtiles sur sombre */
  --color-border-alt:  rgba(42, 31, 26, 0.12);     /* bordures subtiles sur clair */

  /* Typographie */
  --font-display: 'Fraunces', 'Fraunces Placeholder', serif;
  --font-body:    'Inter', 'Inter Placeholder', sans-serif;

  /* Échelles typo (à inspirer du CSS Framer — à affiner selon vues) */
  --fs-hero:       clamp(2.5rem, 5vw + 1rem, 5.5rem);
  --fs-h1:         clamp(2rem, 3vw + 1rem, 3.5rem);
  --fs-h2:         clamp(1.5rem, 2vw + 0.75rem, 2.5rem);
  --fs-body:       1rem;
  --fs-small:      0.875rem;

  /* Espacements */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Rayons */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 999px;

  /* Transitions */
  --ease-out: cubic-bezier(0.12, 0.23, 0.5, 1);
  --dur-fast: 200ms;
  --dur-med:  400ms;
  --dur-slow: 700ms;
}
```

**Répartition visuelle des sections (qui est sombre / qui est clair)** :

| Section | Fond | Justification |
|---|---|---|
| Nav | `--color-bg` (sombre) | Continuité avec hero |
| Hero | `--color-bg` + image overlay | Impact premier regard |
| Marquee L'ÉPOPÉE | `--color-bg` | Transition |
| Notre Carte (4 cartes) | `--color-bg-alt` (crème) | Lisibilité, met les plats en valeur |
| Signature Dishes (marquee) | `--color-bg` | Contraste |
| Ambiance (gallery) | `--color-bg-alt` (crème) | Photos brillent sur fond clair |
| À propos + atouts | `--color-bg` (sombre) | Moment de "storytelling" |
| Témoignages | `--color-bg-alt` (crème) | Légèreté |
| Réservation | `--color-bg` (sombre) | Moment d'engagement, CTA fort |
| Footer | `--color-bg-deep` (très sombre) | Clôture |

**Typographie** :
- **Titres** : Fraunces — serif variable, chaleureux. Weights 400 (normal) et 500 (semibold). Italique utilisé avec parcimonie sur quelques mots clés ("épopée", "convivial") pour le caractère bistrot.
- **Corps** : Inter — Weights 400 et 500.
- **Jamais de font-weight 700+ sur Fraunces** (ça devient gras et perd son élégance).
- **Jamais de tout-majuscules sur Fraunces** sauf marquee (petit label type "NOTRE CARTE").

**Logo** : pour la maquette, reproduis "L'ÉPOPÉE" en texte stylé (Fraunces weight 500, letterspacing légèrement serré, couleur `--color-accent` rouge) avec un petit accent graphique sur le É (un lightning bolt minimaliste en SVG inline). Le logo définitif sera fourni par Victor en SVG.

---

## Contenu (à intégrer dans le HTML)

### Nav
- Logo : `L'ÉPOPÉE` (stylisé, rouge)
- Liens : `Accueil` · `Carte` · `Ambiance` · `À propos` · `Contact`
- CTA droite : `Réserver` (bouton plein rouge)

### Hero
- **Sur-titre discret** (optionnel) : "Bistrot · Tours"
- **Titre** : 
  > Bienvenue à *L'Épopée*,  
  > votre bistrot convivial
  
  (le mot "L'Épopée" en italique Fraunces, tout en plus gros — à la ligne "votre bistrot convivial")
- **Sous-titre** : "Produits de saison, sélection de vins de vignerons, et une ambiance chaleureuse pour partager des moments à partager."
- **CTA principal** : `Réserver une table` → `#reservation`
- **CTA secondaire** : `Voir la carte` → `#menu`
- **Image de fond** : photo de table dressée / plats / convivialité (placeholder Savoria `assets/images/OXaxugtV9BC6qYFwJcHAQqzw.webp` fait l'affaire pour la maquette)

### Marquee "L'ÉPOPÉE"
- Texte répété en grand, défilement horizontal lent : `L'ÉPOPÉE ✦ L'ÉPOPÉE ✦ L'ÉPOPÉE ✦`
- Typo Fraunces weight 500, couleur `--color-fg` sur fond `--color-bg`, letter-spacing serré
- Le séparateur `✦` en `--color-accent` rouge

### Section "Notre philosophie"
- **Label haut** : "Notre philosophie culinaire"
- **Titre** : "Une expérience unique, un moment à partager"
- **Texte** :
  > À L'Épopée, nous valorisons les saveurs authentiques et les ingrédients locaux, pour une cuisine qui célèbre la convivialité et le plaisir de bien manger ensemble. Une cuisine sincère, à l'image de Tours : chaleureuse, généreuse, jamais prétentieuse.
- **CTA** : `Découvrir notre histoire` (lien discret, pas bouton plein)

### Section "Notre Carte" (4 cartes)
- **Titre de section** : "Notre carte"
- **Sous-titre** : "Une carte qui évolue au fil des saisons et des arrivages du marché"

Les 4 cartes (grid 2x2 sur desktop, 1 colonne mobile) :

1. **Entrées**  
   "À partager ou pour commencer — nos petites assiettes de saison pour mettre l'eau à la bouche"  
   [image placeholder]

2. **Plats du marché**  
   "Cuisinés chaque jour selon l'arrivage, nos plats racontent l'histoire du marché et des producteurs"  
   [image placeholder]

3. **Desserts maison**  
   "Faits maison, à la fois réconfortants et inventifs — la touche finale d'un repas"  
   [image placeholder]

4. **Carte des vins**  
   "Une sélection de vignerons — Loire en tête — choisie avec passion et à partager sans modération (ou presque)"  
   [image placeholder]

- **CTA bas** : `Voir la carte complète` (optionnel, lien vers un futur PDF/page dédiée)

### Section "Nos plats signatures" (marquee)
- **Label** : "Les incontournables"
- **Titre** : "Nos plats signatures"
- Marquee horizontale de 6-7 items : image ronde + nom du plat dessous. Placeholder avec noms fictifs bistrot :
  - Œuf parfait, mouillettes de comté
  - Tartare de bœuf au couteau
  - Quenelle de brochet, sauce Nantua
  - Rillons de Touraine
  - Tarte Tatin minute
  - Pavé de bœuf, sauce bordelaise
  - Saint-nectaire fermier
  
  (Victor remplacera par les vrais plats avec photos)

### Section "L'ambiance"
- **Titre** : "L'ambiance"
- **Sous-titre** : "Un bistrot chaleureux, à deux pas du centre de Tours, où l'on se sent vite comme à la maison."
- Galerie 6 images (grid asymétrique inspiré de Savoria) — placeholders pour l'instant

### Section "L'histoire de L'Épopée"
- **Label** : "Notre histoire"
- **Titre** : "L'épopée d'un bistrot à Tours"
- **Texte** :
  > Au cœur de Tours, L'Épopée est né de l'envie de partager une cuisine sincère, faite de produits de saison et d'accords justes. Ici, pas de chichi : juste le goût, la convivialité, et le plaisir d'être ensemble autour d'une belle table. Notre équipe cuisine au rythme des saisons et des rencontres avec nos producteurs, pour des assiettes qui ont une âme.
- **4 atouts** (grid 2x2 ou 4 colonnes selon espace) :
  1. **Produits de saison** — "Ingrédients frais, choisis au marché chaque semaine"
  2. **Vignerons engagés** — "Vins bios, nature et de vignerons passionnés"
  3. **Cuisine du marché** — "Une carte qui change au fil des arrivages"
  4. **Ambiance chaleureuse** — "Un cadre convivial, pour tous les moments"

### Section "Témoignages"
- **Titre** : "Ils sont passés à table"
- Slider horizontal avec 3 témoignages placeholders (Victor remplacera par vrais avis Google) :
  1. "Un bistrot où l'on se sent comme chez soi — cuisine franche, accueil impeccable. On y retourne." — *Sophie L., habituée*
  2. "Le meilleur rapport qualité-prix du centre de Tours. Les produits parlent d'eux-mêmes." — *Marc D.*
  3. "Une carte courte mais qui change souvent, ça veut tout dire. Et la cave est une pépite." — *Julien P.*

### Section "Réservation"
- **Titre** : "Réservez votre table"
- **Accroche** : "Une table à partager, une cuisine sincère, une cave choisie avec soin. Au plaisir de vous accueillir."
- **Infos** (placeholders) :
  ```
  Du mardi au samedi
  12h00 — 14h00  /  19h00 — 22h00
  Fermé dimanche et lundi
  
  [adresse placeholder], 37000 Tours
  02 XX XX XX XX
  epopeetour@gmail.com
  ```
- **CTA principal** : `Réserver une table` (lien `tel:` ou `mailto:` pour la maquette)
- Image décorative à droite (placeholder)

### Footer
- Colonne 1 — **L'Épopée**
  - Description courte : "Bistrot convivial à Tours — produits de saison, cave de vignerons."
  - Réseaux : Instagram · Facebook (icônes SVG)
- Colonne 2 — **Liens rapides**
  - Accueil · Carte · Ambiance · À propos · Réserver
- Colonne 3 — **Infos**
  - Adresse, téléphone, email
- Colonne 4 — **Horaires**
  - Mardi-Samedi : 12h-14h / 19h-22h
  - Dimanche-Lundi : Fermé
- Bas du footer :
  - `© 2026 L'Épopée — Tous droits réservés`
  - `Mentions légales · Politique de confidentialité`

**PAS de section "News & Articles" / Blog** — on a choisi de retirer, focus 100% resto.

---

## Mapping sections Savoria → L'Épopée

| Section Savoria | Section L'Épopée | Action |
|---|---|---|
| Nav | Nav | Logo rouge + liens FR + CTA rouge |
| Hero "Luxury Dining" | Hero "Bistrot convivial" | Texte fourni ci-dessus |
| Marquee SAVORIA | Marquee L'ÉPOPÉE ✦ | Texte + séparateur rouge |
| Our Menu (4 cards) | Notre Carte (4 catégories) | Entrées/Plats/Desserts/Vins |
| Signature Dishes | Nos plats signatures | 7 items placeholders |
| Ambiance | L'ambiance | Gallery 6 images |
| About Us + 4 features | Histoire + 4 atouts | Atouts bistrot |
| Testimonials | Ils sont passés à table | 3 témoignages FR |
| ~~News & Articles~~ | **SUPPRIMÉE** | À retirer complètement |
| Reservation | Réservation | FR + Tours |
| Footer | Footer | 4 colonnes FR |

---

## Exigences techniques non-négociables

1. **Zéro dépendance Framer runtime**. Supprime tous les `data-framer-*`, les classes `framer-xxxxx`. Renomme en BEM propre (`.nav`, `.hero__title`, `.menu-card`, etc.) ou en utility-first structuré.
2. **Fonts auto-hébergées** depuis `assets/fonts/`. `@font-face` avec `font-display: swap`. Preload des 2 fonts critiques (Fraunces regular + Inter regular) dans le `<head>`.
3. **Images locales** optimisées. Les PNG actuels (jusqu'à 4 MB) sont **beaucoup trop lourds** — convertis en WebP ≤ 300 KB. Commande : `cwebp -q 85 input.png -o output.webp` (installe `webp` : `brew install webp` / `apt install webp`).
4. **Responsive mobile-first** : un seul DOM, breakpoints `640` / `768` / `1024` / `1280`.
5. **Accessibilité** :
   - `<nav>`, `<main>`, `<section>`, `<footer>` sémantiques
   - `alt` descriptifs sur toutes les images
   - `aria-label` sur les boutons icon-only et le marquee
   - Contraste AA minimum (la palette a été choisie pour passer : `#f5ebe0` sur `#1a1613` = ratio ~13.5 ✓)
   - `:focus-visible` stylé (outline rouge 2px offset 2px)
   - Navigation clavier fonctionnelle sur le slider témoignages
   - `prefers-reduced-motion` respecté (désactive animations + marquees)
6. **Performance cible** : LCP mobile < 2.5s, CLS < 0.1, Lighthouse Performance > 90
   - Preload hero image + fonts critiques
   - `loading="lazy"` + `decoding="async"` sur images hors viewport
   - Pas de JS bloquant le render (`defer` par défaut)
   - Marquees en CSS pur (pas de JS qui calcule des positions)
7. **SEO local** (important pour un resto) :
   - `<title>` : "L'Épopée — Bistrot à Tours | Cuisine de saison & vins de vignerons"
   - `<meta name="description">` : 150-160 caractères incluant "bistrot", "Tours", "produits de saison", "vins"
   - Open Graph complet : `og:title`, `og:description`, `og:image` (1200x630), `og:url`, `og:type="restaurant"`, `og:locale="fr_FR"`
   - Twitter Card `summary_large_image`
   - **Schema.org Restaurant JSON-LD** dans le `<head>` — CRUCIAL pour Google Maps / résultats locaux :
     ```json
     {
       "@context": "https://schema.org",
       "@type": "Restaurant",
       "name": "L'Épopée",
       "description": "...",
       "image": "...",
       "telephone": "+33...",
       "email": "epopeetour@gmail.com",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "...",
         "addressLocality": "Tours",
         "postalCode": "37000",
         "addressCountry": "FR"
       },
       "servesCuisine": "French bistro",
       "priceRange": "€€",
       "openingHoursSpecification": [...]
     }
     ```
   - `lang="fr"`, `<link rel="canonical">`
   - Favicon : placeholder pour l'instant (un carré rouge `--color-accent` avec É blanc suffira pour la maquette)
8. **Animations** (à ajouter en dernière passe, après validation du statique) :
   - `@keyframes` CSS + `IntersectionObserver` pour les entrées
   - Patterns : fade + translateY sur titres, stagger 100ms sur listes, subtle parallax sur hero
   - Durée 600-800ms, easing `var(--ease-out)` = `cubic-bezier(0.12, 0.23, 0.5, 1)`
   - Marquees : animation CSS infinie, `animation-play-state: paused` sur `prefers-reduced-motion`
   - **Pas de Framer Motion, pas de GSAP, pas de Lenis**. Vanilla JS uniquement.
9. **Déploiement GitHub Pages** :
   - `.nojekyll` à la racine
   - Tous chemins relatifs (`./css/...`, `./assets/...`)
   - README avec commandes git + étapes d'activation Pages

---

## Process à suivre

1. **Lis `index.html`, `DESIGN-TOKENS.md`** et ce brief en entier.
2. **Propose-moi un inventaire des composants** avant d'écrire du code :
   - Atomics : button (primary/ghost/link), badge, input
   - Layout : container, section, grid
   - Composés : nav, hero, marquee, menu-card, dish-item, gallery, feature, testimonial-slider, reservation-block, footer
   - Liste les variantes de chaque.
3. **Valide la structure de fichiers finale avec moi** avant de coder.
4. **Construis section par section, dans cet ordre** :
   1. Reset + tokens + base (typo, boutons, layout container)
   2. Nav + Hero → **montre-moi le résultat avant de continuer**
   3. Marquee + Notre philosophie
   4. Notre Carte (4 cartes)
   5. Nos plats signatures (marquee plats)
   6. L'ambiance (gallery)
   7. Histoire + 4 atouts
   8. Témoignages (slider)
   9. Réservation
   10. Footer
   11. Animations (dernière passe)
   12. SEO + meta + Schema.org
5. **Entre chaque section**, récapitule ce que tu as fait et demande confirmation.
6. **Variables CSS partout**. Pas de valeur hardcodée dans les composants.
7. **Le CSS Framer brut est une référence**, pas une source — lis-le pour les valeurs précises (spacings, line-heights, breakpoints) et réécris propre.

---

## Commandes git / déploiement

```bash
# Dans le dossier du projet
git init
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
touch .nojekyll
git add .
git commit -m "feat: refonte L'Épopée — maquette visuelle initiale"
git branch -M main
git remote add origin git@github.com:<user>/epopee-website.git
git push -u origin main
```

Puis : GitHub → Settings → Pages → Source `main` / `(root)` → Save.
Site dispo sur `https://<user>.github.io/epopee-website/`.

Pour le domaine `epopeetours.fr` (plus tard, après validation maquette) :
- Fichier `CNAME` à la racine contenant `epopeetours.fr`
- DNS chez le registrar : A records vers IPs GitHub Pages + CNAME www

---

## Limites / phase 1

- **Cette version = maquette visuelle** : horaires, tél, adresse sont des placeholders. Ne cherche pas à obtenir les vraies infos.
- **Photos = placeholders Savoria** : on garde les images du dossier `assets/images/`. Photos réelles en phase 2.
- **Pages secondaires** (/carte détaillée, /about, /contact) : **phase 2**, on fait la home d'abord.
- **Multi-langue, CMS, formulaire complexe** : hors scope V1.
- **Formulaire de réservation** : simple `tel:` ou `mailto:` pour la V1. Intégration TheFork/Zenchef = phase 2.

---

## Résumé express

- Site : bistrot **L'Épopée** à Tours (refonte de `epopeetours.fr`)
- Direction : **bistrot chic sombre** — brun-noir `#1a1613` + crème `#faf5ed` + rouge `#c41e1e`
- Typo : Fraunces (titres) + Inter (corps) — auto-hébergées
- Stack : HTML/CSS/JS vanilla → GitHub Pages
- Une seule page (home) — **pas de blog**
- Photos placeholders Savoria — remplacement phase 2
- Infos pratiques = placeholders (maquette visuelle seulement)
