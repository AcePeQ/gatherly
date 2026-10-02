import { createBrowserRouter } from "react-router";
import Layout from "../components/layouts/layout/Layout";
import DashboardLayout from "../components/layouts/dashboardLayout/DashboardLayout";
import Auth from "./routes/auth/Auth";
import Dashboard from "./routes/dashboard/Dashboard";
import NotFound from "./routes/notFound/NotFound";
import ForgotPassword from "./routes/forgotPassword/ForgotPassword"
import ResetPassword from "./routes/resetPassword/ResetPassword";
import CheckMail from "./routes/checkMail/CheckMail";
import SuccessResetPassword from "./routes/successResetPassword/SuccessResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: Auth },
          { path: "/forgot-password", Component: ForgotPassword },
          { path: "/forgot-password/check-email", Component: CheckMail },
          { path: "/reset-password", Component: ResetPassword },
          { path: "/reset-password/success", Component: SuccessResetPassword },
          { path: "*", Component: NotFound }
        ]
      },
      {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
          { index: true, Component: Dashboard }
        ]
      },
    ]
  },

])



export default router
