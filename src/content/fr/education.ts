export const educationContent = {
  title: "Education 🎓",
description:
    "Mon parcours académique et mon chemin d'apprentissage continu en informatique et intelligence artificielle.",
  items: [
    {
      degree: "🔬 Doctorat en Informatique",
      institution: "🏛️ Université de Nîmes, Nîmes",
      year: "📅 2020-2025",
      status: "✅ Achevé",
      statusDescription: "🎓 Doctorat obtenu",
      description: [
        '📝 Thèse intitulée : "La justice prédictive, vers une annotation automatique des décisions de justice"',
        "🤖 Spécialité en Traitement Automatique des Langues appliqué à la justice.",
        "🧠 Recherche basée sur le développement de modèles d'IA pour l'analyse et la transformation automatisée de textes juridiques",
        "🎯 Soutenue avec succès le 16 juillet 2025.",
      ],
      certifUrl: import.meta.env.VITE_PHD_CERTIFICATE_URL,     
      certifBtnTxt: "Voir le certificat",
      certifDesc: "Certificat officiel disponible",
      juryBtnTxt: "Consulter le rapport du jury",
      juryReportUrl: import.meta.env.VITE_PHD_JURY_REPORT_URL,
    },
    {
      degree: "🎓 Master + ingénieur d'état en Informatique",
      institution:
        "🏛️ Ecole nationale Supérieure d'Informatique (ESI Ex. INI), Alger",
      year: "📅 2015-2020",
      status: "✅ Achevé",
      statusDescription: "🏆 Mention Très Bien",
      description: [
        "🎯 Spécialité : Système d'information.",
        "🏆 Mention : Très bien.",
        "💼 Stage de fin d'études : Développement d'un système de contrôle d'accès basé sur la reconnaissance faciale et vocale.",
        "📱 Stage en 4ème année : Développement d'une application android pour la gestion de stock.",
        "🌐 Stage en 2ème année : Développement des formulaires web pour Startup d'organisation des fêtes de mariage.",
        "💻 Formation intense et polyvalente en informatique couvrant toutes les couches, de l'architecture de l'ordinateur et des systèmes d'exploitation à la programmation bas niveau, l'algorithmique, la programmation orientée objet, le développement logiciel, les bases de données, les réseaux et la sécurité informatique.",
        "🤝 Modules interdisciplinaires comme la gestion de projet, économie, comptabilité et finance",
        "🚀 Modules de spécialisation comme l'analyse et la conception des systèmes d'information, l'architecture des systèmes d'information, audit des systèmes d'information, système d'aide à la décision, l'apprentissage machine et le big data.",
        "📚 2 ans de formation en cycle préparatoire intégré (CPI) avec des modules de mathématiques, physique et éléctronique.",
        "✅ concours de passage au cycle supérieur (CPS) réussi ",
      ],
      certifUrl: import.meta.env.VITE_ENG_CERTIFICATE_URL,
      certifBtnTxt: "Voir le certificat",
      certifDesc: "Certificat officiel disponible",
    },
  ],
    highlight: "Points forts académiques",
    statistics: [
  {
    icon: "🎓",
    title: "Années d'études supérieures",
    value: "10",
    description: "Incluant un doctorat en cours",
  },
  {
    icon: "🔬",
    title: "Domaine de recherche",
    value: "TAL & IA",
    description: "Spécialisation dans le domaine juridique",
  },
  {
    icon: "🏆",
    title: "Réussite",
    value: "Mention Très Bien",
    description: "Diplôme d'ingénieur",
  },
],

};
