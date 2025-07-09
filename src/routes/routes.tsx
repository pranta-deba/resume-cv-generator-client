import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/root";
import Home from "@/pages/home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
