import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code, Database, Monitor, Globe,
    Users, Rocket, Award, Settings,
    Layers, Briefcase, FileText, ChevronRight
} from 'lucide-react';

const Home = () => {
    const skills = [
        { icon: <Code className="w-12 h-12 text-orange-500" />, title: "Web Development", description: "Crafting modern, responsive, and scalable web applications using the latest technologies." },
        { icon: <Database className="w-12 h-12 text-orange-500" />, title: "Backend Engineering", description: "Building robust and efficient backend systems to power your applications." },
        { icon: <Monitor className="w-12 h-12 text-orange-500" />, title: "Frontend Design", description: "Designing intuitive and interactive user interfaces for seamless user experiences." },
        { icon: <Globe className="w-12 h-12 text-orange-500" />, title: "Digital Marketing", description: "Driving growth through strategic online campaigns and data-driven insights." }
    ];

    const services = [
        { icon: <Users className="w-12 h-12 text-orange-500" />, title: "Custom Solutions", description: "Tailored digital solutions to meet your unique business needs." },
        { icon: <Rocket className="w-12 h-12 text-orange-500" />, title: "Tech Consulting", description: "Expert guidance to align technology with your business goals." },
        { icon: <Award className="w-12 h-12 text-orange-500" />, title: "Digital Transformation", description: "Innovative strategies to modernize your business operations." },
        { icon: <Settings className="w-12 h-12 text-orange-500" />, title: "Technical Support", description: "Reliable maintenance and support for your systems." }
    ];

    const projects = [
        {
            title: "AI Learning Platform",
            description: "An advanced e-learning system powered by AI to personalize learning experiences.",
            icon: <Layers className="w-12 h-12 text-orange-500" />
        },
        {
            title: "Social Media Automation",
            description: "A tool to automate and optimize social media marketing workflows.",
            icon: <Globe className="w-12 h-12 text-orange-500" />
        },
        {
            title: "Project Management App",
            description: "A collaborative platform to track and manage projects efficiently.",
            icon: <Briefcase className="w-12 h-12 text-orange-500" />
        }
    ];

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const scaleUpVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-white via-orange-50 to-white py-24 px-6"
            >
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-2/3 text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-6"
                        >
                            Shriyash Rulhe
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl text-gray-700 mb-8"
                        >
                            Full Stack Developer | WebReich Technologies | AI Solutions Architect
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex space-x-4 flex-nowrap"
                        >
                            <motion.a
                                href="mailto:shriyashrulhe145@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-orange-600 to-purple-600 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
                            >
                                Contact Me
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 transition"
                            >
                                 Resume
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto py-20 px-4"
            >
                <h2 className="text-3xl font-bold text-left mb-10 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                    Technical Skills
                </h2>
                <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100 pb-6 space-x-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={scaleUpVariants}
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0 w-72 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {skill.icon}
                            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                                {skill.title}
                            </h3>
                            <p className="mt-4 text-gray-600">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-orange-50 py-10"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-left mb-10 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent ">
                        WebReich Services
                    </h2>
                    <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100 pb-6 space-x-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={scaleUpVariants}
                                whileHover={{ scale: 1.05 }}
                                className="flex-shrink-0 w-72 bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                {service.icon}
                                <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="mt-4 text-gray-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Latest Projects */}
            <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="container mx-auto py-20 px-4"
            >
                <h2 className="text-3xl font-bold text-left mb-10 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                    Latest Projects
                </h2>
                <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-100 pb-6 space-x-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={scaleUpVariants}
                            whileHover={{ scale: 1.05 }}
                            className="flex-shrink-0 w-80 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {project.icon}
                            <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="mt-4 text-gray-600">
                                {project.description}
                            </p>
                            <div className="mt-6">
                                <Link
                                    to="/projects"
                                    className="flex items-center text-orange-500 hover:text-orange-600 font-semibold"
                                >
                                    View Project <ChevronRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* About WebReich */}
            <motion.div
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-lg p-6 w-full max-w-6xl text-center flex flex-col items-center mx-auto my-20"
            >
                <img
                    src="/logo.png"
                    alt="WebReich Logo"
                    className="mb-4 w-16 h-16"
                />
                <h2 className="text-2xl font-bold mb-4">Introducing WebReich</h2>
                <p className="text-gray-700 mb-6">
                    WebReich is an AI-powered coding community and social platform built to simplify tech learning for students, professionals, and enthusiasts. Our platform addresses key challenges in today’s tech landscape: information overload, lack of awareness about emerging technologies, and the absence of structured guidance.
                </p>
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
                >
                    Learn More
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Home;