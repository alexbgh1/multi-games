// React
import { useState, useEffect } from "react";
// Utils
import { resolvePath } from "../utils";
// Types
import { Game } from "../types/Games.type.ts";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const fetchJSONGames = async () => {
      const res = await fetch(resolvePath("/data/games.json"));
      const data = await res.json();
      setGames(data);
    };

    fetchJSONGames();
  }, []);
  return { games, setGames };
};

export { useGames };
