// React
import { useState } from "react";
// Components
import Square from "../../components/TicTacToe/Square";
import CurrentTurn from "../../components/TicTacToe/CurrentTurn";
// Constants
import { TURNS } from "../../constants/TicTacToe/turns";
import { WIN_CONDITIONS } from "../../constants/TicTacToe/winCondition";
// Types
import { Board, Turn, Winner, WinnerCondition } from "../../types/GameTicTacToe.type";
// Utils
import { initBoard, changeTurn, checkDraw, isWinnerSquare } from "../../utils/TicTacToe";

const GameTicTacToe = () => {
  const [board, setBoard] = useState<Board>(initBoard());
  const [turn, setTurn] = useState<Turn>(TURNS.X);
  const [winner, setWinner] = useState<Winner>(null);
  const [winnerCondition, setWinnerCondition] = useState<WinnerCondition>(null);

  const updateBoard = (idx: number) => {
    const newBoard: Board = [...board];
    if (newBoard[idx] || winner) return; // Cannnot replace an already used Square

    // Replace Square & Change Turn
    newBoard[idx] = turn;
    const newTurn = changeTurn(turn);

    // Set new values
    setTurn(newTurn);
    setBoard(newBoard);

    // After all movements, we check if there is a win condition
    for (const winnerCondition of WIN_CONDITIONS) {
      const [pos1, pos2, pos3] = winnerCondition;
      if (turn === newBoard[pos1] && turn === newBoard[pos2] && turn === newBoard[pos3]) {
        setWinner(true);
        setWinnerCondition(winnerCondition as WinnerCondition);
      }
    }
    if (checkDraw(newBoard)) setWinner(false);
  };

  return (
    <main className="w-fit text-center my-10 mx-auto">
      <h1 className="text-center text-3xl mb-6">TicTacToe</h1>
      <section className="grid grid-cols-[repeat(3,1fr)] gap-2 justify-items-center">
        {board.map((element, idx) => (
          <Square
            key={idx}
            element={element}
            idx={idx}
            updateBoard={updateBoard}
            isWinnerSquare={isWinnerSquare(element, idx, winnerCondition)}
          />
        ))}
      </section>
      <CurrentTurn turn={turn} />
    </main>
  );
};

export default GameTicTacToe;
