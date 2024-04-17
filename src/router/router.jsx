import { createBrowserRouter } from "react-router-dom";

import { Root } from "../Root";
import { AuthLayout, DashboardLayout } from "../layouts";
import { LoginPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      /// Dashboard Routes
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [],
      },

      /// Auth Routes
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
