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
    name: "My Website",
    tagline: name +" - AI Researcher & Developer"
  },
  links: [
    {
      id: "mine",
      path: "/",
      label: "My Website",
      icon: "🏠",
      description: "Home page with latest updates and news"
    },
    {
      id: "about",
      path: "/about",
      label: "About Me",
      icon: "👤",
      description: "Learn about my background and interests"
    },
    {
      id: "education",
      path: "/education", 
      label: "Education",
      icon: "🎓",
      description: "My academic journey and qualifications"
    },
    {
      id: "experience",
      path: "/experience",
      label: "Experience", 
      icon: "💼",
      description: "Professional experience and career history"
    },
    {
      id: "skills",
      path: "/skills",
      label: "Skills",
      icon: "🛠️", 
      description: "Technical skills and expertise"
    },
    {
        id: "publications",
        path: "/publications", 
        label: "Publications",
        icon: "📚",
        description: "Research papers and academic publications"
    },
    /* {
      id: "teaching",
      path: "/teaching",
      label: "Teaching",
      icon: "👨‍🏫",
      description: "Teaching experience and courses"
    },
    {
      id: "portfolio",
      path: "/portfolio",
      label: "Portfolio",
      icon: "💻",
      description: "Projects and development work"
    }, */
    {
      id: "certifications",
      path: "/certifications",
      label: "Certifications", 
      icon: "🏆",
      description: "Professional certifications and achievements"
    }
  ],
  mobileMenu: {
    openLabel: "Open menu",
    closeLabel: "Close menu"
  }
};