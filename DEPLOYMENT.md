# 🚀 Guide de Déploiement Vercel

## Étape 1 : Préparer votre repository GitHub

### Créez un repository GitHub

1. Allez sur https://github.com/new
2. **Repository name** : `relevate-landing-page` (ou ce que vous voulez)
3. **Description** : Relevate Landing Page - Stay Relevant
4. Sélectionnez **Public** (ou Private selon votre préférence)
5. Cliquez **"Create repository"**

### Poussez votre code

```bash
# Ouvrez PowerShell/Terminal dans le dossier du projet
cd "C:\Users\vanae\OneDrive\Documents\Initsu\Projets AI\Relevate-Project"

# Initialisez Git
git init
git add .
git commit -m "Initial commit: Relevate landing page with gold theme"

# Configurez la branche
git branch -M main

# Ajoutez le remote (remplacez USERNAME et REPO)
git remote add origin https://github.com/USERNAME/relevate-landing-page.git

# Poussez le code
git push -u origin main
```

**Voilà !** Votre code est sur GitHub.

---

## Étape 2 : Déployer sur Vercel

### Option A : Interface Vercel (Recommandé - Plus facile)

1. Allez sur https://vercel.com
2. Cliquez **"Sign up"** ou **"Sign in"** avec GitHub
3. Une fois connecté, cliquez **"New Project"**
4. Vercel vous montre vos repositories GitHub
5. Trouvez et sélectionnez `relevate-landing-page`
6. Vercel configure automatiquement (pas besoin de toucher à rien)
7. Cliquez **"Deploy"** ✨

**Attentez 1-2 minutes...**

Votre site est en ligne ! 🎉

### Option B : CLI Vercel (Plus rapide pour les développeurs)

```bash
# Installez le CLI
npm install -g vercel

# Allez au dossier du projet
cd "C:\Users\vanae\OneDrive\Documents\Initsu\Projets AI\Relevate-Project"

# Déployez
vercel

# Répondez aux questions :
# - "Set up and deploy?" → y
# - "Which scope?" → Votre nom/org
# - "Link to existing project?" → n (first time)
# - "What's your project's name?" → relevate-landing-page
# - "In which directory is your code?" → . (point)
```

Vercel vous donne une URL du style :
`https://relevate-landing-page-xxx.vercel.app`

---

## Étape 3 : Ajouter un domaine personnalisé

### Si vous avez un domaine (e.g., relevate.com)

1. Dans le **dashboard Vercel** du projet
2. Allez à **Settings** → **Domains**
3. Tapez votre domaine (ex: `relevate.com`)
4. Cliquez **"Add"**
5. Vercel vous donne les enregistrements DNS à ajouter

### Exemple : Si votre domaine est chez GoDaddy

1. Connectez-vous à GoDaddy
2. Allez à **DNS Settings** pour votre domaine
3. Ajoutez/modifiez les enregistrements que Vercel demande :
   - **A Record** : `76.76.19.21`
   - **AAAA Record** : `2606:4700:4700::1111`

⏳ **Attendre 24-48h** pour la propagation DNS

---

## Étape 4 : Mettre à jour le site

### Si vous changez quelque chose

```bash
# Modifiez les fichiers (ex: index.html)
# Puis :

git add .
git commit -m "Update: change hero text"
git push
```

**Vercel déploie automatiquement !** 🔄

---

## ✅ Checklist Finale

- [ ] Code poussé sur GitHub
- [ ] Projet créé sur Vercel
- [ ] URL de déploiement reçue
- [ ] Site accessible en HTTPS
- [ ] Image Times Square chargée correctement
- [ ] Couleur Gold/Bronze visible
- [ ] Animations fonctionnent
- [ ] Responsive sur mobile
- [ ] (Optionnel) Domaine personnalisé configuré

---

## 🆘 Troubleshooting

### "Image ne charge pas"
- Vérifiez que `timesquare.jpg` est dans `/assets`
- Vérifiez le chemin dans `index.html` : `src="assets/timesquare.jpg"`

### "Vercel ne voit pas mes changements"
- Vérifiez que le push est fait : `git push`
- Vercel redéploie automatiquement en quelques secondes
- Rafraîchissez le site (Ctrl+Shift+R pour hard refresh)

### "Domaine personnalisé ne marche pas"
- Les DNS prennent 24-48h à se propager
- Vérifiez vos enregistrements DNS chez votre registrar

---

## 📊 Statistiques Vercel

Une fois déployé, vous verrez :
- **Analytics** : Visiteurs, pays, device
- **Speed Insights** : Performance metrics
- **Deployments** : Historique des déploiements
- **Logs** : Erreurs et activité

---

## 🎯 URL Finale

Après déploiement :
```
https://relevate-landing-page-xxx.vercel.app
```

Ou avec votre domaine personnalisé :
```
https://relevate.com
```

**Bon déploiement ! 🚀**
