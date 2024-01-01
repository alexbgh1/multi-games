// Router
import { Link } from "react-router-dom";
// Types
import { Game } from "../types/Games.type";
// Utils
import { resolvePath } from "../utils";

const GameCard = ({ game }: { game: Game }) => {
  "bg-blue-700 lg:col-span-4 col-span-5 relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden";
  "bg-blue-800 lg:col-span-6 col-span-5 relative rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10 overflow-hidden";
  const { nombre, className } = game;
  return (
    <Link className={`card ${className}`} to={resolvePath(game.link)}>
      <article className="card-content text-white bg-zinc-950">{nombre}</article>
    </Link>
  );
};

export default GameCard;
