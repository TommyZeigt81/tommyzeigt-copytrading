
// Subtle animated candlestick-style line background

const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let points = [];
for(let i=0;i<120;i++){
points.push(canvas.height/2 + (Math.random()-0.5)*150);
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle = "rgba(242,201,76,0.8)";
ctx.lineWidth = 1.5;
ctx.beginPath();

let step = canvas.width / points.length;
ctx.moveTo(0, points[0]);

for(let i=1;i<points.length;i++){
ctx.lineTo(i*step, points[i]);
}

ctx.stroke();

points.shift();
let last = points[points.length-1];
points.push(last + (Math.random()-0.5)*40);

requestAnimationFrame(draw);
}

draw();
