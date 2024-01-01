// Components
import App from "./home/App.tsx";
import ErrorPage from "./error/error-page.tsx";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Utils
import { resolvePath } from "../utils/index.ts";

const router = createBrowserRouter([
  {
    path: resolvePath("/"),
    element: <App />,
    children: [
      {
        path: resolvePath("/juego-1"),
        element: <App />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const RouterProviderExtension = () => {
  return <RouterProvider router={router} />;
};

export default RouterProviderExtension;
