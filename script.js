const container = document.querySelector("#container");
for (let i = 1; i <= 16; i++){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    container.appendChild(grid);
    // for (let j = 1; i <= 16; j++){
    //     const gridCol = document.createElement("div");
    //     grid.classList.add("grid");
    //     grid.appendChild(gridCol);
    // }
}