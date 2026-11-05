import ButtonLink from "../../../../components/link/ButtonLink";
import { useAuthStore } from "../../../auth/stores/useAuthStore";

import styles from "./DashboardHeader.module.css";

function DashboardHeader() {
  const user = useAuthStore((state) => state.user);
  const firstName = user?.name.trim().split(/\s+/)[0];

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>Hi, {firstName ?? "there"}</h1>
        <p className={styles.text}>Your next adventure, all in one place.</p>
      </div>

      <ButtonLink variant="primary" to="/trips/create">
        Create trip
      </ButtonLink>
    </header>
  );
}

export default DashboardHeader;
