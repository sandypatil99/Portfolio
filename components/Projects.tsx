
import React from 'react';
import type { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const projectData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with a React frontend and a Node.js backend.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project1/400/225',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for managing tasks and projects. Features include drag-and-drop boards, user authentication, and real-time updates.',
    tags: ['Vue.js', 'Firebase', 'TypeScript', 'SCSS'],
    imageUrl: 'https://picsum.photos/seed/project2/400/225',
    liveUrl: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A statically generated blog using Next.js and Markdown for content. Optimized for SEO and performance, with a clean and minimal design.',
    tags: ['Next.js', 'React', 'Markdown', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/project3/400/225',
    githubUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js. Allows users to filter, sort, and explore data through various chart types.',
    tags: ['D3.js', 'JavaScript', 'HTML5', 'CSS3'],
    imageUrl: 'https://picsum.photos/seed/project4/400/225',
    liveUrl: '#',
    githubUrl: '#',
  },
];


const ProjectCard: React.FC<Project> = ({ title, description, tags, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href={liveUrl || githubUrl || '#'}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} (opens in a new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{title}</span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{description}</p>
        <div className="mt-2 flex items-center space-x-4">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer noopener" aria-label="GitHub repository">
              <GithubIcon className="h-5 w-5 hover:text-slate-200" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer noopener" aria-label="Live site">
              <ExternalLinkIcon className="h-5 w-5 hover:text-slate-200" />
            </a>
          )}
        </div>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag, i) => (
            <li key={i} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <img
        alt={`${title} project screenshot`}
        loading="lazy"
        width="200"
        height="112"
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 object-cover h-full"
        src={imageUrl}
      />
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {projectData.map((project, index) => (
            <li key={index}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
