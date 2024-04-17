import { createBrowserRouter } from "react-router-dom";

import { Root } from "../Route";
import { HomePage } from "../pages/Home";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginPage } from "../pages/Auth/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      /// Auth Routes
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
