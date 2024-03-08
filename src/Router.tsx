import { createBrowserRouter } from "react-router-dom";
import Main from "./components/pages/Main/Main";
import NotFound from "./components/pages/NotFound/NotFound";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
