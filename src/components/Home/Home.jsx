import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import './Home.css';
import { Link } from 'react-router-dom';
import { Pagination } from '../pagination/Pagination';

import resume from '../../assets/shriyash_resume.pdf';

const Home = () => {
    const [font, setFont] = useState('Roboto');

    useEffect(() => {
        const fonts = ['Roboto', 'Lobster', 'sans-serif', 'cursive', 'monospace'];

        const intervalId = setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            setFont(randomFont);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white min-h-screen">
            <motion.div
                className="container mx-auto px-4 text-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className=" mb-10 bg-white"
                    // whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h3
                        className="text-3xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: font }}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        How can I help You?
                    </motion.h3>
                    <motion.h4
                        className="text-lg md:text-xl mb-8"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className='text-gray-900 font-bold'>Full Stack Web Developer | </span>
                        <span className='text-gray-900 font-bold'>Expanding - WebReich | </span>
                        <span className='text-gray-900 font-bold'>Content Creator | </span>
                        <span className='text-blue-800 font-bold'>Looking for Job</span>
                    </motion.h4>
                    <div className="flex justify-center flex-wrap gap-4">
                        <motion.button
                            className="bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300 ease-in-out"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Hire Me
                        </motion.button>
                        <motion.a
                            href={resume}
                            download="resume.pdf"
                            className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
                            // whileHover={{ backgroundColor: 'rgb(255, 198, 10)' }}
                            transition={{ duration: 0.3 }}
                        >
                            View Resume
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div
                    className="vr-landing"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <motion.p className="text-lg">
                        <Link to="/coffee">
                            <motion.button
                                className='coffee_btn transition duration-300 ease-in-out'
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src="https://cdn-icons-png.flaticon.com/256/12125/12125073.png" alt="Buy me a coffee" />
                                Buy me a coffee
                            </motion.button>
                        </Link>
                    </motion.p>
                </motion.div>
                <Pagination result={"Home"} next={"/about"} prev={"/"} />
            </motion.div>
        </div>
    );
};

export default Home;
