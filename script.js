const container = document.querySelector("#container");
let gridSize = 16;
let grid = gridSize * gridSize;

createGrid(grid);

const hover = document.querySelectorAll(".grid");
hover.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.classList.add("hover");
    })
});

function createGrid(grid){
    for (let i = 1; i <= grid; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
}