import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Code, Zap } from 'lucide-react';
import profilePic from '../assets/Myself.jpeg';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '2+', icon: <Zap size={20} className="text-yellow-400" /> },
        { label: 'Projects Completed', value: '15+', icon: <Award size={20} className="text-purple-400" /> },
        { label: 'Line of Code', value: '10k', icon: <Code size={20} className="text-blue-400" /> },
        { label: 'Ongoing Learning', value: 'Always', icon: <BookOpen size={20} className="text-green-400" /> },
    ];

    return (
        <section id="about" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Passionate about creating <br />
                            <span className="text-purple-500">impactful digital products</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                I'm a frontend developer with a deep passion for UI/UX design and building seamless user experiences.
                                With over five years in the field, I've had the opportunity to work with diverse teams and technologies.
                            </p>
                            <p>
                                My approach combines technical proficiency with a creative mindset, allowing me to build applications
                                that are not only robust and scalable but also visually stunning and intuitive to use.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new design trends, contributing to open-source, or
                                sharing my knowledge through tech blogs and mentoring.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            {stats.map((stat) => (
                                <div key={stat.label} className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="flex items-center space-x-3 mb-2">
                                        {stat.icon}
                                        <span className="text-2xl font-bold text-white">{stat.value}</span>
                                    </div>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                            <img
                                src={profilePic}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
