class Cell {
  isAlive;
  rowNumber;
  columnNumber;
  aliveNeighbours;

  constructor(rowNumber, columnNumber) {
    this.rowNumber = rowNumber;
    this.columnNumber = columnNumber;
    this.isAlive = Boolean(Math.random() < 0.3);
    this.aliveNeighbours = 0;
  }

  findAliveNeighbours(newGrid) {
    let aliveNeighbours = 0;

    for (let i = this.rowNumber - 1; i <= this.rowNumber + 1; i++) {
      for (let j = this.columnNumber - 1; j <= this.columnNumber + 1; j++) {
        if (i >= 0 && i < newGrid.length && j >= 0 && j < newGrid[0].length) {
          if (
            newGrid[i][j].isAlive &&
            !(i === this.rowNumber && j === this.columnNumber)
          ) {
            aliveNeighbours++;
          }
        }
      }
    }

    this.aliveNeighbours = aliveNeighbours;
  }

  willBeAlive() {
    if (this.isAlive === true && this.numberOfNeighbours < 2) {
      this.isAlive = false;
    } else if (this.isAlive === true && this.numberOfNeighbours > 3) {
      this.isAlive = false;
    } else if (this.isAlive === false && this.numberOfNeighbours === 3) {
      this.isAlive = true;
    }
  }
}

export default Cell;
