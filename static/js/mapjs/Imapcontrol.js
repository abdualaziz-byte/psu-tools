
const map = document.getElementById("map");
const mapContent = document.getElementById("mapContent");


let zoom = 0.7;
const minZoom = 0.5;
const maxZoom = 3;
const zoomStep = 0.1;
let offsetX = 120;
let offsetY = 90;

let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;
map.addEventListener("wheel", function(event) {

    event.preventDefault();

    const rect = map.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    console.log(mouseX, mouseY);
  const oldZoom = zoom;

if (event.deltaY < 0) {
    zoom += zoomStep;
} else {
    zoom -= zoomStep;
}
zoom = Math.max(minZoom, Math.min(maxZoom, zoom));
const zoomRatio = zoom / oldZoom;
offsetX = mouseX - (mouseX - offsetX) * zoomRatio;
offsetY = mouseY - (mouseY - offsetY) * zoomRatio;


    mapContent.setAttribute(
 "transform",
    `translate(${offsetX}, ${offsetY}) scale(${zoom})`


    );
});
map.addEventListener("mousedown", function(event) {
    isDragging = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
});

map.addEventListener("mousemove", function(event) {
    if (!isDragging) return;

    const dx = event.clientX - lastMouseX;
    const dy = event.clientY - lastMouseY;

    offsetX += dx;
    offsetY += dy;

    lastMouseX = event.clientX;
    lastMouseY = event.clientY;

    mapContent.setAttribute(
        "transform",
        `translate(${offsetX}, ${offsetY}) scale(${zoom})`
    );
});

map.addEventListener("mouseup", function() {
    isDragging = false;
});

mapContent.setAttribute(
    "transform",
    `translate(${offsetX}, ${offsetY}) scale(${zoom})`,
  
);
   offsetX = 0;
 offsetY = 0;