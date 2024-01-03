import { TURNS, TURNS_COLORS } from "../../constants/TicTacToe/turns";
import { Square } from "../../types/GameTicTacToe.type";
import "./Square.css";

type SquareC = {
  element: Square;
  idx: number;
  updateBoard: (idx: number) => void;
  isWinnerSquare: Square;
};

const handleIsWinnerSquare = (isWinnerSquare: Square) => {
  switch (isWinnerSquare) {
    case TURNS.X:
      return `TICTACTOE__animate-pulse ${TURNS_COLORS.X}`;
    case TURNS.O:
      return `TICTACTOE__animate-pulse ${TURNS_COLORS.O}`;
    default:
      return "";
  }
};

const Square = ({ element, idx, updateBoard, isWinnerSquare }: SquareC) => {
  return (
    <div
      onClick={() => updateBoard(idx)}
      className={`cursor-pointer w-24 h-24 text-3xl grid place-items-center rounded-sm border border-slate-600  ${handleIsWinnerSquare(
        isWinnerSquare
      )}`}
    >
      {element}
    </div>
  );
};

export default Square;
