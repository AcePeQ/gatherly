import { Outlet } from "react-router";

import homepageBackground from "../../../assets/images/backgrounds/homepageBg.png";
import Logo from "../../logo/Logo";

import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className="container">
      <div className={styles.authPage}>
        <section className={`${styles.brandPanel} wrapper-padding`}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <hgroup className={styles.leftTitleGroup}>
            <h1>
              <span>Less planning chaos.</span>
              <span>More shared memories.</span>
            </h1>
            <p>Trips, people and plans.</p>
            <p>All together in one place.</p>
          </hgroup>

          <img
            className={styles.heroIllustration}
            src={homepageBackground}
            alt=""
          />

          <p className={styles.captionText}>Gatherly / Your next chapter</p>
        </section>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
