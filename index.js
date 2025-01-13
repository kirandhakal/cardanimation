const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
let isScrolling = false;
let currentPosition = 0;

// Initial setup
updateCardPositions();

// Simulate scroll with mouse wheel
window.addEventListener('wheel', (e) => {
    if (!isScrolling) {
        isScrolling = true;
        
        if (e.deltaY > 0) {
            // Scroll down
            currentPosition = (currentPosition + 1) % 3;
        } else {
            // Scroll up
            currentPosition = (currentPosition - 1 + 3) % 3;
        }
        
        updateCardPositions();
        
        setTimeout(() => {
            isScrolling = false;
        }, 500);
    }
});

function updateCardPositions() {
    cards.forEach((card, index) => {
        let position = (index - currentPosition + 3) % 3;
        card.style.transform = `translateY(${(position - 1) * 100}%)`;
        
        // Remove middle class from all cards
        card.classList.remove('middle');
        
        // Add middle class to the centered card
        if (position === 1) {
            card.classList.add('middle');
        }
    });
}