// Components
import App from "./pages/home/App.tsx";
import GameTicTacToe from "./pages/TicTacToe/GameTicTacToe.tsx";
import GameSandSimulator from "./pages/SandSimulator/GameSandSimulator.tsx";
import ErrorPage from "./pages/error/error-page.tsx";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Utils
import { resolvePath } from "./utils/index.ts";

const router = createBrowserRouter([
  {
    path: resolvePath(""),
    element: <App />,
    children: [
      {
        path: resolvePath("/tic-tac-toe"),
        element: <GameTicTacToe />,
      },
      {
        path: resolvePath("/sand-simulator"),
        element: <GameSandSimulator />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const RouterProviderExtension = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderExtension;
