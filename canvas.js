//Gets the canvas element and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//Sets up the canvas by drawing a background
ctx.fillStyle = '#f0f0f0';  
ctx.fillRect(0, 0, canvas.width, canvas.height);  

let drawing = false;
let currentTool = 'line';
let currentColor = document.getElementById('color').value;
let startX, startY;

//Event listeners for mouse actions
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

