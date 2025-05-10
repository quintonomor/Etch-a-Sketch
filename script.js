const container = document.querySelector('#container');
const button = document.querySelector("#resize");

function createGrid(sideLength) {
    container.innerHTML = '';
    const totalSquares = sideLength ** 2;

    for (let i = 0; i < totalSquares; i++) {
        const cell = document.createElement('div');
        cell.classList.add('gridCell');
        const cellSize = 640 / sideLength;  // or whatever your container’s pixel width is
        cell.style.width  = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});
button.addEventListener("click", () => {
    const input = prompt('Enter new grid size (max 100):');
    const newSize = parseInt(input, 10);
  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
})

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains('gridCell')) {
        event.target.classList.add('hover');
      }
})