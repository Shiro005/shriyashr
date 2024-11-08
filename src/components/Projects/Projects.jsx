import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { ArrowRight } from 'lucide-react';
import { Pagination } from '../pagination/Pagination';

export function Projects() {
    const projects = [
        {
            title: 'WebReich Community',
            description: 'Colleges Teach only theory knowledge | Beginners are confused in tier 3 colleges | Dont have proper guidance | Old teaching curriculum | Time wasting of students',
            Technologies: ['HTML', 'EJS', 'JavaScript', 'Node Js', 'PostgreSQL', 'REST API', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/4121/4121044.png',
            key_features: 'Used by 250+ students',
            github_code: 'https://github.com/Shiro005/vercelHost.git',
            live_link: 'https://webreichedu.vercel.app/'
        },
        {
            title: 'Dine Join',
            description: 'High printing costs | Customer ordering difficulty | Delayed menu access | Costly menu updates | Inefficient waitstaff management',
            Technologies: ['Vite', 'React.js', 'REST API', 'JSON', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/753/753839.png',
            key_features: 'Manage all customers in a digital way and optimize your Café business',
            github_code: '',
            live_link: 'https://dinejoindemo.vercel.app/'
        },
        {
            title: 'CRM',
            description: 'React Js Application better understanding and frontend tech',
            Technologies: ['React Js', 'API', 'Git', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/7560/7560719.png',
            key_features: 'Fetch anyone GitHub data by using custom commands through GitHub APIs',
            github_code: 'https://github.com/Shiro005/CustomTerminal.git',
            live_link: 'https://custom-terminal.vercel.app/'
        },
        {
            title: 'Web Terminal',
            description: 'React Js Application better understanding and frontend tech',
            Technologies: ['React Js', 'API', 'Git', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/7560/7560719.png',
            key_features: 'Fetch anyone GitHub data by using custom commands through GitHub APIs',
            github_code: 'https://github.com/Shiro005/CustomTerminal.git',
            live_link: 'https://custom-terminal.vercel.app/'
        },
        {
            title: 'Password Generator',
            description: 'React Js Application with enhanced UI/UX design and frontend tech',
            Technologies: ['React Js', 'Hooks', 'Git', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/3914/3914500.png',
            key_features: 'Random password generator with customizable options for characters, numbers, symbols',
            github_code: 'https://github.com/Shiro005/React_Js-/tree/main/06PasswordGenerator',
            live_link: 'https://password-generator-web-reich.vercel.app/'
        }
    ];

    return (
        <motion.div
            className="bg-white text-gray-900 w-full max-w-6xl mx-auto p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="p-6 bg-white rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className='text-left mb-8'>
                    <motion.h1
                        className="text-3xl font-bold text-gray-900"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Project Highlights
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-600 mt-4 text-left"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        My projects reflect my dedication to creating seamless, user-friendly applications. I am always eager to learn and take on new challenges, and I strive to keep up with the latest industry trends and best practices.
                    </motion.p>
                </div>
                <hr className="my-4 border-gray-300" />
                
                {/* Project Cards */}
                <motion.div
                    className="flex flex-col gap-8 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6 border border-gray-200"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <img src={project.logo} alt={`${project.title} logo`} className="w-16 h-16 object-cover" />
                                <div>
                                    <h1 className="text-2xl font-semibold text-gray-900">{project.title}</h1>
                                    <p className="text-base text-gray-600 mt-2">{project.description}</p>
                                    <p className="text-base text-gray-900 font-semibold mt-2">Key Features: {project.key_features}</p>
                                    <div className="flex flex-wrap mt-4">
                                        {project.Technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-amber-100 text-amber-600 font-semibold text-sm px-3 py-1 rounded-full mr-2 mb-2">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-6 space-x-4">
                                {project.github_code && (
                                    <a href={project.github_code} target="_blank" rel="noopener noreferrer">
                                        <motion.button
                                            className="bg-gray-900 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            GitHub Code
                                        </motion.button>
                                    </a>
                                )}
                                <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                                    <motion.button
                                        className="bg-orange-500 bg-opacity-80 text-white px-4 py-2 rounded-md font-semibold shadow-md hover:bg-opacity-100 transition duration-300 ease-in-out"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Live Link
                                    </motion.button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <Pagination result={"About"} next={"/contact"} prev={"/about"} />
            </motion.div>
        </motion.div>
    );
}
