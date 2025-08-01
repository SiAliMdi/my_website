export const educationContent = {
  title: "Education 🎓",
description: "My academic journey and continuous learning path in computer science and artificial intelligence.",
  items: [
    {
      degree: "🔬 PhD in Computer Science",
      institution: "🏛️ University of Nîmes, Nîmes",
      year: "📅 2020 - 2025",
      status: "✅ Completed",
      statusDescription: "🎓 PhD Achieved",
      description: [
        '📝 Thesis entitled: "Predictive justice: towards automatic annotation of court decisions"',
        "🤖 Specializing in Natural Language Processing applied to the legal domain.",
        "🧠 Research focus on developing AI models for automated legal text analysis and transformation.",
        "🎯 Successfully defended on July 16, 2025.",
      ],
      certifUrl: import.meta.env.VITE_PHD_CERTIFICATE_URL,
      certifBtnTxt: "View Certificate",
      certifDesc: "Official Certificate Available",
      juryBtnTxt: "View Jury Report",
      juryReportUrl: import.meta.env.VITE_PHD_JURY_REPORT_URL,
    },
    {
      degree:
        "🎓 Master's + State Engineering Degree in Computer Science",
      institution:
        "🏛️ Higher National School of Computer Science (ESI ex. INI), Algiers",
      year: "📅 2015 - 2020",
      status: "✅ Completed",
      statusDescription: "🏆 With Distinction",
      description: [
        "🎯 Specialization: Information systems.",
        "🏆 Honors: With high distinction.",
        "💼 Final-year internship: Development of an access control system based on facial and voice recognition.",
        "📱 4th-year internship: Development of an Android application for inventory management.",
        "🌐 2nd-year internship: Development of web forms for a wedding planning startup.",
        "💻 Intensive and versatile training in computer science at all levels, from computer architecture, operating systems, low-level programming, algorithms, object-oriented programming, software development, databases, networks, and cybersecurity.",
        "🤝 Interdisciplinary modules such as project management, economics, accounting, and finance.",
        "🚀 Specialization modules such as information systems analysis and design, information systems architecture, information systems auditing, decision support systems, machine learning, and big data.",
        "📚 2 years of integrated preparatory cycle training with modules in mathematics, physics, and electronics.",
        "✅ Passed the competitive exam for entry into the advanced cycle.",
      ],
      certifUrl: import.meta.env.VITE_ENG_CERTIFICATE_URL,
      certifBtnTxt: "View Certificate",
      certifDesc: "Official Certificate Available"
    },
  ],
  highlight: "Academic Highlights",
  statistics: [
    {
      icon: "🎓",
      title: "Years of High Study",
      value: "10",
      description: "Including ongoing PhD",
    },
    {
      icon: "🔬",
      title: "Research Focus",
      value: "NLP & AI",
      description: "Legal domain specialization",
    },
    {
      icon: "🏆",
      title: "Achievement",
      value: "High Distinction",
      description: "Engineering degree",
    },
  ],
};
