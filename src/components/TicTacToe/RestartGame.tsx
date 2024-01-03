// Components
import { RestartIcon } from "../icons";

type RestartGameProps = {
  restartGame: () => void;
};

const RestartGame = ({ restartGame }: RestartGameProps) => {
  return (
    <button className="ml-4" onClick={restartGame}>
      <RestartIcon className="w-6 h-6 fill-gray-400 hover:fill-gray-100 ease-in-out duration-150  " />
    </button>
  );
};

export default RestartGame;
