const willBeAlive = (newGrid) => {
  for (let row = 0; row < newGrid.length; row++) {
    for (let column = 0; column < newGrid[row].length; column++) {
      newGrid[row][column].willBeAlive();
    }
  }
};

export default willBeAlive;
