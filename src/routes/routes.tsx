import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/root";
import Home from "@/pages/home";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Dashboard from "@/pages/dashboard";
import Templates from "@/pages/templates";
import Builder from "@/pages/builder";
import Preview from "@/pages/preview";
import ProtectedRoute from "./protected";

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
      {
        path: "templates",
        element: <Templates />,
      },
      {
        path: "preview",
        element: <Preview />,
      },
      {
        path: "builder",
        element: (
          <ProtectedRoute>
            <Builder />
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
