import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Main/Main";
import NotFound from "./components/pages/NotFound/NotFound";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
