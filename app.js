document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  // Mobile Menu Toggle
  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Icon toggle (Bars to Times/X)
    const icon = hamburgerBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      navMenu.classList.remove('active');
      const icon = hamburgerBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. MOBILE NAVBAR TOGGLE =================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      const icon = hamburgerBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = hamburgerBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  // ================= 2. ROOMS SLIDER (SWIPER JS) =================
  const swiperElement = document.querySelector('.rooms-swiper');
  const nextButton = document.querySelector('.custom-next-btn');

  if (swiperElement) {
    const roomsSwiper = new Swiper('.rooms-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 24,
      loop: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: nextButton,
      },
      pagination: {
        el: '.custom-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.8,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 2.2,
          spaceBetween: 24,
        }
      }
    });

    const badgeBtns = document.querySelectorAll('.badge-btn');
    badgeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        roomsSwiper.slideNext();
      });
    });
  }

});


document.addEventListener('DOMContentLoaded', () => {

  // ================= GALLERY GRID DRAG & CENTER =================
  const galleryContainer = document.querySelector('.gallery-container');
  const galleryGrid = document.getElementById('galleryGrid');

  if (galleryContainer && galleryGrid) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Desktop Mouse Drag Functionality
    galleryGrid.addEventListener('mousedown', (e) => {
      isDown = true;
      galleryGrid.classList.add('active');
      startX = e.pageX - galleryGrid.offsetLeft;
      scrollLeft = galleryContainer.scrollLeft;
    });

    galleryGrid.addEventListener('mouseleave', () => {
      isDown = false;
      galleryGrid.classList.remove('active');
    });

    galleryGrid.addEventListener('mouseup', () => {
      isDown = false;
      galleryGrid.classList.remove('active');
    });

    galleryGrid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galleryGrid.offsetLeft;
      const walk = (x - startX) * 2;
      galleryContainer.scrollLeft = scrollLeft - walk;
    });

    // Auto-center gallery on Desktop load
    window.addEventListener('load', () => {
      if (window.innerWidth > 768) {
        const totalScroll = galleryGrid.scrollWidth - galleryContainer.clientWidth;
        galleryContainer.scrollLeft = totalScroll / 2;
      }
    });
  }

});