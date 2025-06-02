
const s = "Sid";
const a = "Ali";
const m = "mahmoud";
const fullName = `${s} ${a} ${m.toUpperCase()}I`;
const highlights = [
  {
    icon: '🎓',
    text: "Candidat au doctorat",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: '🧠',
    text: "Chercheur en IA",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: '💻',
    text: "Développeur Full-Stack",
    color: "from-green-500 to-emerald-500",
  },
];
export const heroContent = {
  name: fullName,
  title: "Bonjour, je suis " + fullName,
  subtitle:
    "Doctorant en traitement du langage naturel, passionné d'IA et développeur Full-Stack.",
  cta: "Voir mon CV",
  highlights,
  available: "Disponible pour travailler maintenant",
  scroll: "Défilez pour explorer",
  years: "Années",
  summerize: {
    research: "Expérience de recherche",
    phd: "En cours (TALN)",
    teaching: "Expérience d'enseignement",
  },
};
