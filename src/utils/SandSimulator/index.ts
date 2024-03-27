import { Board } from "../../types/GameSandSimulator.type.ts";
import { NumberRange } from "../../types/GameSandSimulator.type.ts";

function createBoard(width: number, height: number) {
  const board = [];
  for (let i = 0; i < height; i++) {
    board.push(new Array(width).fill(0));
  }
  return board;
}

function addSand(currentBoard: Board, i: number, j: number, value: NumberRange) {
  const newBoard = [...currentBoard.map((row) => [...row])];
  newBoard[i][j] = value;
  return newBoard;
}

enum CellMaterial {
  Empty = 0,
  Sand = 1,
  SandSlip = 2,
  Water = 3,
  Mud = 4,
}

function updateBoard(board: Board, newBoard: Board) {
  // i: row
  // j: column
  // 0: empty; 1: sand; 2: sand slip; 3: water
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const state = board[i][j];

      // If the cell is sand
      if (state === CellMaterial.Sand || state === CellMaterial.SandSlip) {
        if (i + 1 < board.length) {
          // If the cell below is empty
          if (board[i + 1][j] === 0) {
            newBoard[i][j] = CellMaterial.Empty;
            newBoard[i + 1][j] = CellMaterial.Sand;
          }
          // If the cell below is sand && the cell to the left is empty
          else if (j - 1 >= 0 && board[i + 1][j - 1] === 0) {
            newBoard[i][j] = CellMaterial.Empty;
            newBoard[i + 1][j - 1] = CellMaterial.SandSlip;
          }
          // If the cell below is sand && the cell to the right is empty
          else if (j + 1 < row.length && board[i + 1][j + 1] === 0) {
            newBoard[i][j] = CellMaterial.Empty;
            newBoard[i + 1][j + 1] = CellMaterial.SandSlip;
          }
        }
      } else if (state === CellMaterial.Water) {
        // If water 'touches' the sand, it becomes mud in single cell
        if (i + 1 < board.length && board[i + 1][j] === CellMaterial.Sand) {
          newBoard[i][j] = CellMaterial.Empty;
          newBoard[i + 1][j] = CellMaterial.Mud;
        }

        // Water will try to go down first
        if (i + 1 < board.length && board[i + 1][j] === CellMaterial.Empty) {
          newBoard[i][j] = CellMaterial.Empty;
          newBoard[i + 1][j] = CellMaterial.Water;
        } else {
          // If water can't go down, it tries to go sideways
          if (j - 1 >= 0 && board[i][j - 1] === CellMaterial.Empty) {
            newBoard[i][j] = CellMaterial.Empty;
            newBoard[i][j - 1] = CellMaterial.Water;
          } else if (j + 1 < row.length && board[i][j + 1] === CellMaterial.Empty) {
            newBoard[i][j] = CellMaterial.Empty;
            newBoard[i][j + 1] = CellMaterial.Water;
          }
        }
      }
    }
  }
  return newBoard;
}

export { addSand, createBoard, updateBoard };
