import type { Language } from "../types";

// Content imports for different languages
const contentModules = {
  en: {
    navigation: () =>
      import("../content/en/navigation").then(
        (m) => m.navigationContent
      ),
    hero: () =>
      import("../content/en/hero").then((m) => m.heroContent),
    about: () =>
      import("../content/en/about").then(
        (m) => m.aboutContent
      ),
    experience: () =>
      import("../content/en/experience").then(
        (m) => m.experienceContent
      ),
    education: () =>
      import("../content/en/education").then(
        (m) => m.educationContent
      ),
    skills: () =>
        import("../content/en/skills").then(
            (m) => m.skillsContent
    ),
    footer: () =>
      import("../content/en/footer").then(
        (m) => m.footerContent
    ),
    publications: () =>
      import("../content/en/publications").then(
        (m) => m.publicationsContent
      ),
    certifications: () =>
        import("../content/en/certifications").then(
            (m) => m.certificationsContent
        ),
    /* teaching: () =>
      import("../content/en/teaching").then(
        (m) => m.teachingContent
      ),
    portfolio: () =>
      import("../content/en/portfolio").then(
        (m) => m.portfolioContent
      ), */
  },
  ar: {
    navigation: () =>
      import("../content/ar/navigation").then(
        (m) => m.navigationContent
      ),
    hero: () =>
      import("../content/ar/hero").then((m) => m.heroContent),
    about: () =>
      import("../content/ar/about").then(
        (m) => m.aboutContent
      ),
    experience: () =>
      import("../content/ar/experience").then(
        (m) => m.experienceContent
      ),
    education: () =>
      import("../content/ar/education").then(
        (m) => m.educationContent
      ),
    skills: () =>
        import("../content/ar/skills").then(
            (m) => m.skillsContent
    ),
    footer: () =>
      import("../content/ar/footer").then(
        (m) => m.footerContent
      ),
      publications: () =>
        import("../content/ar/publications.ts").then(
          (m) => m.publicationsContent
        ),
    certifications: () =>
      import("../content/ar/certifications").then(
        (m) => m.certificationsContent
      ),
    /* teaching: () =>
      import("../content/ar/teaching").then(
        (m) => m.teachingContent
      ),
    portfolio: () =>
      import("../content/ar/portfolio.ts").then(
        (m) => m.portfolioContent
      ), */
  },
  fr: {
    navigation: () =>
      import("../content/fr/navigation").then(
        (m) => m.navigationContent
      ),
    hero: () =>
      import("../content/fr/hero").then((m) => m.heroContent),
    about: () =>
      import("../content/fr/about").then(
        (m) => m.aboutContent
      ),
    experience: () =>
      import("../content/fr/experience").then(
        (m) => m.experienceContent
      ),
    education: () =>
      import("../content/fr/education").then(
        (m) => m.educationContent
      ),
    skills: () =>
        import("../content/fr/skills").then(
            (m) => m.skillsContent
    ),
    footer: () =>
      import("../content/fr/footer").then(
        (m) => m.footerContent
      ),
      publications: () =>
        import("../content/fr/publications").then(
          (m) => m.publicationsContent
        ),
    certifications: () =>
      import("../content/fr/certifications").then(
        (m) => m.certificationsContent
      ),
    /* teaching: () =>
      import("../content/fr/teaching").then(
        (m) => m.teachingContent
      ),
    portfolio: () =>
      import("../content/fr/portfolio").then(
        (m) => m.portfolioContent
      ), */
  },
};

export const loadContent = async (
  section: string,
  language: Language
) => {
  try {
    const loader =
      contentModules[language]?.[
        section as keyof (typeof contentModules)[Language]
      ];
    if (loader) {
      return await loader();
    }
    // Fallback to English if content not found
    const fallbackLoader =
      contentModules.en[
        section as keyof typeof contentModules.en
      ];
    return fallbackLoader ? await fallbackLoader() : null;
  } catch (error) {
    console.error(
      `Failed to load content for ${section} in ${language}:`,
      error
    );
    return null;
  }
};
