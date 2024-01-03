// React
import { useState } from "react";
// Components
import Square from "../../components/TicTacToe/Square";
// Constants
import { TURNS } from "../../constants/TicTacToe/turns";
// Types
import { Board, Turn } from "../../types/GameTicTacToe.type";

const initBoard = (): Board => Array(9).fill(null) as Board;

const GameTicTacToe = () => {
  const [board, setBoard] = useState<Board>(initBoard());
  const [turn, setTurn] = useState<Turn>(TURNS.X);

  const changeTurn = (turn: Turn) => {
    console.log(turn);
    return turn === TURNS.X ? TURNS.O : TURNS.X;
  };

  const handleClick = (idx: number) => {
    const newBoard: Board = [...board];
    if (newBoard[idx] !== null) return; // Cannnot replace an already used Square

    // Replace Square & Change Turn
    newBoard[idx] = turn;
    const newTurn = changeTurn(turn);

    // Set new values
    setTurn(newTurn);
    setBoard(newBoard);

    // After all movements, we check if there is a win condition
  };
  return (
    <main className="w-fit text-center my-10 mx-auto">
      <h1 className="text-center text-3xl mb-6">TicTacToe</h1>
      <section className="grid grid-cols-[repeat(3,1fr)] gap-2 justify-items-center">
        {board.map((element, idx) => (
          <Square key={idx} element={element} idx={idx} handleClick={handleClick} />
        ))}
      </section>
    </main>
  );
};

export default GameTicTacToe;
