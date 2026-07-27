// Broadway Gems — gem detail page gallery + lightbox
document.addEventListener('DOMContentLoaded', function () {
  var mainImage = document.getElementById('mainImage');
  var thumbs = document.querySelectorAll('.gem-thumbs button');
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  var closeBtn = document.querySelector('.lightbox-close');

  thumbs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = btn.getAttribute('data-src');
      var alt = btn.getAttribute('data-alt') || '';
      if (!src || !mainImage) return;
      mainImage.classList.add('is-swapping');
      setTimeout(function () {
        mainImage.src = src;
        mainImage.alt = alt;
        mainImage.classList.remove('is-swapping');
      }, 180);
      thumbs.forEach(function (t) { t.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  function openLightbox() {
    if (!lightbox || !mainImage) return;
    lightboxImg.src = mainImage.src;
    lightboxImg.alt = mainImage.alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (mainImage) mainImage.addEventListener('click', openLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
