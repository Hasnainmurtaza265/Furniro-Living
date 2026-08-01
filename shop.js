document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. GRID / LIST VIEW TOGGLE =================
  const viewIcons = document.querySelectorAll('.view-icons i');
  const productsGrid = document.querySelector('.products-grid');

  if (viewIcons.length > 0 && productsGrid) {
    viewIcons.forEach((icon, index) => {
      icon.addEventListener('click', () => {
        // Remove active class from all icons
        viewIcons.forEach(i => i.classList.remove('active-view'));
        // Add active class to clicked icon
        icon.classList.add('active-view');

        // Index 0 = Grid View, Index 1 = List View
        if (index === 1) {
          productsGrid.classList.add('list-view');
        } else {
          productsGrid.classList.remove('list-view');
        }
      });
    });
  }

  // ================= 2. PAGINATION ACTIVE STATE =================
  const pageBtns = document.querySelectorAll('.page-btn');

  if (pageBtns.length > 0) {
    pageBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Prevent default action if button is inside a form
        e.preventDefault();

        if (btn.classList.contains('next')) {
          // Handle 'Next' button click logic here
          const activeBtn = document.querySelector('.page-btn.active');
          if (activeBtn && activeBtn.nextElementSibling && !activeBtn.nextElementSibling.classList.contains('next')) {
            activeBtn.classList.remove('active');
            activeBtn.nextElementSibling.classList.add('active');
          }
        } else {
          // Handle number button click
          pageBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }

        // Scroll smoothly to top of products on page change
        const productsSection = document.querySelector('.shop-products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // ================= 3. FILTER / SORT LOGIC (DUMMY/PREVIEW) =================
  const sortSelect = document.querySelector('.sort-select');
  const showInput = document.querySelector('.show-input');

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      console.log(`Sorting products by: ${e.target.value}`);
      // Yahan aap backend / array filtering logic add kar sakte hain
    });
  }

  if (showInput) {
    showInput.addEventListener('change', (e) => {
      console.log(`Show count changed to: ${e.target.value}`);
    });
  }

});