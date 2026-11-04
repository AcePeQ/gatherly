import { createBrowserRouter } from "react-router";

import DashboardLayout from "../components/layouts/dashboardLayout/DashboardLayout";
import Layout from "../components/layouts/layout/Layout";
import Auth from "./routes/auth/Auth";
import CheckMail from "./routes/checkMail/CheckMail";
import Dashboard from "./routes/dashboard/Dashboard";
import ErrorPage from "./routes/errorPage/ErrorPage";
import ForgotPassword from "./routes/forgotPassword/ForgotPassword";
import GuestOnly from "./routes/guestOnly/GuestOnly";
import NotFound from "./routes/notFound/NotFound";
import RequireAuth from "./routes/requireAuth/RequireAuth";
import ResetPassword from "./routes/resetPassword/ResetPassword";
import SuccessResetPassword from "./routes/successResetPassword/SuccessResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    ErrorBoundary: ErrorPage,
    children: [
      {
        Component: GuestOnly,
        children: [
          {
            Component: Layout,
            children: [{ index: true, Component: Auth }],
          },
          {
            children: [
              { path: "/forgot-password", Component: ForgotPassword },
              { path: "/forgot-password/check-email", Component: CheckMail },
              { path: "/reset-password", Component: ResetPassword },
              {
                path: "/reset-password/success",
                Component: SuccessResetPassword,
              },
            ],
          },
        ],
      },
      {
        Component: RequireAuth,
        children: [
          {
            path: "/dashboard",
            Component: DashboardLayout,
            children: [{ index: true, Component: Dashboard }],
          },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;
