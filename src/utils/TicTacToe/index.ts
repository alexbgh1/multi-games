import { TURNS } from "../../constants/TicTacToe/turns";
import { Square, Board, Turn, WinnerCondition } from "../../types/GameTicTacToe.type";

const initBoard = (): Board => Array(9).fill(null) as Board;
const changeTurn = (turn: Turn) => (turn === TURNS.X ? TURNS.O : TURNS.X);
const checkDraw = (newBoard: Board) => newBoard.every((square) => square !== null);
const isWinnerSquare = (element: Square, idx: number, winnerCondition: WinnerCondition): Square => {
  if (Array.isArray(winnerCondition) && winnerCondition.includes(idx)) {
    return element;
  }
  return null;
};

export { initBoard, changeTurn, checkDraw, isWinnerSquare };
