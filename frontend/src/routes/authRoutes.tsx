import { RouteObject } from "react-router-dom";
import {
  RegisterPage,
  LoginPage,
  PasswordResetPage,
  PasswordResetConfirmPage,
} from "../features/auth/pages";
import { AuthLayout } from "../features/auth/components/AuthLayout";

export const authRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/password-reset",
        element: <PasswordResetPage />,
      },
      {
        path: "/password-reset/confirm/:token",
        element: <PasswordResetConfirmPage />,
      },
    ],
  },
];
