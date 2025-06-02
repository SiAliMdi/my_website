import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { loadContent } from "../lib/contentLoader";
import type { Language } from "../types";

export const useContent = <T>(section: string) => {
  const { i18n } = useTranslation();
  const [content, setContent] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await loadContent(
          section,
          i18n.language as Language
        );
        setContent(data as T);
      } catch (err) {
        setError(`Failed to load ${section} content`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [section, i18n.language]);

  return { content, loading, error };
};
