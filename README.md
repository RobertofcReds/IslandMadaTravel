# ISLAND MADA TRAVEL

Site web vitrine React pour guide touristique indépendant à Madagascar, spécialisé dans les destinations de Diégo-Suarez et Nosy Be (province d'Antsiranana).

## 🚀 Installation

### Prérequis

- **Node.js** (version 18 ou supérieure) doit être installé sur votre machine
  - Téléchargez-le sur : https://nodejs.org/

### Étapes d'installation

1. **Installer les dépendances**

```bash
npm install
```

2. **Lancer le serveur de développement**

```bash
npm run dev
```

3. **Ouvrir le site**

Le site sera accessible sur `http://localhost:5173`

## 📦 Technologies utilisées

- **React 18** - Framework JavaScript
- **Vite** - Build tool rapide
- **React Router** - Navigation entre les pages
- **TailwindCSS** - Framework CSS utilitaire
- **Lucide React** - Icônes modernes

## 📁 Structure du projet

```
ISLANDMADATRAVEL/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Barre de navigation
│   │   └── Footer.jsx       # Pied de page
│   ├── pages/
│   │   ├── Home.jsx         # Page d'accueil
│   │   ├── Destinations.jsx # Page des destinations
│   │   ├── Diego.jsx        # Page Diégo-Suarez
│   │   ├── Nosy.jsx         # Page Nosy Be
│   │   ├── Services.jsx     # Page services
│   │   ├── About.jsx        # Page à propos
│   │   └── Contact.jsx      # Page contact
│   ├── App.jsx              # Composant principal
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── index.html               # HTML de base
├── package.json             # Dépendances
├── vite.config.js           # Configuration Vite
├── tailwind.config.js       # Configuration Tailwind
└── postcss.config.js        # Configuration PostCSS
```

## 🎨 Personnalisation

### Changer les couleurs

Modifiez les couleurs dans `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2D5A27',      // Vert principal
        light: '#3d7a36',
        dark: '#1a3d17',
      },
      secondary: {
        DEFAULT: '#D4A017',        // Or/Jaune
        light: '#E8B423',
        dark: '#B8860B',
      },
    },
  },
}
```

### Modifier les images

Les images actuelles utilisent Unsplash. Pour utiliser vos propres images :

1. Créez un dossier `public/images/`
2. Ajoutez vos images
3. Modifiez les URLs dans les composants JSX

### Personnaliser le formulaire de contact

Le formulaire actuel affiche une alerte. Pour le rendre fonctionnel :

- Utilisez Formspree, EmailJS, ou Netlify Forms
- Ou créez un backend Node.js avec Express

## 🌐 Build pour la production

```bash
npm run build
```

Les fichiers build seront dans le dossier `dist/`.

## 📱 Déploiement

### Vercel

1. Poussez votre code sur GitHub
2. Importez le projet sur Vercel
3. Vercel détectera automatiquement Vite

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`

### Autres hébergeurs

Le dossier `dist/` peut être déployé sur n'importe quel hébergeur statique.

## 📞 Contact

Pour toute question, contactez le propriétaire du site.

## 📄 Licence

Ce site est la propriété de ISLAND MADA TRAVEL. Tous droits réservés.

---

**Créé avec ❤️ et React pour ISLAND MADA TRAVEL**
