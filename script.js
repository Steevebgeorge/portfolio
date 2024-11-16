const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const visibleItems = window.innerWidth <= 768 ? 1 : 2; // 1 item on small screens, 2 on large
    const offset = -currentIndex * (100 / visibleItems);
    carousel.style.transform = `translateX(${offset}%)`;
}

// Move to the next project
nextButton.addEventListener('click', function () {
    const visibleItems = window.innerWidth <= 768 ? 1 : 2;
    if (currentIndex < items.length - visibleItems) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first project
    }
    updateCarousel();
});

// Move to the previous project
prevButton.addEventListener('click', function () {
    const visibleItems = window.innerWidth <= 768 ? 1 : 2;
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - visibleItems; // Loop to the last project
    }
    updateCarousel();
});
