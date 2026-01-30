"use client";

import { MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StickyCallBtn() {
    return (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 999 }}>

            {/* Contact Trigger */}
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass-panel"
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--color-accent-teal)',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-md)',
                    background: 'rgba(255, 255, 255, 0.8)'
                }}
                aria-label="Contact Us"
            >
                <MessageCircle size={24} />
            </motion.a>

            {/* Donate CTA */}
            <motion.a
                href="#donate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    backgroundColor: 'var(--color-accent-orange)',
                    color: 'white',
                    borderRadius: '50px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-lg)',
                    textDecoration: 'none'
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
                <Heart size={20} fill="currentColor" />
                <span style={{ fontSize: '1rem' }}>Donate</span>
            </motion.a>
        </div>
    );
}
