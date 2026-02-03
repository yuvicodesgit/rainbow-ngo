"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryImage } from '@/lib/graphql';
import GalleryLightbox from './GalleryLightbox';

interface BlogGalleryProps {
    images: GalleryImage[];
}

export default function BlogGallery({ images }: BlogGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="blog-gallery-section">
            <h3 className="blog-gallery-title">Image Gallery</h3>
            <div className="blog-gallery-grid">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="blog-gallery-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        onClick={() => openLightbox(index)}
                    >
                        <div className="blog-gallery-img-wrapper">
                            <img
                                src={image.sourceUrl}
                                alt={image.altText || `Gallery image ${index + 1}`}
                                loading="lazy"
                            />
                            <div className="blog-gallery-overlay">
                                <i className="fas fa-expand"></i>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {lightboxOpen && (
                <GalleryLightbox
                    images={images}
                    currentIndex={currentIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </div>
    );
}
