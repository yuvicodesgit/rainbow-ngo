"use client";

import { useRef, useState, useEffect } from 'react';

const activities = [
    { img: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: 'Oct 12, 2025', title: 'Community Kitchen', desc: 'Served over 500 meals this weekend.' },
    { img: 'https://images.unsplash.com/photo-1544367563-12123d832d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: 'Nov 05, 2025', title: 'Yoga for All', desc: 'Morning sessions creating calm minds.' },
    { img: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: 'Dec 01, 2025', title: 'Winter Clothing Drive', desc: 'Collecting warm clothes for the homeless.' },
    { img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: 'Jan 15, 2026', title: 'Beach Cleanup', desc: 'Keeping our shores clean and life safe.' },
    { img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: 'Feb 10, 2026', title: 'Meditation Camp', desc: 'Finding inner peace together.' },
];

export default function ActivitiesCarousel() {
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
                            {activities.map((activity, index) => (
                                <li key={index} className="carousel-slide">
                                    <div className="activity-card">
                                        <img src={activity.img} alt={activity.title} />
                                        <div className="activity-content">
                                            <span className="date">{activity.date}</span>
                                            <h4>{activity.title}</h4>
                                            <p>{activity.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
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
