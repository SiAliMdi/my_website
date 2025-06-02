interface AboutContent {
  title: string;
  profileAlt: string;
  description: string;
  educationTitle: string;
  experienceTitle: string;
  educationItem1: string;
  educationItem2: string;
  experienceItem1: string;
  experienceItem2: string;
    experienceItem3: string;
    funTitle: string;
    funItem1: string;
    funItem2: string;
    funItem3: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string[];
    certifUrl: string; 
    certifBtnTxt: string;
    certifDesc: string;
}

interface EducationContent {
  title: string;
description: string;
  items: EducationItem[];
    highlight: string;
    statistics: {
    icon: string;
    title: string;
    value: string;
    description: string;
    }[];
}

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ExpStatisticItem {
  icon: string;
  title: string;
  value: string;
  description: string;
}

interface ExperienceContent {
  title: string;
  description: string;
  items: ExperienceItem[];
  highlight: string;
  statistics: ExpStatisticItem[];
}

interface Skill {
  name: string;
  icon: string;
  level: string;
}

interface SkillCategory {
  id: number;
  title: string;
  type: 'technical' | 'academic' | 'language' | 'creative';
  typeDescription: string;
  skills: Skill[];
}

interface SkillsContent {
  title: string;
  description: string;
  skillsCountDescription: string;
  categories: SkillCategory[];
}

interface NavigationLink {
  id: string;
  path: string;
  label: string;
  icon: string;
  description: string;
}

interface NavigationBrand {
  name: string;
  tagline: string;
}

interface MobileMenu {
  openLabel: string;
  closeLabel: string;
}

interface NavigationContent {
  brand: NavigationBrand;
  links: NavigationLink[];
  mobileMenu: MobileMenu;
}

interface Highlight {
  icon: string;
  text: string;
  color: string; // Tailwind gradient color classes
}
interface HeroContent {
  name: string;
  title: string;
  subtitle: string;
  cta: string;
  // description: string;
  highlights: Highlight[];
  available: string;
  scroll: string;
  years: string;
  summerize: {
    research: string;
    phd: string;
    teaching: string;
  };
}


interface ContactField {
  label: string;
  value: string;
  indicator?: string;
}

interface ContactInfo {
  title: string;
  icon: string;
  connectText: string;
  fields: {
    email: ContactField;
    location: ContactField;
    status: ContactField;
  };
}

interface TechStackItem {
  name: string;
  icon: string;
}

interface FooterContent {
  contact: ContactInfo;
  navigation: {
    title: string;
    icon: string;
  };
  copyright: {
    builtWith: string;
    and: string;
    rightsReserved: string;
    techStackLabel: string;
  };
  techStack: TechStackItem[];
}

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: string;
  type: 'journal' | 'conference' | 'workshop' | 'preprint';
  category: string;
  url: string;
  abstract: string;
  keywords: string[];
  status: 'published' | 'accepted' | 'under-review' | 'preprint';
  impact: string;
}

interface PublicationSection {
  id: string;
  title: string;
  description: string;
  items: Publication[];
}

interface PublicationStatistic {
  icon: string;
  title: string;
  value: string;
  description: string;
}

interface PublicationsContent {
  title: string;
  description: string;
  sections: PublicationSection[];
  statistics: PublicationStatistic[];
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  skills: string[];
  status: 'active' | 'expired' | 'permanent';
  level: 'foundational' | 'intermediate' | 'advanced' | 'professional';
  description: string;
}

interface CertificationSection {
  id: string;
  title: string;
  description: string;
  items: Certification[];
}

interface CertificationStatistic {
  icon: string;
  title: string;
  value: string;
  description: string;
}

interface CertificationsContent {
  title: string;
  description: string;
  sections: CertificationSection[];
  statistics: CertificationStatistic[];
}

export type { CertificationsContent, Certification, CertificationSection, CertificationStatistic };
export type { PublicationsContent, Publication, PublicationSection, PublicationStatistic };
export type { FooterContent };
export type { HeroContent };
export type { NavigationContent, NavigationLink, NavigationBrand, MobileMenu };
export type { SkillsContent, SkillCategory, Skill };
export type { ExperienceContent, ExperienceItem, ExpStatisticItem };
export type { AboutContent, EducationContent, EducationItem };
