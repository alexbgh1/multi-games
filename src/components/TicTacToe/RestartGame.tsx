import { RestartIcon } from "../icons";

const RestartGame = ({ restartGame }: { restartGame: () => void }) => {
  return (
    <button className="ml-4" onClick={restartGame}>
      <RestartIcon className="w-6 h-6 fill-slate-300 " />
    </button>
  );
};

export default RestartGame;
