import { TURNS, TURNS_COLORS } from "../../constants/TicTacToe/turns";
import { LS_BOARD, LS_TURN, LS_WINNER, LS_WINNER_CONDITION } from "../../constants/TicTacToe/localStorage";
import { Square, Board, Turn, WinnerCondition } from "../../types/GameTicTacToe.type";

// Extra

// LS Stored Elements
const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

const setLocalStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const resetLS = () => {
  localStorage.removeItem(LS_BOARD);
  localStorage.removeItem(LS_TURN);
  localStorage.removeItem(LS_WINNER);
  localStorage.removeItem(LS_WINNER_CONDITION);
};

// General functions

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

export {
  resetLS,
  getLocalStorageItem,
  setLocalStorageItem,
  initBoard,
  changeTurn,
  checkDraw,
  isWinnerSquare,
  handleIsWinnerSquare,
};
