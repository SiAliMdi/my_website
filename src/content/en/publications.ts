const n1 = 'Mah';
const n2 = 'moudi';
const n3 = 'S.A.';
const moi = `${n1}${n2} ${n3}`.trim();
const n4 = 'Con';
const n5 = 'devaux';
const n6 = 'C.';
const con = `${n4}${n5} ${n6}`.trim();
const n7 = 'Zam';
const n8 = 'brano';
const n9 = 'G.';
const zam = `${n7}${n8} ${n9}`.trim();
const n10 = 'Mus';
const n11 = 'sard';
const n12 = 'S.';
const mus = `${n10}${n11} ${n12}`.trim();
const n13 = 'Math';
const n14 = 'is'; 
const n15 = 'B.';
const math = `${n13}${n14} ${n15}`.trim();
export const publicationsContent = {
  title: "Publications & Research",
  description: "Peer-reviewed articles and research contributions in Natural Language Processing, Machine Learning, and Legal Tech.",
  sections: [
    {
      id: "articles",
      title: "📚 Research Articles",
      description: "Published papers in international conferences and journals",
      items: [
        {
          id: 1,
          title: "Article 700 Identification in Judicial Judgments: Comparing Transformers and Machine Learning Models",
          authors: [moi, con, zam, mus],
          journal: "Information",
          year: "2024",
          type: "journal",
          category: "NLP",
          url: "https://www.mdpi.com/2571-905X/7/4/83",
          abstract: "Comparative analysis of transformer models and traditional ML approaches for identifying Article 700 in judicial decisions.",
          keywords: ["Transformers", "Machine Learning", "Legal NLP", "Judicial Analysis"],
          status: "published",
          impact: "Q2 Journal"
        },
        {
          id: 2,
          title: "SCRIBE: A Specialized Collaborative Tool for Legal Judgment Annotation",
          authors: [moi, con, zam, mus],
          conference: "JURIX - Legal Knowledge and Information Systems",
          year: "2022",
          type: "conference",
          category: "Legal Tech",
          url: "https://ebooks.iospress.nl/doi/10.3233/FAIA220483",
          abstract: "Development of a collaborative annotation tool specifically designed for legal judgment analysis and markup.",
          keywords: ["Legal Tech", "Annotation Tool", "Collaboration", "Legal NLP"],
          status: "published",
          impact: "International Conference"
        },
        {
          id: 3,
          title: "Linking Appellate Judgments to Tribunal Judgments: Benchmarking different ML techniques",
          authors: [con, math, moi, zam, mus],
          conference: "JURIX - Legal Knowledge and Information Systems",
          year: "2022",
          type: "conference",
          category: "Machine Learning",
          url: "https://ebooks.iospress.nl/volumearticle/62033",
          abstract: "Comprehensive benchmarking study comparing various machine learning techniques for linking legal judgments across court levels.",
          keywords: ["Legal Linking", "Benchmarking", "Machine Learning", "Court Systems"],
          status: "published",
          impact: "International Conference"
        },
        {
          id: 4,
          title: "NER sur décisions judiciaires françaises: CamemBERT Judiciaire ou méthode ensembliste ?",
          authors: [moi, con, math, zam, mus],
          conference: "EGC - Extraction et Gestion des Connaissances",
          year: "2022",
          type: "conference",
          category: "NER",
          url: "https://editions-rnti.fr/?inprocid=1002738",
          abstract: "Named Entity Recognition study on French judicial decisions comparing CamemBERT-based models with ensemble methods.",
          keywords: ["CamemBERT", "NER", "French Legal Text", "Ensemble Methods"],
          status: "published",
          impact: "National Conference"
        }
      ]
    }
  ],
  statistics: [
    {
      icon: "📄",
      title: "Publications",
      value: "4+",
      description: "Peer-reviewed articles"
    },
    {
      icon: "🎯",
      title: "Research Focus",
      value: "Legal NLP",
      description: "Primary domain"
    },
    {
      icon: "🏆",
      title: "Impact",
      value: "International",
      description: "Conference presence"
    }
  ]
};