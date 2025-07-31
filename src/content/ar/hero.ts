
const s = "سيد";
const a = "علي";
const m = "محمود";
const fullName = `${s} ${a} ${m.toUpperCase()}ي`;
const highlights = [
  { icon: '🎓', text: "درجة الدكتوراه في علوم الحاسوب", color: "from-blue-500 to-cyan-500" },
  { icon: '🧠', text: "باحث في مجال الذكاء الاصطناعي", color: "from-purple-500 to-pink-500" },
  { icon: '💻', text: "مطور برامج كامل", color: "from-green-500 to-emerald-500" }
];
export const heroContent = {
  name: fullName,
  title: "مرحباً، أنا " + fullName,
  subtitle:
    "حاصل على درجة الدكتوراه في معالجة اللغات الطبيعية ومتحمس للذكاء الاصطناعي ومطور برامج متكامل",
  cta: "اطلع على سيرتي الذاتية",
  highlights,
  available: "متاح الآن للوظائف",
  scroll: "قم بالتمرير لاستكشاف المزيد",
  years: "سنوات",
  summerize: {
    research: "خبرة بحثية",
    phd: "علوم الحاسوب (NLP)",
    teaching: "خبرة تدريسية",
  }
};
