# Corridor tramway — Sites à potentiel · Québec
## STGM · Outil de prospection immobilière

### Déploiement sur Vercel

**Méthode 1 — Drag & drop (la plus simple, aucun compte GitHub requis)**

1. Va sur [vercel.com](https://vercel.com) et crée un compte gratuit
2. Sur le dashboard, clique **"Add New Project"**
3. Clique **"Import from your computer"** ou utilise **Vercel CLI**
4. Glisse le dossier `tramway-project` dans la zone de dépôt
5. Clique **Deploy** — l'URL est générée en 30 secondes

**Méthode 2 — Via GitHub**

1. Crée un repo GitHub (public ou privé)
2. Push ce dossier : `git init && git add . && git commit -m "init" && git push`
3. Sur Vercel, importe le repo GitHub
4. Deploy automatique à chaque push

### Structure des fichiers

```
tramway-project/
├── index.html   — interface principale
├── data.js      — sites, stations, tracé tramway
├── app.js       — logique carte + filtres
├── vercel.json  — config déploiement
└── README.md
```

### Mise à jour des données

Toutes les données sont dans `data.js`. Pour ajouter un site, copier un objet existant dans le tableau `SITES` et modifier les valeurs. Les coordonnées GPS (`lat`, `lng`) sont requises pour le placement sur la carte.

### Prochaines étapes

- Brancher sur les données ouvertes du rôle d'évaluation (CSV Ville de Québec)
- Export PDF par fiche site
- Ajout d'un mode comparaison de sites
