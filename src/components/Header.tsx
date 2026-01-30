"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Objectives', href: '#objectives' },
        { name: 'Activities', href: '#activities' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo-area">
                    <img src="/logo.jpg" alt="Rainbow Dhamma Foundation Logo" className="logo" />
                    <div className="site-branding">
                        <h1 className="site-title">Rainbow Dhamma Foundation</h1>
                        <p className="site-subtitle">Compassion in Action</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="main-nav desktop-only">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="nav-link">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="#donate" className="btn btn-donate">
                        <Heart size={18} fill="currentColor" /> Donate
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mobile-menu-container glass-panel"
                            style={{
                                position: 'fixed',
                                top: '80px',
                                left: 0,
                                width: '100%',
                                height: 'calc(100vh - 80px)',
                                zIndex: 999,
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '2rem',
                                alignItems: 'center',
                                gap: '2rem'
                            }}
                        >
                            <ul className="mobile-nav-list" style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-primary)' }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="#donate"
                                className="btn btn-donate"
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                <Heart size={18} fill="currentColor" /> Donate Now
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
