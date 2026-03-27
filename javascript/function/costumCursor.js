const cursor = document.querySelector('.custom-cursor');

// Start för smidigare rörelse med "lerp"-animation
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const speed = 0.15;

if (!cursor) {
  console.warn('Custom cursor not found!');
}
// Uppadatera mus positioner
document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

//Själva animationen
export function animateCursor() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  if (cursor) {
    cursor.style.left = currentX + 'px';
    cursor.style.top = currentY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
