
const s = 'Sid';
const a = 'Ali';
const m = 'mahmoud';
const fullName = `${s} ${a} ${m.toUpperCase()}I`;
const highlights = [
  { icon: '🎓', text: "PhD Candidate", color: "from-blue-500 to-cyan-500" },
  { icon: '🧠', text: "AI Researcher", color: "from-purple-500 to-pink-500" },
  { icon: '💻', text: "Full-Stack Developer", color: "from-green-500 to-emerald-500" }
];

export const heroContent = {
  name: fullName,
  title: "Hi, I'm " + fullName,
  subtitle:
    "PhD Candidate in Natural Language Processing, AI enthusiast and Full-Stack Developer.",
  cta: "View My CV",
  highlights,
  available: "Available for work now",
  scroll: "Scroll to explore",
  years : "Years",
  summerize: {
    research: "Reasearch Experience",
    phd: "In progress (NLP)",
    teaching: 'Teaching Experience',
  }
};
