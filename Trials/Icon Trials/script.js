function animateCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        circle.style.animationDelay = `${index * 0.2}s`; // Delay each circle animation
        circle.style.left = `${Math.random() * 300 - 150}px`; // Random horizontal position within rectangle
        circle.style.top = `${Math.random() * 200 - 100}px`; // Random vertical position within rectangle
    });
}
