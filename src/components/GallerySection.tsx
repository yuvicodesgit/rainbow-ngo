"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Gallery, GalleryImage } from '@/lib/graphql';
import GalleryLightbox from './GalleryLightbox';

interface GallerySectionProps {
    galleries: Gallery[];
}

export default function GallerySection({ galleries }: GallerySectionProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<GalleryImage[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (images: GalleryImage[], index: number) => {
        setCurrentImages(images);
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? currentImages.length - 1 : prev - 1
        );
    };

    // Handle loading state
    if (!galleries) {
        return (
            <section id="gallery" className="section gallery-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Moments</h2>
                        <div className="divider"></div>
                        <p className="section-subtitle">Loading galleries...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Handle empty state
    if (galleries.length === 0) {
        return (
            <section id="gallery" className="section gallery-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Moments</h2>
                        <div className="divider"></div>
                        <p className="section-subtitle">No galleries available at the moment.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Moments</h2>
                    <div className="divider"></div>
                    <p className="section-subtitle">Glimpses of compassion in action.</p>
                </div>

                {galleries.map((gallery, galleryIndex) => {
                    const imageData = gallery.galleryDetails?.galleryImages;

                    // Skip galleries with no image
                    if (!imageData?.node) return null;

                    const image = imageData.node;

                    return (
                        <div key={gallery.id} className="gallery-collection">
                            <h3 className="gallery-title">{gallery.title}</h3>

                            <div className="gallery-grid">
                                <motion.div
                                    className="gallery-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: galleryIndex * 0.05 }}
                                    viewport={{ once: true }}
                                    onClick={() => openLightbox([image], 0)}
                                >
                                    <div className="gallery-img-wrapper">
                                        <img
                                            src={image.sourceUrl}
                                            alt={image.altText || `${gallery.title}`}
                                            loading="lazy"
                                        />
                                        <div className="gallery-overlay">
                                            <i className="fas fa-search-plus"></i>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {lightboxOpen && (
                <GalleryLightbox
                    images={currentImages}
                    currentIndex={currentImageIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </section>
    );
}
