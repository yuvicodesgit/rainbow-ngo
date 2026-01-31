"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '@/lib/graphql';

interface GalleryLightboxProps {
    images: GalleryImage[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function GalleryLightbox({
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev
}: GalleryLightboxProps) {
    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const currentImage = images[currentIndex];

    return (
        <AnimatePresence>
            <motion.div
                className="lightbox-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                    <i className="fas fa-times"></i>
                </button>

                <motion.div
                    className="lightbox-content"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={currentImage.sourceUrl}
                        alt={currentImage.altText || 'Gallery image'}
                    />
                </motion.div>

                {images.length > 1 && (
                    <>
                        <button
                            className="lightbox-nav lightbox-nav-prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrev();
                            }}
                            aria-label="Previous image"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <button
                            className="lightbox-nav lightbox-nav-next"
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                            aria-label="Next image"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </>
                )}

                <div className="lightbox-counter">
                    {currentIndex + 1} / {images.length}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
