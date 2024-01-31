const container = document.querySelector("#container");
let square = 16 * 16;
for (let i = 1; i <= square; i++){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
}