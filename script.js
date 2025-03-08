document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(15, 20, 25, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--primary-bg)';
            header.style.boxShadow = 'none';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typing Animation
    function startTypingAnimation() {
        const text = "Muhammad Kevin";
        const typingElement = document.querySelector('.typing-animation');
        let i = -1;
        
        function type() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        type();
        getElementById("name").innerHTML = typingElement
    }

    // Start typing animation after a delay
    setTimeout(startTypingAnimation, 1000);

    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .skill-item, .cert-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .cert-card');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();

    // Project Cards View More
    document.querySelectorAll('.view-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Add your view more functionality here
            alert('View More clicked!');
        });
    });

    // Certificate Card Flip
    document.querySelectorAll('.cert-card').forEach(card => {
        card.addEventListener('click', function() {
            this.querySelector('.cert-card-inner').style.transform = 
                this.querySelector('.cert-card-inner').style.transform === 'rotateY(180deg)' 
                    ? 'rotateY(0deg)' 
                    : 'rotateY(180deg)';
        });
    });
});