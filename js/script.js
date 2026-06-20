
<script>
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
document.querySelectorAll('.product-img img, .gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src, this.alt);
    });
});

</script>