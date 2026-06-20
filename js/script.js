// Get the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.lightbox-close');

// Function to open lightbox
function openLightbox(imageSrc, altText) {
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = altText || 'Image';
    lightbox.style.display = 'flex';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Close when clicking the (X)
closeBtn.addEventListener('click', closeLightbox);

// Close when clicking the dark overlay (outside the image)
lightbox.addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close when pressing the ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});

// ---------- Attach lightbox to all product images ----------
// This assumes your product images have a class like 'product-img' or you can target them differently.
// Example 1: If you have images with class "product-image"
document.querySelectorAll('.product-img img, .gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src, this.alt);
    });
});

// Example 2: If you use a generic selector, you can use this instead:
// document.querySelectorAll('img[data-lightbox]').forEach(img => {
//     img.addEventListener('click', function() {
//         openLightbox(this.dataset.lightbox, this.alt);
//     });
// });