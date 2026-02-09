import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = React.useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ 'form-name': 'contact', ...formState }).toString(),
            });
            setFormState({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's <span className="text-purple-500">Collaborate</span></h2>
                        <p className="text-gray-400 mb-10 leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to reach out.
                            I'm always open to discussing new projects, creative ideas, or opportunities
                            to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                                    <Mail className="text-purple-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me At</p>
                                    <p className="text-white font-medium">sandeshjspatil@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all">
                                    <MessageSquare className="text-pink-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Socials</p>
                                    <p className="text-white font-medium">@sandesh_patil</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 rounded-3xl border border-white/5"
                    >
                        <form name='contact' onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold flex items-center justify-center group transition-all"
                            >
                                Send Message
                                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
