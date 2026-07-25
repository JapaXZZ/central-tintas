document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                hamburger.style.backgroundColor = 'transparent';
                hamburger.style.setProperty('--pseudo-transform', 'rotate(45deg)');
            } else {
                hamburger.style.backgroundColor = 'var(--color-text)';
            }
        });
    }

    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                hamburger.style.backgroundColor = 'var(--color-text)';
            }
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id], footer[id]');
    
    function highlightLink() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const link = document.querySelector(`.nav-link[href*="${sectionId}"]`);
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                if(link) {
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightLink);

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all others
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current
            question.setAttribute('aria-expanded', !isExpanded);
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'var(--shadow-sm)';
        }
    });
});
