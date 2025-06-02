const s = 'sid';
const a = 'ali';
const m = 'mahmoud';
const email = 'eng.' + s + a+'.' + m + 'i@gmail.com';
export const footerContent = {
  contact: {
    title: "Get In Touch",
    icon: "📞",
    connectText: "Connect with me:",
    fields: {
      email: {
        label: "Email",
        value: email
      },
      location: {
        label: "Location",
        value: "🇫🇷 France"
      },
      status: {
        label: "Status",
        value: "Available for opportunities",
        indicator: "online"
      }
    }
  },
  navigation: {
    title: "Quick Links",
    icon: "🔗"
  },
  copyright: {
    builtWith: "Built with",
    and: "and",
    rightsReserved: "All rights reserved.",
    techStackLabel: "Built with:"
  },
  techStack: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "💨" }
  ]
};