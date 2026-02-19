
document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll(".metric").forEach(counter => {
    const target = parseFloat(counter.dataset.target);
    let count = 0;
    const step = target / 120;

    function update() {
        count += step;
        if (count < target) {
            counter.innerText = count.toFixed(1);
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    }
    update();
});

const canvas = document.getElementById("bgChart");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let points = [];
for (let i = 0; i < 60; i++) {
    points.push(Math.random() * canvas.height);
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255,215,0,0.08)";
    ctx.lineWidth = 2;

    for (let i = 0; i < points.length; i++) {
        const x = i * (canvas.width / points.length);
        const y = points[i];
        if (i === 0) ctx.moveTo(x,y);
        else ctx.lineTo(x,y);
        points[i] += (Math.random() - 0.5) * 4;
    }

    ctx.stroke();
    requestAnimationFrame(draw);
}

draw();

});
