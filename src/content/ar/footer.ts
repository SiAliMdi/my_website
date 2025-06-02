const s = 'sid';
const a = 'ali';
const m = 'mahmoud';
const email = 'eng.' + s + a+'.' + m + 'i@gmail.com';
export const footerContent = {
  contact: {
    title: "تواصل معي",
    icon: "📞",
    connectText: "تواصل معي:",
    fields: {
      email: {
        label: "البريد الإلكتروني",
        value: email
      },
      location: {
        label: "الموقع",
        value: "🇫🇷 فرنسا"
      },
      status: {
        label: "الحالة",
        value: "متاح للفرص",
        indicator: "online"
      }
    }
  },
  navigation: {
    title: "روابط سريعة",
    icon: "🔗"
  },
  copyright: {
    builtWith: "تم البناء باستخدام",
    and: "و",
    rightsReserved: "جميع الحقوق محفوظة.",
    techStackLabel: "تم البناء باستخدام:"
  },
  techStack: [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind", icon: "💨" }
  ]
};