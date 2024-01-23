import { Board } from "../../types/GameSandSimulator.type.ts";

function createBoard(width: number, height: number) {
  const board = [];
  for (let i = 0; i < height; i++) {
    board.push(new Array(width).fill(0));
  }
  return board;
}

function addSand(currentBoard: Board, i: number, j: number) {
  const newBoard = [...currentBoard.map((row) => [...row])];
  newBoard[i][j] = 1;
  return newBoard;
}

function updateBoard(board: Board, newBoard: Board) {
  // i: row
  // j: column
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const state = board[i][j];

      // If the cell is sand
      if (state >= 1) {
        if (i + 1 < board.length) {
          // If the cell below is empty
          if (board[i + 1][j] === 0) {
            newBoard[i][j] = 0;
            newBoard[i + 1][j] = 1;
          }
          // If the cell below is sand && the cell to the left is empty
          else if (j - 1 >= 0 && board[i + 1][j - 1] === 0) {
            newBoard[i][j] = 0;
            newBoard[i + 1][j - 1] = 1;
          }
          // If the cell below is sand && the cell to the right is empty
          else if (j + 1 < row.length && board[i + 1][j + 1] === 0) {
            newBoard[i][j] = 0;
            newBoard[i + 1][j + 1] = 1;
          }
        }
      }
    }
  }
  return newBoard;
}

export { addSand, createBoard, updateBoard };
