const printGrid = (rows, columns) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let column = 0; column < columns; column++) {
      grid[row][column] = {};
    }
  }

  return grid;
};

export default printGrid;
