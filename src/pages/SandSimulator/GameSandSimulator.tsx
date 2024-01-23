// React
import { useState } from "react";
// Components
import GameBoard from "../../components/SandSimulator/Board.tsx";
// Utils
import { createBoard } from "../../utils/SandSimulator";
// Types
import { Board } from "../../types/GameSandSimulator.type.ts";
// Constants
import { BOARD_SIZE } from "../../constants/SandSimulator/boardSize.ts";

const GameSandSimulator = () => {
  const [board, setBoard] = useState<Board>(createBoard(BOARD_SIZE.w, BOARD_SIZE.h));

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center">
        <GameBoard board={board} setBoard={setBoard} />
      </div>
    </div>
  );
};

export default GameSandSimulator;
