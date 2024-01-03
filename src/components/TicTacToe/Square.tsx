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
  const baseClassName = "TICTACTOE__animate-pulse TICTACTOE__animate-bounce";
  switch (isWinnerSquare) {
    case TURNS.X:
      return `${baseClassName} ${TURNS_COLORS.X}`;
    case TURNS.O:
      return `${baseClassName} ${TURNS_COLORS.O}`;
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
