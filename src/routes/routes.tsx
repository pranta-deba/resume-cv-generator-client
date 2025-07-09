import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
    ],
  },
]);
