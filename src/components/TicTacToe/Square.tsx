import { Square } from "../../types/GameTicTacToe.type";

const Square = ({
  element,
  idx,
  handleClick,
}: {
  element: Square;
  idx: number;
  handleClick: (idx: number) => void;
}) => {
  return (
    <button
      onClick={() => handleClick(idx)}
      className="w-24 h-24 text-3xl grid place-items-center rounded-sm border border-slate-600"
    >
      {element}
    </button>
  );
};

export default Square;
