import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <span className="text-xl font-bold text-green-800">LUMEBLOG.</span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Discover
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Featured
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Latest Posts
                        </a>
                    </div>

                    {/* Subscribe Button - Desktop */}
                    <div className="hidden md:block shrink-0">
                        <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">
                            Subscribe
                        </button>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-gray-900 block"
                        />
                        <motion.span
                            animate={{
                                opacity: isOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                            className="w-6 h-0.5 bg-gray-900 block"
                        />
                        <motion.span
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-0.5 bg-gray-900 block"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            <motion.a
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                href="#"
                                className="block px-3 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-base font-medium"
                            >
                                Home
                            </motion.a>
                            <motion.a
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.15 }}
                                href="#"
                                className="block px-3 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-base font-medium"
                            >
                                Discover
                            </motion.a>
                            <motion.a
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                href="#"
                                className="block px-3 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-base font-medium"
                            >
                                Featured
                            </motion.a>
                            <motion.a
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                href="#"
                                className="block px-3 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg text-base font-medium"
                            >
                                Latest Posts
                            </motion.a>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="pt-2"
                            >
                                <button className="w-full bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full text-base font-medium transition-colors">
                                    Subscribe
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}