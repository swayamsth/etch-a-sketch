// Initialize grid
const container = document.querySelector("#container");
let maxGrid = 240;
let gridSize = 16;
let grid = gridSize * gridSize;

resetGrid();
createGrid(grid);
hover();

// Set hover state
function hover(){
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
        hover();
    } else {
        alert("Maximum Limit Exceeded!")
    }
})

//Reset button
const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    resetGrid();
    createGrid(grid);
    hover();
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