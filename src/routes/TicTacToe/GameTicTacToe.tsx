// React
import { useState } from "react";
// Components
import Square from "../../components/TicTacToe/Square";
import CurrentTurn from "../../components/TicTacToe/CurrentTurn";
import RestartGame from "../../components/TicTacToe/RestartGame";
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

  const restartGame = () => {
    setTurn(TURNS.X);
    setBoard(initBoard());
    setWinner(null);
    setWinnerCondition(null);
  };

  const updateBoard = (idx: number) => {
    const newBoard: Board = [...board];
    if (newBoard[idx] || winner) return; // Cannnot replace an already used Square

    // Replace Square & Change Turn
    newBoard[idx] = turn;

    // Set new values
    setBoard(newBoard);

    // After all movements, we check if there is a win condition
    for (const winnerCondition of WIN_CONDITIONS) {
      const [pos1, pos2, pos3] = winnerCondition;
      if (turn === newBoard[pos1] && turn === newBoard[pos2] && turn === newBoard[pos3]) {
        setWinner(true);
        setWinnerCondition(winnerCondition as WinnerCondition);
        return;
      }
    }
    if (checkDraw(newBoard)) setWinner(false);

    const newTurn = changeTurn(turn);
    setTurn(newTurn);
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
      <section className="flex items-center justify-center mt-8">
        {/* <SwapTurn turn={turn} /> */}
        <CurrentTurn turn={turn} />
        <RestartGame restartGame={restartGame} />
      </section>
    </main>
  );
};

export default GameTicTacToe;
