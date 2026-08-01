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


// STATIC NAV BAR!

// Dynamic Navbar HTML Definition
const navbarHTML = `
  <header class="navbar">
    <div class="nav-container">
      <a href="index.html" class="logo">
        <img src="https://raw.githubusercontent.com/TajammalMaqbool/Furniro-E-commerce-Website/main/images/logo.png" alt="Furniro Logo" onerror="this.style.display='none'">
        <span>Furniro</span>
      </a>
      <nav class="nav-links" id="navMenu">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li> <!-- Shop page link -->
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div class="nav-icons">
        <a href="#"><i class="fa-regular fa-user"></i></a>
        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href="#"><i class="fa-regular fa-heart"></i></a>
        <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
      </div>
      <button class="hamburger" id="hamburgerBtn">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>
`;

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC HEADER INJECTION
  const headerContainer = document.getElementById('dynamic-header');
  if (headerContainer) {
    headerContainer.innerHTML = navbarHTML;
  }

  // 2. ACTIVE NAV LINK HIGHLIGHT
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. MOBILE HAMBURGER TOGGLE
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // 4. HOME PAGE BUTTONS TO SHOP REDIRECT (JS HANDLE)
  // "Show More" Button Listener
  const showMoreBtns = document.querySelectorAll('.show-more-btn, .outline-btn');
  showMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'shop.html';
    });
  });

  // "BUY NOW" Hero Button Listener
  const buyNowBtns = document.querySelectorAll('.buy-now-btn, .primary-btn');
  buyNowBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'shop.html';
    });
  });
});
   