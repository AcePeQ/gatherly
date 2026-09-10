import { createBrowserRouter } from "react-router";
import Layout from "../components/layouts/layout/Layout";
import DashboardLayout from "../components/layouts/dashboardLayout/DashboardLayout";
import Auth from "./routes/Auth";
import Dashboard from "./routes/Dashboard";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        Component: Layout,
        children: [
          { index: true, Component: Auth }
        ]
      },
      {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
          { index: true, Component: Dashboard }
        ]
      }
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
])



export default router