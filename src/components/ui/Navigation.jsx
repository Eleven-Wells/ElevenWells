import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [hasScroll, setHasScroll] = useState(false);

    const sections = ['home', 'discover', 'featured', 'latest'];

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            // Add shadow on scroll
            setHasScroll(window.scrollY > 0);

            // Detect active section
            let current = 'home';
            for (const section of sections) {
                const el = document.querySelector(`#${section}`);
                if (el && el.getBoundingClientRect().top <= 100) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMobileLinkClick = (target) => {
        setIsOpen(false);
        setTimeout(() => {
            document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
    };

    const isLinkActive = (section) => activeSection === section;

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 bg-gray-50 border-b border-gray-200 z-50 transition-shadow duration-300 ${
                hasScroll ? 'shadow-md' : ''
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="shrink-0">
                            <span className="text-xl font-bold text-green-800">LUMEBLOG.</span>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex space-x-8">
                            {sections.map((section) => (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                                        isLinkActive(section)
                                            ? 'text-green-800 font-semibold'
                                            : 'text-gray-700 hover:text-gray-900'
                                    }`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                    {isLinkActive(section) && (
                                        <motion.div
                                            layoutId="underline"
                                            className="h-0.5 bg-green-800 mt-1"
                                            initial={false}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Subscribe Button (Desktop) */}
                        <div className="hidden md:block shrink-0">
                            <button className="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
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
                                animate={{ opacity: isOpen ? 0 : 1 }}
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
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
                        >
                            <div className="px-4 pt-2 pb-4 space-y-1">

                                {/* Mobile Links */}
                                {sections.map((section) => (
                                    <motion.a
                                        key={section}
                                        onClick={() => handleMobileLinkClick(`#${section}`)}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        href={`#${section}`}
                                        className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors duration-300 ${
                                            isLinkActive(section)
                                                ? 'bg-green-100 text-green-800 font-semibold'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </motion.a>
                                ))}

                                {/* Subscribe Button */}
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className="pt-2"
                                >
                                    <button className="w-full bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full text-base font-medium">
                                        Subscribe
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer to push content below fixed nav */}
            <div className="h-16" />
        </>
    );
}