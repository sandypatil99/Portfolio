import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project1.png';

const projects = [
    {
        title: 'MovieDB Explorer',
        description: 'A responsive movie database explorer built with React and Tailwind CSS, featuring search and filtering capabilities.',
        image: project1,
        tech: ['React', 'Tailwind CSS', 'TMDB API'],
        github: 'https://github.com/sandypatil99/Moviedb',
        demo: 'https://topmovie-db.netlify.app/',
    },
     {
        title: 'WordPress Theme',
        description: 'A responsive WordPress theme built with custom CSS and JavaScript, featuring a modern design and optimized performance.',
        image: project1,
        tech: ['WordPress', 'Custom CSS', 'JavaScript'],
        github: 'https://github.com/sandypatil99/WordPress-Theme',
        demo: 'https://wordpress-theme-demo.netlify.app/',
    },
     {
        title: 'ValutFlow',
        description: 'Modern style and lead generation website for a financial services company, built with HTML, CSS, and JavaScript.',
        image: project1,
        tech: ['HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/sandypatil99/Valutflow',
        demo: 'https://valutflow.netlify.app/',
    },
    {
        title: 'UsabilityHub Clone',
        description: 'A clone of the UsabilityHub website, built with HTML and CSS, featuring a responsive design and interactive elements.',
        image: project1,
        tech: ['HTML', 'CSS'],
        github: 'https://github.com/sandypatil99/UsabilityHub.com-Clone',
        demo: 'https://usabilityhub-clone.netlify.app/',
    },
    {
        title: 'SunDown Studio',
        description: 'Animated landing page for a creative agency, built with HTML, CSS, and JavaScript, featuring smooth animations and a modern design.',
        image: project1,
        tech: ['HTML', 'CSS'],
        github: 'https://sandypatil99.github.io/Sundown-Studio',
        demo: 'https://sandypatil99.github.io/Sundown-Studio',
    },

    // {
    //     title: 'Aurora Analytics',
    //     description: 'A comprehensive data visualization dashboard built with React and D3.js, featuring real-time updates and interactive charts.',
    //     image: project1,
    //     tech: ['React', 'D3.js', 'Tailwind', 'Node.js'],
    //     github: 'https://github.com',
    //     demo: 'https://demo.com',
    // },
    // {
    //     title: 'Nexus E-Commerce',
    //     description: 'A modern e-commerce platform with a focus on speed and user experience. Full-featured cart and checkout system.',
    //     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    //     tech: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    //     github: 'https://github.com',
    //     demo: 'https://demo.com',
    // },
    // {
    //     title: 'Crypto Pulse',
    //     description: 'Real-time cryptocurrency tracking app with personalized alerts and deep-dive market analysis tools.',
    //     image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    //     tech: ['TypeScript', 'React Native', 'Firebase'],
    //     github: 'https://github.com',
    //     demo: 'https://demo.com',
    // },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-purple-500">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work. Each project is crafted with attention to detail and a focus on performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex items-center space-x-4">
                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
                                        <Github size={18} className="mr-1" /> Code
                                    </a>
                                    <a href={project.demo} className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
                                        <ExternalLink size={18} className="mr-1" /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
