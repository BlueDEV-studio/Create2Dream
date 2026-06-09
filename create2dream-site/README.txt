Create2Dream - Projet Web
=========================

Ce ZIP contient le code source complet du site de l'agence Create2Dream.

TECHNOLOGIES :
- React 19 + TypeScript
- TanStack Start (framework full-stack)
- Tailwind CSS v4
- Vite

STRUCTURE :
- src/routes/     : Pages du site (accueil, services, agence, réalisations, contact)
- src/components/ : Composants réutilisables (Header, Footer, Logo, etc.)
- src/styles.css  : Styles globaux (thème noir & blanc, police Caveat)
- public/         : Fichiers statiques
- assets/         : Médias du site (logo, vidéo hero, captures d'écran proof)

MEDIAS INCLUS (dossier assets/) :
- logo.png        : Logo de l'agence
- hero-bg.mp4     : Vidéo de fond de la page d'accueil
- proof-perf.png  : Capture proof performances
- proof-reels.png : Capture proof reels
- proof-vues.png  : Capture proof vues

INSTALLATION & LANCEMENT :
1. npm install  (ou bun install)
2. npm run dev  (mode développement)
3. npm run build && npm run preview  (build production)

DEVELOPPEMENT :
- Les pages utilisent le file-based routing de TanStack Start
- Les composants UI sont basés sur Radix UI + shadcn/ui
- Le thème est entièrement en noir & blanc avec la police Caveat pour les titres

CONTACT AGENCE :
- Tél : +33 6 61 48 00 52
- Email : clergue.romain@gmail.com
- Insta : @create2dream
