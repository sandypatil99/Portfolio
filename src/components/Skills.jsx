import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Layout,
    Cpu,
    Figma,
    Terminal,
    Layers
} from 'lucide-react';

const skills = [
    { icon: <Layout className="text-blue-400" />, name: 'Frontend Dev', items: ['React', 'WordPress' ,'Next.js'] },
    { icon: <Code2 className="text-purple-400" />, name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
    { icon: <Database className="text-green-400" />, name: 'Backend', items: ['Node.js', 'PostgreSQL', 'PHP'] },
    { icon: <Layers className="text-pink-400" />, name: 'Styling', items: ['Tailwind CSS', 'Framer Motion', 'SASS'] },
    { icon: <Figma className="text-orange-400" />, name: 'Design', items: ['Figma', 'UI/UX Design', 'Design Systems'] },
    { icon: <Terminal className="text-yellow-400" />, name: 'Tools', items: ['Git', 'Docker', 'Gen AI'] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 lg:py-32 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core <span className="text-purple-500">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I've spent years honing my craft in various technologies. Here are the tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group"
                        >
                            <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400 border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
