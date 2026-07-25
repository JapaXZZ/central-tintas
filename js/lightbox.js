document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox || !lightboxImg) return;

    // Open Lightbox
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = item.getAttribute('href');
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            lightbox.setAttribute('aria-hidden', 'false');
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Focus trap or close button focus
            closeBtn.focus();
        });
    });

    // Close Lightbox function
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300);
        document.body.style.overflow = '';
    };

    // Close on button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
});
