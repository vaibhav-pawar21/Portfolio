// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger menu
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    
    // Properly handle body scroll locking
    if (sidebar.classList.contains('active')) {
        document.body.classList.add('sidebar-open');
    } else {
        document.body.classList.remove('sidebar-open');
    }
});

overlay.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove('sidebar-open');
});

// Close sidebar when clicking on a link
const sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove("active");
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove('sidebar-open');
    });
});

// Smooth scroll for all anchor links - fast and native
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple AOS-like animation implementation with smoother transitions
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                // Unobserve after animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Add parallax effect to profile picture (disabled for mobile stability)
window.addEventListener('scroll', () => {
    // Only apply parallax on desktop screens
    if (window.innerWidth > 1130) {
        const picBox = document.querySelector('.pic-box');
        const scrolled = window.pageYOffset;
        
        if (picBox) {
            const parallaxSpeed = 0.3;
            picBox.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }
});

// Add typing effect to name (optional enhancement)
const nameElement = document.getElementById('name');
if (nameElement) {
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    let charIndex = 0;
    
    const typeEffect = setInterval(() => {
        if (charIndex < originalText.length) {
            nameElement.textContent += originalText.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeEffect);
        }
    }, 100);
}

// Add mouse move effect to buttons
const buttons = document.querySelectorAll('#btn_1, #btn_2');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        button.style.setProperty('--mouse-x', `${x}px`);
        button.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add smooth tilt effect to skill cards
const talentCards = document.querySelectorAll('.talent');
talentCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
        card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        card.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
});

// Add smooth tilt effect to about section cards
const secCards = document.querySelectorAll('#sec');
secCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) translateX(5px)`;
        card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) translateX(0)';
        card.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
});

// Cursor trail effect (optional - can be commented out if not needed)
const createCursorTrail = () => {
    let lastX = 0, lastY = 0;
    let isMoving = false;
    
    document.addEventListener('mousemove', (e) => {
        if (!isMoving) {
            isMoving = true;
            lastX = e.clientX;
            lastY = e.clientY;
            
            setTimeout(() => {
                isMoving = false;
            }, 50);
        }
    });
};

// Initialize cursor trail (optional)
// createCursorTrail();

// Add scroll progress indicator
const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00c8ff, #00ffff);
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    `;
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        indicator.style.width = `${scrolled}%`;
    });
};

// Initialize scroll indicator
createScrollIndicator();

// Preloader (optional - add if needed)
window.addEventListener('load', () => {
    // Add any preloader fade out animation here if you add a preloader in HTML
    document.body.classList.add('loaded');
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-ele a, #sidebar a');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Add CSS for active link if not already in CSS
const style = document.createElement('style');
style.textContent = `
    .active-link {
        color: #00ffff !important;
    }
`;
document.head.appendChild(style);
