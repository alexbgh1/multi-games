// Components
import MainContent from "./MainContent";
import NavOutlet from "./NavOutlet";
// Routing
import { useLocation } from "react-router-dom";
// Utils
import { resolvePath } from "../../utils";

function App() {
  const location = useLocation();

  // Condición para mostrar la sección de juegos solo en la ruta principal
  const showGamesSection = location.pathname === resolvePath("/");
  return <>{showGamesSection ? <MainContent /> : <NavOutlet />}</>;
}

export default App;
