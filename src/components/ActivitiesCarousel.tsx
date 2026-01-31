"use client";

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Event } from '@/lib/graphql';

interface ActivitiesCarouselProps {
    events: Event[];
}

export default function ActivitiesCarousel({ events }: ActivitiesCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowPrev(scrollLeft > 0);
            // Small buffer for float inaccuracies
            setShowNext(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            // Check initially
            checkScroll();
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScroll);
            }
        }
    }, []);

    if (!events || events.length === 0) {
        return null;
    }

    return (
        <section id="activities" className="section activities-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Ongoing Activities & News</h2>
                    <div className="divider"></div>
                </div>
                <div className="carousel-container">
                    <div className="carousel-track-container" ref={scrollContainerRef}>
                        <ul className="carousel-track">
                            {events.map((event, index) => {
                                const imgUrl = event.events?.eventBanner?.node?.sourceUrl || event.featuredImage?.node?.sourceUrl || '/placeholder.jpg';
                                const date = event.events?.eventDate ? new Date(event.events.eventDate).toLocaleDateString() : new Date(event.date).toLocaleDateString();
                                const desc = event.events?.eventDescription?.replace(/<[^>]+>/g, '').substring(0, 100) + '...' || '';

                                return (
                                    <li key={event.slug} className="carousel-slide">
                                        <Link href={`/events/${event.slug}`} className="activity-card-link">
                                            <div className="activity-card">
                                                <img src={imgUrl} alt={event.title} />
                                                <div className="activity-content">
                                                    <span className="date">{date}</span>
                                                    <h4>{event.title}</h4>
                                                    <p>{desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <button
                        className={`carousel-button carousel-button-left ${!showPrev ? 'is-hidden' : ''}`}
                        onClick={() => scroll('left')}
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                        className={`carousel-button carousel-button-right ${!showNext ? 'is-hidden' : ''}`}
                        onClick={() => scroll('right')}
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
