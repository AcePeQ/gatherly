import AppLink from "../../../components/link/AppLink";
import styles from "./Trip.module.css";

function Trip() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.breadcrumbs}>
          <AppLink to="/dashboard/trips">My Trips</AppLink>
          <span className={styles.separator}>/</span>
          <span className={styles.breadcrumbTripName}>Weekend in Gdańsk</span>
        </div>

        <h1 className={styles.title}>Weekend in Gdańsk</h1>
        <p className={styles.text}>Gdańsk, Poland, 23 - 25 Oct 2026</p>
      </header>
    </div>
  );
}

export default Trip;
