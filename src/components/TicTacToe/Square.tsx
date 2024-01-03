// CSS
import "./Square.css";
// Types
import { Square } from "../../types/GameTicTacToe.type";
// Utils
import { handleIsWinnerSquare } from "../../utils/TicTacToe";

type SquareProps = {
  element: Square;
  idx: number;
  updateBoard: (idx: number) => void;
  isWinnerSquare: Square;
};

const Square = ({ element, idx, updateBoard, isWinnerSquare }: SquareProps) => {
  return (
    <div
      onClick={() => updateBoard(idx)}
      className={`cursor-pointer w-24 h-24 text-3xl grid place-items-center rounded-sm border border-gray-600  ${handleIsWinnerSquare(
        isWinnerSquare
      )}`}
    >
      {element}
    </div>
  );
};

export default Square;
