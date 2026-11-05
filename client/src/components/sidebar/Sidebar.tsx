import { Link } from "react-router";

import Logout from "../../features/auth/components/logout/Logout";
import Logo from "../logo/Logo";
import MainNavigation from "../mainNavigation/MainNavigation";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link aria-label="Go to dashboard" className={styles.logoLink} to="/dashboard">
        <Logo alt="" />
      </Link>

      <MainNavigation />
      <Logout />
    </aside>
  );
}

export default Sidebar;
