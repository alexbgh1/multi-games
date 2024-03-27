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
    <main className="w-fit text-center my-10 mx-auto">
      <h1 className="text-center text-3xl mb-6">Sand Simulator</h1>
      <div className="flex flex-col items-center justify-center border border-gray-600 rounded-sm shadow-gray-600">
        <GameBoard board={board} setBoard={setBoard} />
      </div>
    </main>
  );
};

export default GameSandSimulator;
