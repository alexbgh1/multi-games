// Constants
import { TURNS, TURNS_COLORS } from "../../constants/TicTacToe/turns";
// Types
import { Turn, Winner } from "../../types/GameTicTacToe.type";

type WinnerProps = {
  winner?: Winner;
  turn: Turn;
  restartGame: () => void;
};

const Winner = ({ winner, turn, restartGame }: WinnerProps) => {
  return (
    <>
      {winner && (
        <>
          <WinnerModal turn={turn} restartGame={restartGame} />
        </>
      )}
    </>
  );
};

type WinnerModalProps = WinnerProps;

const WinnerModal = ({ turn, restartGame }: WinnerModalProps) => {
  let activeClass;
  if (turn === TURNS.X) activeClass = TURNS_COLORS.X;
  if (turn === TURNS.O) activeClass = TURNS_COLORS.O;
  return (
    // {/* Overlay Modal */}
    <div className="fade-in-150 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Inner Modal */}
      <article className="bg-gray-800 p-6 rounded-md w-72">
        <section className="text-3xl mb-6 text-balance flex items-center justify-center flex-row gap-4">
          <span className={`p-1 rounded-sm text-2xl font-bold ${activeClass}`}>{`${turn}`}</span>
          <h2>Wins!</h2>
        </section>
        <button
          className="border-2 border-gray-600 hover:bg-gray-900 text-gray-200 hover:text-white py-2 px-4 rounded-md mr-2 transition-colors duration-150"
          onClick={restartGame}
        >
          Restart Game
        </button>
      </article>
    </div>
  );
};

export default Winner;
