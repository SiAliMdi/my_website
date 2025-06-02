const chars = [
  "S",
  "i",
  "d",
  " ",
  "A",
  "l",
  "i",
  " ",
  "M",
  "A",
  "H",
  "M",
  "O",
  "U",
  "D",
  "I",
];
const name = chars.join("");
export const navigationContent = {
  brand: {
    name: "Mon Site Web",
    tagline: name+" - Chercheur IA & Développeur"
  },
  links: [
    {
      id: "mine",
      path: "/",
      label: "Mon Site Web",
      icon: "🏠",
      description: "Page d'accueil avec les dernières mises à jour et actualités"
    },
    {
      id: "about",
      path: "/about",
      label: "À Propos",
      icon: "👤",
      description: "Découvrez mon parcours et mes intérêts"
    },
    {
      id: "education", 
      path: "/education",
      label: "Formation",
      icon: "🎓",
      description: "Mon parcours académique et qualifications"
    },
    {
      id: "experience",
      path: "/experience", 
      label: "Expérience",
      icon: "💼",
      description: "Expérience professionnelle et carrière"
    },
    {
      id: "skills",
      path: "/skills",
      label: "Compétences",
      icon: "🛠️",
      description: "Compétences techniques et expertise"
    },
    {
      id: "publications",
      path: "/publications",
      label: "Publications",
      icon: "📚", 
      description: "Articles de recherche et publications académiques"
    },
    /* {
      id: "teaching",
      path: "/teaching",
      label: "Enseignement", 
      icon: "👨‍🏫",
      description: "Expérience d'enseignement et cours"
    },
    {
      id: "portfolio",
      path: "/portfolio",
      label: "Portfolio",
      icon: "💻",
      description: "Projets et travaux de développement"
    }, */
    {
      id: "certifications", 
      path: "/certifications",
      label: "Certifications",
      icon: "🏆",
      description: "Certifications professionnelles et réalisations"
    }
  ],
  mobileMenu: {
    openLabel: "Ouvrir le menu",
    closeLabel: "Fermer le menu"
  }
};