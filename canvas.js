// Get the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let currentTool = 'pencil';
let currentColor = document.getElementById('color').value;

// Set up the canvas with a background
ctx.fillStyle = '#f0f0f0';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Get the canvas element and context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let currentTool = 'line';
let currentColor = document.getElementById('color').value;
let startX, startY;

// Event listeners for mouse actions
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redraw
        ctx.fillStyle = currentColor;
        ctx.strokeStyle = currentColor;

        const width = e.offsetX - startX;
        const height = e.offsetY - startY;

        // Draw the selected shape dynamically
        if (currentTool === 'line') {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        } else if (currentTool === 'rectangle') {
            ctx.fillRect(startX, startY, width, height);
        } else if (currentTool === 'circle') {
            const radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
            ctx.beginPath();
            ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});
