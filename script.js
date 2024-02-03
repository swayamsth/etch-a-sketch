// Initialize grid
const container = document.querySelector("#container");
let maxGrid = 500;
let gridSize = 16;
let grid = gridSize * gridSize;

resetGrid();
createGrid(grid);
isBlack();

// Set hover state
function isBlack(){
    const hover = document.querySelectorAll(".grid");
    hover.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.classList.add("hover");
        })
    });
}

//Change Grid Size
const btn = document.querySelector(".btn");
btn.addEventListener('click', () => {
    gridSize = prompt("Enter Grid Size");
    if (gridSize <= 100){
        grid = gridSize * gridSize;
        resetGrid();
        createGrid(grid);
        isBlack();
    } else {
        alert("Maximum Limit Exceeded!")
    }
})

//Reset button
const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    resetGrid();
    createGrid(grid);
    isBlack();
})

//Create Grid func
function createGrid(grid){
    for (let i = 1; i <= grid; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
    container.style.setProperty('grid-template-columns',`repeat(${Math.sqrt(grid)}, ${maxGrid/Math.sqrt(grid)}px)`);
    container.style.setProperty('grid-template-rows',`repeat(${Math.sqrt(grid)}, ${maxGrid/Math.sqrt(grid)}px)`);
}

//Reset Grid func
function resetGrid(){
    const list = document.querySelectorAll(".grid");
    list.forEach(item => {
        item.remove();
    })
}

//Random Colors
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//console call
const randomColor = document.querySelector(".rgb");
randomColor.addEventListener('click', (e) => {
    isRainbow();
})

//rainbow mode
function isRainbow(){
    const hover = document.querySelectorAll(".grid");
    hover.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.classList.add("hover");
            e.target.style.backgroundColor = getRandomColor();
        })
    });
}