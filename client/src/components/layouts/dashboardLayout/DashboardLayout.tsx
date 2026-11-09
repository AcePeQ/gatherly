import { Outlet } from "react-router";

import Sidebar from "../../sidebar/Sidebar";

import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  return (
    <div className={`${styles.wrapper} container`}>
      <Sidebar />

      <main id="main-content" className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
