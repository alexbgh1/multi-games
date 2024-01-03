import { TURNS, TURNS_COLORS } from "../../constants/TicTacToe/turns";
import { Square, Board, Turn, WinnerCondition } from "../../types/GameTicTacToe.type";

const initBoard = (): Board => Array(9).fill(null) as Board;
const changeTurn = (turn: Turn) => (turn === TURNS.X ? TURNS.O : TURNS.X);
const checkDraw = (newBoard: Board) => newBoard.every((square) => square !== null);

// Check if the current Square (using the index) is a winner position; This is used to add special color (className)
// It will return the element (Square: 'X' | 'O')
const isWinnerSquare = (element: Square, idx: number, winnerCondition: WinnerCondition): Square => {
  if (Array.isArray(winnerCondition) && winnerCondition.includes(idx)) {
    return element;
  }
  return null;
};

// Then we return different className based on the value ('X' or 'O')
const handleIsWinnerSquare = (isWinnerSquare: Square) => {
  const baseClassName = "TICTACTOE__animate-pulse-bounce";
  switch (isWinnerSquare) {
    case TURNS.X:
      return `${baseClassName} ${TURNS_COLORS.X}`;
    case TURNS.O:
      return `${baseClassName} ${TURNS_COLORS.O}`;
    default:
      return "";
  }
};

export { initBoard, changeTurn, checkDraw, isWinnerSquare, handleIsWinnerSquare };
