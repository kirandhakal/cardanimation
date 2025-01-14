const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
let isScrolling = false;
let currentPosition = 0;

//  for mouse movement
let isDragging = false;
let startY = 0;
let endY = 0;

updateCardPositions();

//scrooll with mouse wheel
window.addEventListener('wheel', (e) => {
    handleScroll(e.deltaY > 0);
});

// Add mouse interaction 
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY; 
});

window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        endY = e.clientY; 
    }
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        const deltaY = startY - endY;

        if (Math.abs(deltaY) > 50) {
            // Dragged enough to consider it a scroll
            handleScroll(deltaY > 0); 
        }
    }
});

function handleScroll(isScrollDown) {
    if (!isScrolling) {
        isScrolling = true;

        if (isScrollDown) {
            
            currentPosition = (currentPosition + 1) % 3;
        } else {
         
            currentPosition = (currentPosition - 1 + 3) % 3;
        }

        updateCardPositions();

        setTimeout(() => {
            isScrolling = false;
        }, 500); 
    }
}

function updateCardPositions() {
    cards.forEach((card, index) => {
        let position = (index - currentPosition + 3) % 3;
        card.style.transform = `translateY(${(position - 1) * 100}%)`;

      
        card.classList.remove('middle');
        if (position === 1) {
            card.classList.add('middle');
        }
    });
}
