// Reliable Room Slider Data Store
const roomSlides = [
  {
    id: 1,
    title: "Inner Peace",
    category: "01 — Bed Room",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Minimalist Living",
    category: "02 — Living Room",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Modern Dining",
    category: "03 — Dining Area",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: "Cozy Corner",
    category: "04 — Workspace",
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

let currentSlideIndex = 0;

function renderRoomSlider() {
  const listContainer = document.querySelector('.products-slider-list');
  const dotsContainers = document.querySelectorAll('.dots');

  if (!listContainer) return;

  // 1. Render Slides (Aapki CSS me .room-slide aur .active-slide classes define hain)
  listContainer.innerHTML = roomSlides.map((slide, index) => {
    const isActive = index === currentSlideIndex ? 'active-slide' : '';
    return `
      <div class="room-slide ${isActive}" data-index="${index}">
        <img src="${slide.image}" alt="${slide.title}" class="room-img" />
        <div class="room-overlay">
          <div class="room-details">
            <span class="room-cat">${slide.category}</span>
            <h3 class="room-title">${slide.title}</h3>
          </div>
          <button class="room-arrow-btn">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Slide track transition
  listContainer.style.transform = `translateX(-${currentSlideIndex * 424}px)`;

  // 2. Render Dots (Aapki CSS .dots li.active class ko target karti hai)
  const dotsHTML = roomSlides.map((_, index) => {
    const isActive = index === currentSlideIndex ? 'active' : '';
    return `<li class="${isActive}" data-index="${index}"></li>`;
  }).join('');

  dotsContainers.forEach(container => {
    container.innerHTML = dotsHTML;
  });

  // Attach Dot Click Handler
  document.querySelectorAll('.dots li').forEach(dot => {
    dot.addEventListener('click', (e) => {
      currentSlideIndex = parseInt(e.target.getAttribute('data-index'));
      renderRoomSlider();
    });
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % roomSlides.length;
  renderRoomSlider();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + roomSlides.length) % roomSlides.length;
  renderRoomSlider();
}

// Global Event Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderRoomSlider();

  const nextBtn = document.querySelector('.products-slider-next-slide');
  const prevBtn = document.querySelector('.products-slider-prev-slide');

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
});// 400px (slide width) + 24px (gap) = 424px exact shift per click
  const slideWidth = 424; 
  listContainer.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;