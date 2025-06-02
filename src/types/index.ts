export type Language = 'en' | 'ar' | 'fr';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Experience {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}

export interface Publication {
  title: string;
  year: string;
  link?: string;
}