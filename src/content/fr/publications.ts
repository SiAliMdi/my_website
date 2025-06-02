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
  title: "Publications & Recherche",
  description: "Articles évalués par les pairs et contributions de recherche en Traitement Automatique du Langage Naturel, Apprentissage Automatique et Technologies Juridiques.",
  sections: [
    {
      id: "articles",
      title: "📚 Articles de Recherche",
      description: "Articles publiés dans des conférences et revues internationales",
      items: [
        {
          id: 1,
          title: "Identification de l'Article 700 dans les Décisions Judiciaires: Comparaison des Transformers et Modèles d'Apprentissage Automatique",
          authors: [moi, con, zam, mus],
          journal: "Information",
          year: "2024",
          type: "journal",
          category: "TALN",
          url: "https://www.mdpi.com/2571-905X/7/4/83",
          abstract: "Analyse comparative des modèles transformers et approches ML traditionnelles pour identifier l'Article 700 dans les décisions judiciaires.",
          keywords: ["Transformers", "Apprentissage Automatique", "TALN Juridique", "Analyse Judiciaire"],
          status: "published",
          impact: "Revue Q2"
        },
        {
          id: 2,
          title: "SCRIBE: Un Outil Collaboratif Spécialisé pour l'Annotation de Décisions Judiciaires",
          authors: [
            moi,
            con,
            zam,
            mus
          ],
          conference: "JURIX - Systèmes de Connaissances et d'Information Juridiques",
          year: "2022",
          type: "conference",
          category: "Tech Juridique",
          url: "https://ebooks.iospress.nl/doi/10.3233/FAIA220483",
          abstract: "Développement d'un outil d'annotation collaborative spécialement conçu pour l'analyse et le marquage de décisions judiciaires.",
          keywords: ["Tech Juridique", "Outil d'Annotation", "Collaboration", "TALN Juridique"],
          status: "published",
          impact: "Conférence Internationale"
        },
        {
          id: 3,
          title: "Liaison des Décisions d'Appel aux Décisions de Tribunal: Benchmarking de différentes techniques ML",
          authors: [
            con,
            math,
            moi,
            zam,
            mus
          ],
          conference: "JURIX - Systèmes de Connaissances et d'Information Juridiques",
          year: "2022",
          type: "conference",
          category: "Apprentissage Automatique",
          url: "https://ebooks.iospress.nl/volumearticle/62033",
          abstract: "Étude de benchmarking complète comparant diverses techniques d'apprentissage automatique pour lier les décisions judiciaires entre niveaux de tribunaux.",
          keywords: ["Liaison Juridique", "Benchmarking", "Apprentissage Automatique", "Systèmes Judiciaires"],
          status: "published",
          impact: "Conférence Internationale"
        },
        {
          id: 4,
          title: "NER sur décisions judiciaires françaises: CamemBERT Judiciaire ou méthode ensembliste ?",
          authors: [
            moi,
            con,
            math,
            zam,
            mus
          ],
          conference: "EGC - Extraction et Gestion des Connaissances",
          year: "2022",
          type: "conference",
          category: "REN",
          url: "https://editions-rnti.fr/?inprocid=1002738",
          abstract: "Étude de Reconnaissance d'Entités Nommées sur décisions judiciaires françaises comparant les modèles basés sur CamemBERT avec les méthodes ensemblistes.",
          keywords: ["CamemBERT", "REN", "Texte Juridique Français", "Méthodes Ensemblistes"],
          status: "published",
          impact: "Conférence Nationale"
        }
      ]
    }
  ],
  statistics: [
    {
      icon: "📄",
      title: "Publications",
      value: "4+",
      description: "Articles évalués par les pairs"
    },
    {
      icon: "🎯",
      title: "Focus Recherche",
      value: "TALN Juridique",
      description: "Domaine principal"
    },
    {
      icon: "🏆",
      title: "Impact",
      value: "International",
      description: "Présence en conférence"
    }
  ]
};