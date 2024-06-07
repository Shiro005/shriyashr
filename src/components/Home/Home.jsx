import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import './Home.css';
import { Link } from 'react-router-dom';
import { Pagination } from '../pagination/Pagination';

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
        <div className="flex flex-col items-center justify-center main_container">
            <motion.div
                className="container mx-auto px-4 text-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div
                    className="p-10 rounded-xl shadow-2xl mb-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.h3
                        className="text-5xl font-bold mb-4"
                        style={{ fontFamily: font }}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        How can I help You?
                    </motion.h3>
                    <motion.h4
                        className="text-xl mb-8"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className='text-white font-bold'>Full Stack Web Developer | </span>
                        <span className='text-white font-bold'>Expanding - WebReich | </span>
                        <span className='text-white font-bold'>Content Creator | </span>
                        <span className='text-blue-300 font-bold'>Looking for Job</span>
                    </motion.h4>
                    <motion.button
                        className="bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Hire Me
                    </motion.button>
                    <motion.button
                        className="bg-white text-black py-2 px-4 mx-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        View Resume
                    </motion.button>
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
                                <img src="https://cdn-icons-png.flaticon.com/256/12125/12125073.png" alt="" />
                                Buy me a coffee
                            </motion.button>
                        </Link>
                    </motion.p>
                </motion.div>
                <Pagination result={"Home"} next={"/about"} prev={"/"}/>
            </motion.div>
        </div >
    );
}

export default Home;
