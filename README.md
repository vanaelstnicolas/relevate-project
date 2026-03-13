# Relevate Landing Page

Une landing page professionnelle pour Relevate — Stay Relevant.

## Structure du projet

```
Relevate-Project/
├── index.html          # Page principale
├── styles.css          # Styles personnalisés
├── script.js           # Scripts d'animation
├── vercel.json         # Configuration Vercel
├── .gitignore          # Fichiers à ignorer
├── assets/
│   └── timesquare.jpg  # Image hero
└── README.md           # Ce fichier
```

## Déploiement sur Vercel

### Prérequis

1. Compte GitHub avec le code pushé
2. Compte Vercel (https://vercel.com)
3. CLI Vercel (optionnel)

### Méthode 1 : Via l'interface Vercel (plus facile)

1. Allez sur https://vercel.com
2. Cliquez **"New Project"**
3. Connectez votre repository GitHub
4. Sélectionnez le repository `Relevate-Project`
5. Configuration automatique (Vercel détecte le site statique)
6. Cliquez **"Deploy"**

### Méthode 2 : Via le CLI Vercel

```bash
# Installez le CLI
npm i -g vercel

# Dans le dossier du projet
cd "C:\Users\vanae\OneDrive\Documents\Initsu\Projets AI\Relevate-Project"

# Déployez
vercel
```

### Méthode 3 : Git + GitHub Actions

1. Initialisez Git et poussez sur GitHub :
```bash
git init
git add .
git commit -m "Initial commit: Relevate landing page"
git branch -M main
git remote add origin https://github.com/[votre-username]/relevate-project.git
git push -u origin main
```

2. Connectez le repo sur Vercel et c'est automatique !

## Configuration Vercel

Le fichier `vercel.json` inclut :
- **Cache optimal** pour les assets (1 an)
- **Headers** de sécurité et performance
- **Support HTTPS** automatique
- **CDN global** inclus

## Optimisations appliquées

✅ Tailwind CSS (CDN)
✅ Images optimisées (grayscale + contrast)
✅ Animations au scroll
✅ Responsive design
✅ Couleur Gold/Bronze (#b18600)
✅ Image Times Square comme hero

## Domaine personnalisé

Pour ajouter votre domaine personnalisé :

1. Dans Vercel, allez à **Project Settings** → **Domains**
2. Ajoutez votre domaine
3. Suivez les instructions DNS de votre registrar
4. HTTPS automatique via Let's Encrypt

## Support

Pour toute question, consultez :
- Docs Vercel : https://vercel.com/docs
- Tailwind CSS : https://tailwindcss.com/docs
