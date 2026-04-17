# 📦 Package Savoria-scrape → prêt pour Claude Code

Template de référence : **Savoria** (https://savoriarestro.framer.website/)
Objectif : refonte full-code sans la runtime Framer, déployée sur GitHub Pages.

## Démarrage en 3 étapes

### 1. Télécharge les assets (fonts + images)

```bash
cd savoria-scrape
bash download-assets.sh
```

Ça télécharge **79 images + 56 fonts** depuis `framerusercontent.com` (avec le bon User-Agent + Referer). Attends que ça finisse, vérifie :

```bash
ls assets/images/ | wc -l    # doit afficher ~79
ls assets/fonts/ | wc -l     # doit afficher ~56
```

### 2. Vérifie la maquette de référence

Ouvre `index.html` dans un navigateur :

```bash
# macOS
open index.html
# Linux
xdg-open index.html
# ou un petit serveur local pour être propre
python3 -m http.server 8000
# puis http://localhost:8000
```

Tu dois voir la page Savoria rendue (sans les animations Framer puisqu'on a retiré le JS, mais le layout + les images + les fonts sont là). **C'est ta cible visuelle.**

### 3. Lance Claude Code

Ouvre VS Code dans le dossier, puis dans Claude Code :

```
Lis BRIEF-CLAUDE-CODE.md en entier. C'est ta spec. Commence par me
confirmer la stack cible et me proposer l'inventaire des composants
avant d'écrire du code.
```

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Maquette de référence visuelle (CSS Framer inclus, JS Framer retiré) |
| `css/framer-styles.css` | CSS complet Framer extrait (153 KB) — référence de tokens |
| `assets/images/` | 79 images (après `download-assets.sh`) |
| `assets/fonts/` | 56 fonts woff2 (après `download-assets.sh`) |
| `download-assets.sh` | Script bash pour télécharger les assets en local |
| `BRIEF-CLAUDE-CODE.md` | **Prompt structuré à donner à Claude Code** |
| `DESIGN-TOKENS.md` | Couleurs, fonts, tailles extraites automatiquement |
| `ASSETS-INVENTORY.json` | Liste source de tous les assets Framer |
| `url-to-local-map.json` | Mapping URL Framer → chemin local |

## Notes importantes

- Les images hébergées par Framer (`framerusercontent.com`) **ne sont pas téléchargeables sans Referer** — d'où le script bash avec `curl -e`.
- Le HTML `index.html` a encore ~20 refs vers des `.mjs` Framer (chunks JS) : **ignore-les**, ils sont cassés exprès (`href="#"`) pour ne pas casser la page au chargement. Claude Code les supprimera dans la refonte finale.
- Le CSS Framer est **minifié et plein de classes hashées** (`framer-9lAxa`…). Il sert de **référence** (valeurs de spacings, couleurs, breakpoints) — **pas de source à copier-coller tel quel** dans la refonte.

## Si tu veux personnaliser avant de lancer Claude Code

Édite `BRIEF-CLAUDE-CODE.md` : les sections "Stack cible" et "Personnalisation : contenu final" contiennent des `[À remplir par Victor]`. Remplis-les avec ta marque (DGL, IPMS, VLB, client…) et Claude Code fera direct la refonte à la bonne charte.
