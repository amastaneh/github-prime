// Foggy Background Effect
let lastX = 0;
let lastY = 0;
let ticking = false;

document.addEventListener('mousemove', function (e) {
    lastX = e.clientX;
    lastY = e.clientY;
    if (!ticking) {
        requestAnimationFrame(updateBackground);
        ticking = true;
    }
});

function updateBackground() {
    const x = lastX / window.innerWidth;
    const y = lastY / window.innerHeight;

    const darkBlue = `rgba(113, 141, 171, ${0.3 + y * 0.7})`; // Dark Blue: 718dab
    const lightBlue = `rgba(188, 207, 226, ${0.3 + x * 0.7})`; // Light Blue: bccfe2
    const lightBrown = `rgba(167, 143, 142, ${0.3 + (1 - x) * 0.7})`; // Light Brown: a78f8e

    document.querySelector('.bg-foggy').style.background = `
                radial-gradient(circle at ${x * 100}% ${y * 100}%, ${darkBlue}, transparent 70%),
                radial-gradient(circle at ${(1 - x) * 100}% ${(1 - y) * 100}%, ${lightBlue}, transparent 70%),
                radial-gradient(circle at ${(1 - y) * 100}% ${x * 100}%, ${lightBrown}, transparent 70%),
                linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))
            `;

    ticking = false;
}
