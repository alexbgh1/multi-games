// Components
import { ShuffleIcon } from "../icons";
// Utils

type SwapTurnProps = {
  changeTurn: () => void;
};

const SwapTurn = ({ changeTurn }: SwapTurnProps) => {
  return (
    <button onClick={changeTurn} className="mr-4">
      <ShuffleIcon className="w-6 h-6 fill-slate-300 " />
    </button>
  );
};

export default SwapTurn;
