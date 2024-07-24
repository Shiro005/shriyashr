import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { ArrowRight } from 'lucide-react';
import { Pagination } from '../pagination/Pagination';

export function Projects() {
    const projects = [
        {
            title: 'WebReich Community',
            description: 'For Solve Realtime problem Purpose (Education Sector)',
            Technologies: ['HTML', 'CSS', 'Vanilla Js', 'Node Js', 'SQL', 'API', 'Git', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/4121/4121044.png',
            key_features: 'Used by 150+ students',
            github_code: 'https://github.com/Shiro005/vercelHost.git',
            live_link: 'https://webreichedu.vercel.app/'
        },
        {
            title: 'Web Terminal',
            description: 'React Js Application better understading and frontend tech',
            Technologies: ['React Js', 'API', 'Git', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/7560/7560719.png',
            key_features: 'Fetch anyone github data by using custom commands by using github APIs',
            github_code: 'https://github.com/Shiro005/CustomTerminal.git',
            live_link: 'https://custom-terminal.vercel.app/'
        },
        {
            title: 'Password Generator',
            description: 'React Js Application better UI/UX design and frontend tech',
            Technologies: ['React Js', 'Hooks', 'Git', 'Github'],
            logo: 'https://cdn-icons-png.flaticon.com/128/3914/3914500.png',
            key_features: 'Random password generator with every refresh, allowed numbers characters, symbols with user requirements',
            github_code: 'https://github.com/Shiro005/React_Js-/tree/main/06PasswordGenerator',
            live_link: 'https://password-generator-web-reich.vercel.app/'
        }
    ];

    return (
        <motion.div
            className="bg-white text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="p-5 md:px-6 md:py-10 bg-white rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className="text-2xl font-bold capitalize text-black lg:text-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Project Highlights
                </motion.h1>
                <motion.p
                    className="my-2 text-gray-600"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    My projects reflect my dedication to creating seamless, user-friendly applications. I am always eager to learn and take on new challenges, and I strive to keep up with the latest industry trends and best practices.
                </motion.p>
                <hr className="my-4" />
                <motion.div
                    className="flex flex-col flex-wrap items-center justify-around"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="space-y-3 border-3  my-4 flex flex-wrap items-center content-around flex-col bg-gray-100 p-4 shadow-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                        >
                            <span className="inline-block rounded-full bg-gray-100 p-3 text-black">
                                <img src={project.logo} alt="" height={40} width={40} />
                            </span>
                            <h1 className="text-xl font-semibold capitalize text-black">{project.title}</h1>
                            <p className="text-base text-gray-600">
                                {project.description}
                            </p>
                            <p className="text-base text-gray-900 font-semibold">
                                Key Features : {project.key_features}
                            </p>
                            <div className="flex space-4 flex-wrap">
                                {project.Technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="inline-flex rounded-full px-3 text-base font-semibold bg-amber-100 text-amber-600 m-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.github_code}>
                                <motion.button
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Github Code 
                                </motion.button>
                            </a>
                            <a href={project.live_link}>
                                <motion.button
                                    type="button"
                                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Live Link
                                </motion.button>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
                <Pagination result={"About"} next={"/contact"} prev={"/about"} />
            </motion.div>
        </motion.div>
    );
}
