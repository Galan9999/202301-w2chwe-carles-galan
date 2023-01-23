import createGrid from "./createGrid.js";
import numberOfNeighbours from "./numberOfNeighbours.js";
import willBeAlive from "./willBeAlive.js";

const newGrid = createGrid(10, 10);
createGrid(newGrid);
numberOfNeighbours(newGrid);
console.table(newGrid);
willBeAlive(newGrid);
console.table(newGrid);
