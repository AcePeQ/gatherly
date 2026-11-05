import { Outlet } from "react-router";

import Sidebar from "../../sidebar/Sidebar";

import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  return (
    <div className={`${styles.wrapper} container`}>
      <Sidebar />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
