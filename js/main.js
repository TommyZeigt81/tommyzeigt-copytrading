
// Cursor Glow Effect
const cursor = document.querySelector('.cursor-light');
document.addEventListener('mousemove', e => {
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';
});

// Dynamic Performance Text Simulation
let performance = document.querySelector('.live-performance span');
let value = 12;

setInterval(() => {
value += (Math.random() - 0.4);
performance.innerText = value.toFixed(2) + '%';
}, 3000);
