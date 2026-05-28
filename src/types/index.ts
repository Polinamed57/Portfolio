export type SocialKind = "github" | "linkedin" | "email";

export interface SocialLink {
  kind: SocialKind;
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  photoUrl: string;
  resumeUrl: string;
  email: string;
  socials: SocialLink[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  imageUrl: string;
  year: string;
}

export type TimelineKind = "work" | "education";

export interface TimelineEntry {
  kind: TimelineKind;
  title: string;
  org: string;
  period: string;
  details: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface NavItem {
  id: string;
  label: string;
}
