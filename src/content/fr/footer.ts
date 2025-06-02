const s = 'sid';
const a = 'ali';
const m = 'mahmoud';
const email = 'eng.' + s + a+'.' + m + 'i@gmail.com';
export const footerContent = {
  contact: {
    title: "Contactez-moi",
    icon: "📞",
    connectText: "Connectez-vous avec moi :",
    fields: {
      email: {
        label: "Email",
        value: email
      },
      location: {
        label: "Localisation",
        value: "🇫🇷 France"
      },
      status: {
        label: "Statut",
        value: "Disponible pour des opportunités",
        indicator: "online"
      }
    }
  },
  navigation: {
    title: "Liens Rapides",
    icon: "🔗"
  },
  copyright: {
    builtWith: "Créé avec",
    and: "et",
    rightsReserved: "Tous droits réservés.",
    techStackLabel: "Créé avec :"
  },
  techStack: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "💨" }
  ]
};