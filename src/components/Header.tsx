"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

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
        setOpenSubMenu(null); // Reset submenus when toggling main menu
    };

    const toggleSubMenu = (name: string) => {
        if (openSubMenu === name) {
            setOpenSubMenu(null);
        } else {
            setOpenSubMenu(name);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        {
            name: 'Blog',
            href: '#',
            subItems: [
                { name: 'English', href: '/blogs/english' },
                { name: 'Assamese', href: '/blogs/assamese' },
                { name: 'Bengali', href: '/blogs/bengali' },
                { name: 'Hindi', href: '/blogs/hindi' },
            ]
        },
        { name: 'Activities', href: '/#activities' },
        { name: 'Gallery', href: '/#gallery' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header className={`main-header ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo-area">
                    <img src="/logo.jpg" alt="Rainbow Dhamma Foundation Logo" className="logo" />
                    <div className="site-branding">
                        <h1 className="site-title">Rainbow Dhamma Foundation</h1>
                        <p className="site-subtitle">Humanity in Action</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="main-nav desktop-only">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name} className={link.subItems ? 'has-dropdown' : ''}>
                                <Link
                                    href={link.href}
                                    className="nav-link"
                                    onClick={(e) => link.subItems && e.preventDefault()}
                                >
                                    {link.name}
                                    {link.subItems && <ChevronDown size={14} className="dropdown-icon" />}
                                </Link>
                                {link.subItems && (
                                    <ul className="dropdown-menu">
                                        {link.subItems.map((subLink) => (
                                            <li key={subLink.name}>
                                                <Link href={subLink.href} className="dropdown-link">
                                                    {subLink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
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
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100vh',
                                zIndex: 999,
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '80px 2rem 2rem',
                                alignItems: 'center',
                                gap: '2rem',
                                overflowY: 'auto',
                                background: 'white' // Ensure it covers the page fully as requested
                            }}
                        >
                            <ul className="mobile-nav-list" style={{ listStyle: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                                {navLinks.map((link) => (
                                    <li key={link.name} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {link.subItems ? (
                                            <>
                                                <button
                                                    onClick={() => toggleSubMenu(link.name)}
                                                    style={{
                                                        fontSize: '1.5rem',
                                                        fontWeight: 600,
                                                        color: 'var(--color-text-primary)',
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    {link.name}
                                                    <motion.div
                                                        animate={{ rotate: openSubMenu === link.name ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronDown size={20} />
                                                    </motion.div>
                                                </button>
                                                <AnimatePresence>
                                                    {openSubMenu === link.name && (
                                                        <motion.ul
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', overflow: 'hidden' }}
                                                        >
                                                            {link.subItems.map((subLink) => (
                                                                <li key={subLink.name}>
                                                                    <Link
                                                                        href={subLink.href}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}
                                                                    >
                                                                        {subLink.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text-primary)' }}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
