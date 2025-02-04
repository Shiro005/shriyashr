import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                type: 'tween',
                duration: 0.3 
            }
        },
        exit: { 
            opacity: 0, 
            x: '100%',
            transition: { 
                type: 'tween',
                duration: 0.2 
            }
        }
    };

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <img
                        src="https://avatars.githubusercontent.com/u/113467235?v=4"
                        alt="Shriyash Rulhe"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-xl font-bold text-gray-900">Shriyash R. Rulhe</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => `
                                text-base font-medium transition-colors duration-300
                                ${isActive 
                                    ? 'text-orange-500 font-bold' 
                                    : 'text-gray-700 hover:text-orange-500'
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <Link to="/coffee">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
                        >
                            <Coffee size={18} />
                            <span>Buy me a Coffee</span>
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                    >
                        <Menu size={24} />
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 bg-white z-50 lg:hidden"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-2xl font-bold text-gray-900">Menu</span>
                                    <motion.button 
                                        whileTap={{ scale: 0.9 }}
                                        onClick={toggleMenu}
                                        className="text-gray-700"
                                    >
                                        <X size={24} />
                                    </motion.button>
                                </div>
                                <nav className="space-y-4">
                                    {menuItems.map((item) => (
                                        <NavLink
                                            key={item.name}
                                            to={item.href}
                                            onClick={toggleMenu}
                                            className={({ isActive }) => `
                                                block py-3 text-xl transition-colors duration-300
                                                ${isActive 
                                                    ? 'text-orange-500 font-bold' 
                                                    : 'text-gray-700 hover:text-orange-500'
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                    <Link 
                                        to="/coffee" 
                                        onClick={toggleMenu}
                                        className="block"
                                    >
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-full flex items-center justify-center space-x-3 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
                                        >
                                            <Coffee size={22} />
                                            <span className="text-lg">Buy me a Coffee</span>
                                        </motion.button>
                                    </Link>
                                </nav>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}