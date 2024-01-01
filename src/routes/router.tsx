// Components
import App from "./home/App.tsx";
import GameTictac from "./juego-1/GameTictac.tsx";
import ErrorPage from "./error/error-page.tsx";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Utils
import { resolvePath } from "../utils/index.ts";

const router = createBrowserRouter([
  {
    path: resolvePath(""),
    element: <App />,
    children: [
      {
        path: resolvePath("/tic-tac"),
        element: <GameTictac />,
      },
      {
        path: resolvePath("/juego-2"),
        element: <GameTictac />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const RouterProviderExtension = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderExtension;
