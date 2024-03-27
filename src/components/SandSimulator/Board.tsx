// React
import { useEffect } from "react";
// Components
import Cell from "./Cell";
// Utils
import { updateBoard, addSand } from "../../utils/SandSimulator";
// Types
import { Board, NumberRange } from "../../types/GameSandSimulator.type.ts";

interface BoardProps {
  board: Board;
  setBoard: React.Dispatch<React.SetStateAction<Board>>;
}
const GameBoard = ({ board, setBoard }: BoardProps) => {
  const handleClick = (currentBoard: Board, i: number, j: number, value: NumberRange) => {
    setBoard(addSand(currentBoard, i, j, value));
  };

  // Timer to update the board
  useEffect(() => {
    const interval = setInterval(() => {
      const newBoard = [...board.map((row) => [...row])];
      const finalBoard = updateBoard(board, newBoard);
      setBoard(finalBoard);
    }, 10);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  return (
    <>
      {board.map((row, i) => (
        <div key={i} className="flex flex-row">
          {row.map((cell, j) => (
            <Cell key={j} cell={cell} handleClick={() => handleClick(board, i, j, 3)} />
          ))}
        </div>
      ))}
    </>
  );
};

export default GameBoard;
