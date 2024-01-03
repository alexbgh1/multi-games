import { TURNS, TURNS_COLORS } from "../../constants/TicTacToe/turns";
import { Turn } from "../../types/GameTicTacToe.type";

const CurrentTurn = ({ turn }: { turn: Turn }) => {
  return (
    <>
      <TurnSquare turn={turn} active={turn === TURNS.X}>
        {TURNS.X}
      </TurnSquare>
      <TurnSquare turn={turn} active={turn === TURNS.O}>
        {TURNS.O}
      </TurnSquare>
    </>
  );
};

type TurnSquareProps = {
  children: React.ReactNode;
  turn: Turn;
  active: boolean;
};

const TurnSquare = ({ children, turn, active }: TurnSquareProps) => {
  let activeClass;
  if (active && turn === TURNS.X) activeClass = TURNS_COLORS.X;
  if (active && turn === TURNS.O) activeClass = TURNS_COLORS.O;
  return (
    <div
      className={`
      shadow-inner shadow-slate-900
      border-x-0 border-y-[1px] border-slate-600 w-12 h-12 text-xl grid place-items-center ${activeClass}`}
    >
      {children}
    </div>
  );
};

export default CurrentTurn;
