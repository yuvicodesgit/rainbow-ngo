document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Hero Slider ---
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentSlide = 0;
    const slideIntervalProp = 5000; // 5 seconds

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if(slides.length > 0) {
        // Event Listeners
        if(nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
        
        if(prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        // Auto play
        let slideInterval = setInterval(nextSlide, slideIntervalProp);

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, slideIntervalProp);
        }
    }

    // --- Activities Carousel ---
    const track = document.querySelector('.carousel-track');
    // Using a more robust scrolling approach for variable width content
    const carouselContainer = document.querySelector('.carousel-track-container');
    const prevCarouselBtn = document.querySelector('.carousel-button-left');
    const nextCarouselBtn = document.querySelector('.carousel-button-right');

    if (track && carouselContainer) {
        const scrollAmount = 320; // Approximately one card width + margin

        nextCarouselBtn.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevCarouselBtn.addEventListener('click', () => {
            carouselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // Optional: Hide/Show arrow buttons based on scroll position
        carouselContainer.addEventListener('scroll', () => {
            const maxScrollLeft = carouselContainer.scrollWidth - carouselContainer.clientWidth;
            
            if (carouselContainer.scrollLeft <= 0) {
                prevCarouselBtn.classList.add('is-hidden');
            } else {
                prevCarouselBtn.classList.remove('is-hidden');
            }

            // Using a small buffer (1px) for float calculation errors
            if (carouselContainer.scrollLeft >= maxScrollLeft - 1) {
                nextCarouselBtn.classList.add('is-hidden');
            } else {
                nextCarouselBtn.classList.remove('is-hidden');
            }
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }

                const headerOffset = 80; // approximate header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
