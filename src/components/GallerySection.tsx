"use client";

import { motion } from 'framer-motion';

// In the future, these images can be fetched from a WordPress API
// e.g., using the WP REST API to get media items.
const visibleImages = [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544367563-12123d832d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
];

export default function GallerySection() {
    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Moments</h2>
                    <div className="divider"></div>
                    <p className="section-subtitle">Glimpses of compassion in action.</p>
                </div>

                <div className="gallery-grid">
                    {visibleImages.map((src, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="gallery-img-wrapper">
                                <img src={src} alt={`Gallery Image ${index + 1}`} loading="lazy" />
                                <div className="gallery-overlay">
                                    <i className="fas fa-search-plus"></i>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Placeholder for future Load More / Pagination */}
                <div className="text-center" style={{ marginTop: '40px' }}>
                    <p style={{ fontSize: '0.9rem', color: '#9CA3AF', fontStyle: 'italic' }}>
                        *More memories available on our social channels.
                    </p>
                </div>
            </div>
        </section>
    );
}
