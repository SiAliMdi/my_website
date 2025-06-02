const chars = [
  "س", "ي", "د", " ", "ع", "ل", "ي", " ", "م", "ح", "م", "و", "د", "ي",];

const name = chars.join("");

export const navigationContent = {
  brand: {
    name: "موقعي الإلكتروني",
    tagline: name+" - باحث ذكاء اصطناعي ومطور",
  },
  links: [
    {
      id: "mine",
      path: "/",
      label: "موقعي الإلكتروني",
      icon: "🏠",
      description: "الصفحة الرئيسية مع آخر التحديثات والأخبار",
    },
    {
      id: "about",
      path: "/about",
      label: "عنّي",
      icon: "👤",
      description: "تعرف على خلفيتي واهتماماتي",
    },
    {
      id: "education",
      path: "/education",
      label: "التعليم",
      icon: "🎓",
      description: "رحلتي الأكاديمية ومؤهلاتي",
    },
    {
      id: "experience",
      path: "/experience",
      label: "الخبرة",
      icon: "💼",
      description: "الخبرة المهنية وتاريخ المسيرة المهنية",
    },
    {
      id: "skills",
      path: "/skills",
      label: "المهارات",
      icon: "🛠️",
      description: "المهارات التقنية والخبرة",
    },
    {
      id: "publications",
      path: "/publications",
      label: "المنشورات",
      icon: "📚",
      description: "الأوراق البحثية والمنشورات الأكاديمية",
    },
    /* {
      id: "teaching",
      path: "/teaching",
      label: "التدريس",
      icon: "👨‍🏫",
      description: "خبرة التدريس والمقررات",
    },
    {
      id: "portfolio",
      path: "/portfolio",
      label: "أعمالي",
      icon: "💻",
      description: "المشاريع وأعمال التطوير",
    }, */
    {
      id: "certifications",
      path: "/certifications",
      label: "الشهادات",
      icon: "🏆",
      description: "الشهادات المهنية والإنجازات",
    },
  ],
  mobileMenu: {
    openLabel: "فتح القائمة",
    closeLabel: "إغلاق القائمة",
  },
};
