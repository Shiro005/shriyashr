import React from 'react';
import 'tailwindcss/tailwind.css';
import './Home.css';
import { useState, useEffect } from 'react';

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

    return (
        <div className="flex flex-col items-center justify-center main_container">
            <div className="container mx-auto px-4 text-center">
                <div className="p-10 rounded-xl shadow-2xl mb-10 animate-fade-in transform hover:scale-105 transition duration-500 custom_container">
                    <h3 className="text-5xl font-bold mb-4 animate-slide-down" style={{ fontFamily: font }}>How can I help You ?</h3>
                    <h4 className="text-xl mb-8 animate-slide-left">
                        <span className='text-red-600 font-bold'>Full Stack Web Developer | </span>
                        <span className='text-green-600 font-bold'>Expanding - WebReich | </span>
                        <span className='text-yellow-400 font-bold'>Content Creator | </span>
                        <span className='text-blue-300 font-bold'>Looking for Job</span>
                    </h4>
                    <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out animate-slide-right">
                        Hire Me
                    </button>
                    <button className="bg-white text-black py-2 px-4 mx-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out animate-slide-right">
                        View Resume
                    </button>
                </div>
                <div className="vr-landing">
                    <p className="text-lg animate-slide-up">

                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
