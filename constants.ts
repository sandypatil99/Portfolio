
import { NavLink, HeroData, AboutData, ExperienceItem, Project, Skill, ContactData, SkillCategory } from './types';
// Icons would ideally be imported if they were separate components, here they are embedded in Skills.tsx or used as placeholders
// import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'; // Example, not used directly here to keep it simple

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_DATA: HeroData = {
  name: 'Sandesh Patil',
  tagline: 'Building innovative solutions with cutting-edge technologies.',
  shortIntro: 'Ex-Microsoft | Software Engineer | AI/ML Enthusiast passionate about creating impactful software and exploring the frontiers of artificial intelligence.',
  resumeUrl: 'https://sandeshpatil.in/resume.pdf', // Assuming this is the link or a similar one
  profileImageUrl: 'https://picsum.photos/seed/sandesh-profile/400/400', // Placeholder
};

export const ABOUT_DATA: AboutData = {
  description: [
    "Hello! I'm Sandesh, a results-oriented Software Engineer with a strong foundation in full-stack web development and a profound interest in Artificial Intelligence and Machine Learning. My journey in tech has been driven by a passion for solving complex problems and building applications that make a difference.",
    "Formerly at Microsoft, I've had the opportunity to work on scalable and robust systems, contributing to projects that impact users globally. My expertise spans across the MERN stack, Python, cloud platforms like Azure and GCP, and various AI/ML frameworks.",
    "I'm always eager to learn new technologies and methodologies, continuously seeking opportunities to grow and innovate. When I'm not coding, I enjoy exploring new AI research, contributing to open-source projects, and mentoring aspiring developers."
  ],
  imageUrl: 'https://picsum.photos/seed/sandesh-about/600/400', // Placeholder
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Software Engineer',
    company: 'Microsoft',
    companyUrl: 'https://microsoft.com',
    duration: 'Past (e.g., Jan 2021 - Dec 2023)', // Placeholder duration
    descriptionPoints: [
      'Developed and maintained scalable web applications using technologies like React, Node.js, and Azure services.',
      'Collaborated in agile teams to design, implement, and deploy new features for enterprise-level software.',
      'Contributed to AI/ML projects, focusing on model integration and API development.',
      'Participated in code reviews, ensuring high-quality standards and best practices.',
    ],
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png', // Example logo
  },
  {
    id: 'exp2',
    role: 'Full Stack Developer (Intern)',
    company: 'Tech Solutions Inc.', // Example past internship
    companyUrl: '#',
    duration: 'Summer 2020', // Placeholder duration
    descriptionPoints: [
      'Assisted in the development of a client-facing portal using Angular and Spring Boot.',
      'Gained experience in database management with PostgreSQL and API testing.',
      'Worked closely with senior developers, contributing to various stages of the software development lifecycle.',
    ],
    logoUrl: 'https://picsum.photos/seed/techinc/100/100', // Placeholder logo
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'Resume AI',
    description: 'An AI-powered resume builder that helps users create professional resumes tailored to job descriptions using OpenAI.',
    imageUrl: 'https://picsum.photos/seed/resumeai/600/400',
    techStack: ['React', 'Node.js', 'OpenAI API', 'GCP', 'Tailwind CSS'],
    liveLink: 'https://resumeai.sandeshpatil.in/', // From existing portfolio
    repoLink: 'https://github.com/sandeshpatil10/resume-ai', // Assuming repo name
  },
  {
    id: 'proj2',
    title: 'AI Blog Post Generator',
    description: 'A tool to automatically generate blog post drafts on various topics using AI, built with Next.js and OpenAI.',
    imageUrl: 'https://picsum.photos/seed/aiblog/600/400',
    techStack: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Supabase'],
    liveLink: 'https://blog.sandeshpatil.in/', // From existing portfolio
    // repoLink: '#', // Add if available
  },
  {
    id: 'proj3',
    title: 'AI Product Description Generator',
    description: 'Generates compelling product descriptions for e-commerce using AI, enhancing product appeal.',
    imageUrl: 'https://picsum.photos/seed/aiproduct/600/400',
    techStack: ['Next.js', 'OpenAI API', 'Tailwind CSS', 'Supabase'],
    // liveLink: '#', // Add if available
    // repoLink: '#', // Add if available
  },
  {
    id: 'proj4',
    title: 'GitHub Profile README Generator',
    description: 'A utility to create attractive and informative GitHub profile READMEs quickly.',
    imageUrl: 'https://picsum.photos/seed/githubreadme/600/400',
    techStack: ['React', 'Node.js', 'GitHub API'],
    liveLink: 'https://readme.sandeshpatil.in/', // From existing portfolio
    repoLink: 'https://github.com/sandeshpatil10/github-profile-readme-generator', // Assuming
  },
];

export const SKILLS_DATA: Skill[] = [
  // AI/ML
  { id: 'sk_ai1', name: 'Machine Learning', category: SkillCategory.AI_ML },
  { id: 'sk_ai2', name: 'Deep Learning', category: SkillCategory.AI_ML },
  { id: 'sk_ai3', name: 'NLP', category: SkillCategory.AI_ML },
  { id: 'sk_ai4', name: 'OpenAI API', category: SkillCategory.AI_ML },
  { id: 'sk_ai5', name: 'TensorFlow', category: SkillCategory.AI_ML },
  { id: 'sk_ai6', name: 'PyTorch', category: SkillCategory.AI_ML },

  // Programming Languages
  { id: 'sk_lang1', name: 'JavaScript', category: SkillCategory.LANGUAGES },
  { id: 'sk_lang2', name: 'TypeScript', category: SkillCategory.LANGUAGES },
  { id: 'sk_lang3', name: 'Python', category: SkillCategory.LANGUAGES },
  { id: 'sk_lang4', name: 'Java', category: SkillCategory.LANGUAGES },
  { id: 'sk_lang5', name: 'C#', category: SkillCategory.LANGUAGES },

  // Frontend
  { id: 'sk_fe1', name: 'React', category: SkillCategory.FRONTEND },
  { id: 'sk_fe2', name: 'Next.js', category: SkillCategory.FRONTEND },
  { id: 'sk_fe3', name: 'Angular', category: SkillCategory.FRONTEND },
  { id: 'sk_fe4', name: 'HTML5', category: SkillCategory.FRONTEND },
  { id: 'sk_fe5', name: 'CSS3', category: SkillCategory.FRONTEND },
  { id: 'sk_fe6', name: 'Tailwind CSS', category: SkillCategory.FRONTEND },
  { id: 'sk_fe7', name: 'Redux', category: SkillCategory.FRONTEND },

  // Backend
  { id: 'sk_be1', name: 'Node.js', category: SkillCategory.BACKEND },
  { id: 'sk_be2', name: 'Express.js', category: SkillCategory.BACKEND },
  { id: 'sk_be3', name: 'Spring Boot', category: SkillCategory.BACKEND },
  { id: 'sk_be4', name: 'Django', category: SkillCategory.BACKEND },
  { id: 'sk_be5', name: 'REST APIs', category: SkillCategory.BACKEND },

  // Databases
  { id: 'sk_db1', name: 'MongoDB', category: SkillCategory.DATABASES },
  { id: 'sk_db2', name: 'PostgreSQL', category: SkillCategory.DATABASES },
  { id: 'sk_db3', name: 'MySQL', category: SkillCategory.DATABASES },
  { id: 'sk_db4', name: 'Supabase', category: SkillCategory.DATABASES },

  // DevOps & Cloud
  { id: 'sk_devops1', name: 'Azure', category: SkillCategory.DEVOPS },
  { id: 'sk_devops2', name: 'GCP', category: SkillCategory.DEVOPS },
  { id: 'sk_devops3', name: 'AWS', category: SkillCategory.DEVOPS },
  { id: 'sk_devops4', name: 'Docker', category: SkillCategory.DEVOPS },
  { id: 'sk_devops5', name: 'Kubernetes', category: SkillCategory.DEVOPS },
  { id: 'sk_devops6', name: 'Git', category: SkillCategory.DEVOPS },
];

export const CONTACT_DATA: ContactData = {
  email: 'sandesh.patil10@example.com', // Replace with actual email if known, or a placeholder
  linkedinUrl: 'https://www.linkedin.com/in/sandeshpatil10/',
  githubUrl: 'https://github.com/sandeshpatil10',
  introText: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something exciting. Feel free to reach out!"
};
