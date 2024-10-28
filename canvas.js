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

canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Redraw the background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = currentColor;
    ctx.beginPath();
    
    switch (currentTool) {
        case 'line':
            ctx.moveTo(startX, startY);
            ctx.lineTo(e.offsetX, e.offsetY);
            break;
        case 'rectangle':
            ctx.rect(startX, startY, e.offsetX - startX, e.offsetY - startY);
            break;
        case 'circle':
            const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
            ctx.arc(startX, startY, radius, 0, Math.PI * 2);
            break;
    }
    ctx.stroke();
});