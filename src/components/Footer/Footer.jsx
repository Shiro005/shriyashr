import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Shriyash Portfolio</h2>
                        <p>Full Stack Web Developer</p>
                    </div>
                    <div className="flex justify-center space-x-4 mb-4 md:mb-0">
                        <Link to="/about" className="hover:underline text-base font-semibold">About</Link>
                        <Link to="/projects" className="hover:underline text-base font-semibold">Projects</Link>
                        <Link to="/contact" className="hover:underline text-base font-semibold">Contact</Link>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="https://github.com/Shiro005" aria-label="GitHub" className="hover:text-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.729.083-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.833 2.806 1.303 3.492.996.108-.774.42-1.303.763-1.604-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.467-2.382 1.236-3.22-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.403c1.02.005 2.048.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.65.243 2.871.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.607-2.807 5.623-5.479 5.92.431.372.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.798 24 17.301 24 12c0-6.628-5.372-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/shriyash-rulhe-655a9422a/" aria-label="LinkedIn" className="hover:text-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.225 0H1.771C.791 0 0 .774 0 1.734v20.533C0 23.225.792 24 1.771 24h20.451C23.206 24 24 23.225 24 22.267V1.734C24 .774 23.206 0 22.225 0zM7.05 20.452H3.545V9.034H7.05v11.418zM5.298 7.683c-1.144 0-2.062-.926-2.062-2.065 0-1.138.918-2.065 2.062-2.065 1.141 0 2.062.926 2.062 2.065 0 1.138-.921 2.065-2.062 2.065zM20.451 20.452h-3.506v-5.614c0-1.336-.027-3.055-1.86-3.055-1.861 0-2.146 1.45-2.146 2.951v5.718H9.44V9.034h3.364v1.554h.046c.468-.885 1.609-1.818 3.313-1.818 3.545 0 4.197 2.334 4.197 5.368v6.314z" />
                            </svg>
                        </a>
                        <a href="https://x.com/ShriyashRulhe?t=k4cVgM_UUFa7r5keZ0v7YA&s=09" aria-label="Twitter" className="hover:text-gray-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482 13.957 13.957 0 01-10.141-5.144 4.919 4.919 0 001.523 6.573 4.903 4.903 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.95 4.89a4.93 4.93 0 01-2.224.084 4.923 4.923 0 004.604 3.417A9.874 9.874 0 010 21.543a13.934 13.934 0 007.548 2.213c9.058 0 14.01-7.509 14.01-14.011 0-.213-.005-.425-.015-.637A10.025 10.025 0 0024 4.557z" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UC7H82Mxei7P9m6Gw3KssINw" aria-label="Youtube" className="hover:text-gray-600">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.498 6.174a2.936 2.936 0 0 0-2.067-2.067C19.853 3.5 12 3.5 12 3.5s-7.853 0-9.43.607a2.936 2.936 0 0 0-2.068 2.067C0 7.75 0 12 0 12s0 4.25.502 5.826a2.936 2.936 0 0 0 2.067 2.067C4.147 20.5 12 20.5 12 20.5s7.853 0 9.43-.607a2.936 2.936 0 0 0 2.068-2.067C24 16.25 24 12 24 12s0-4.25-.502-5.826zM9.75 15.018V8.982l6.518 3.018-6.518 3.018z" />
                            </svg>
                        </a>
                        <a href="https://discord.com/invite/Aw5bJfgY" aria-label="Discord" className="hover:text-gray-600">
                            <svg class="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; 2024 Shriyash Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
