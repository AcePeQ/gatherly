import { Outlet } from "react-router";

import styles from "./Layout.module.css";
import BrandPanel from "../../brandPanel/BrandPanel";

function Layout() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <BrandPanel />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
