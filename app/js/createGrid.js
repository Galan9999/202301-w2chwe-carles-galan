import Cell from "./Cell/Cell.js";
const createGrid = (totalRows, totalColumns) => {
  const grid = [];
  for (let row = 0; row < totalRows; row++) {
    grid[row] = [];
    for (let column = 0; column < totalColumns; column++) {
      grid[row][column] = new Cell(row, column);
    }
  }

  return grid;
};

export default createGrid;
