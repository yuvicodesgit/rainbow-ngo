"use client";

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        title: 'Spreading Peace & Inclusivity',
        subtitle: 'Building a compassionate community for everyone.'
    },
    {
        image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        title: 'Empowering Lives',
        subtitle: 'The greatest gift is the gift of Dhamma.'
    },
    {
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        title: 'Join Our Mission',
        subtitle: 'Be part of the change you wish to see.'
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    // GSAP Animation on slide change
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
            );
            gsap.fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
            );
        }, contentRef);

        return () => ctx.revert();
    }, [currentSlide]);

    return (
        <section id="home" className="hero-section">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="hero-bg"
                    style={{
                        backgroundImage: `url('${slide.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        top: 0, left: 0,
                        opacity: index === currentSlide ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out',
                        zIndex: 0
                    }}
                />
            ))}

            <div className="hero-overlay" />

            <div className="container" style={{ position: 'relative', height: '100%', zIndex: 10 }}>
                <div className="hero-content" ref={contentRef}>
                    <span className="hero-kicker" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Welcome to Rainbow Dhamma</span>
                    <h2 ref={titleRef} className="hero-heading">
                        {slides[currentSlide].title}
                    </h2>
                    <p ref={subtitleRef} className="hero-desc">
                        {slides[currentSlide].subtitle}
                    </p>

                    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', opacity: 1 }}>
                        <button className="btn btn-donate">
                            Get Involved
                        </button>
                        <button className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                    width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 20, color: 'white', backdropFilter: 'blur(5px)'
                }}
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                    background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%',
                    width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 20, color: 'white', backdropFilter: 'blur(5px)'
                }}
            >
                <ChevronRight size={24} />
            </button>
        </section>
    );
}
