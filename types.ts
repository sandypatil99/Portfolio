
import React from 'react';

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface HeroData {
  name: string;
  tagline: string;
  shortIntro: string;
  resumeUrl: string; // URL to the resume PDF
  profileImageUrl?: string; 
}

export interface AboutData {
  description: string[];
  imageUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  descriptionPoints: string[];
  logoUrl?: string;
  companyUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactElement; // Using ReactElement for SVG components
  category: SkillCategory;
}

export enum SkillCategory {
  LANGUAGES = "Programming Languages",
  FRONTEND = "Frontend Development",
  BACKEND = "Backend Development",
  DATABASES = "Databases",
  DEVOPS = "DevOps & Cloud",
  TOOLS = "Tools & Technologies",
  AI_ML = "AI/ML"
}


export interface ContactData {
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  introText?: string;
}
