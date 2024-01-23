// React
import { useRef } from "react";
// Components
import GameCard from "../../components/GameCard";
// Hooks
import { useGames } from "../../hooks/useGames";
const MainContent = () => {
  const { games } = useGames();
  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const wrapper = wrapperRef.current;
    const cards = wrapper?.querySelectorAll(".card");

    cards?.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (card instanceof HTMLElement) {
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      }
    });
  }
  return (
    <main>
      <section
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        className="cards w-full max-w-[1400px] grid lg:grid-cols-10 auto-rows-[20rem] gap-4 mx-auto p-6 md:p-12 lg:p-16"
      >
        {games.map((game) => (
          <GameCard key={game.nombre} game={game} />
        ))}
      </section>
    </main>
  );
};

export default MainContent;
