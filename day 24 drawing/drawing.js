// The HTMLCanvasElement.getContext() method returns a drawing context on 
// the canvas, or null if the context identifier is not supported,
//  or the canvas has already been set to a different context mode.

//https://www.w3schools.com/tags/canvas_arc.asp

// The window.requestAnimationFrame() method tells the browser that you wish
//  to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The
//  method takes a callback as an argument to be invoked before the repaint.

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext('2d');

const increaseBtn =  document.getElementById("increase");
const decreaseBtn =  document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");

let size = 30;
let isPressed =  false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

colorElement.addEventListener("change", (e) => {
    color = e.target.value;
    // console.log(color);
});


canvas.addEventListener("mousemove", (e) => {
    // console.log(e);
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        
        drawLine(x, y, x2, y2);
        drawCircle(x2, y2);
        x = x2;
        y = y2;
    }
  
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
increaseBtn.addEventListener("click", () => {
    size += 5;

    if(size > 50) {
        size = 50;
    }
    updateScreenOnSize ();
});

decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if(size <= 5) {
        size = 5;
    }
    updateScreenOnSize ();
});

function updateScreenOnSize (){
    sizeElement.innerText = size;
}


clearElement.addEventListener("click", () => {
    //clear canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);
});


// function draw() {
//     //clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x,y);

//     requestAnimationFrame(draw);
// }

// draw();