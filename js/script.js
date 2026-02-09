// ===========================
// Smooth Scroll Navigation
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Smooth scroll to section
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    function updateActiveNavLink() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Check if we're near the bottom of the page
        const isNearBottom = (window.scrollY + windowHeight) >= (documentHeight - 50);
        
        // If near bottom, activate the last section
        if (isNearBottom) {
            currentSection = sections[sections.length - 1].getAttribute('id');
        } else {
            // Otherwise, find the section currently in view
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                // Check if scroll position is within this section
                // Use a more generous range for the last section
                if (scrollPosition >= sectionTop - 200) {
                    currentSection = section.getAttribute('id');
                }
            });
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').substring(1); // Remove #
            
            if (linkHref === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttle scroll event for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            updateActiveNavLink();
        });
    });
    
    // Initial check on page load
    updateActiveNavLink();
});

// ===========================
// Fade-in Animation on Scroll
// ===========================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(card);
    });
});

// ===========================
// External Link Tracking (optional)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track external link clicks (can integrate with analytics)
            console.log('External link clicked:', this.href);
        });
    });
});

// ===========================
// Email Link Tracking (optional)
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track email link clicks (can integrate with analytics)
            console.log('Email link clicked:', this.href);
        });
    });
});
