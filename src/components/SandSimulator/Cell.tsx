// Constants
import { SAND_STATE } from "../../constants/SandSimulator/sandState.ts";
// Types
import { NumberRange } from "../../types/GameSandSimulator.type.ts";
// Styles
import "./Cell.css";

interface CellProps {
  cell: NumberRange;
  handleClick: () => void;
}
const Cell = ({ cell, handleClick }: CellProps) => {
  //TODO: Fix type cell
  const currentState = SAND_STATE[cell];
  return <div onClick={handleClick} className={`w-4 h-4 ${currentState}`}></div>;
};

export default Cell;
