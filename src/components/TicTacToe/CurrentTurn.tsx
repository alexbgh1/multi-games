import { TURNS } from "../../constants/TicTacToe/turns";
import { Turn } from "../../types/GameTicTacToe.type";

const CurrentTurn = ({ turn }: { turn: Turn }) => {
  return <div>{turn}</div>;
};

export default CurrentTurn;
