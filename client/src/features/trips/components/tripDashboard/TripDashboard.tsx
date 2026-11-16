import { useState } from "react";
import TripDashboardMenu, { type DashboardMenuItem } from "../tripDashboardMenu/TripDashboardMenu";
import styles from "./TripDashboard.module.css";

function TripDashboard() {
  const [activeTab, setActiveTab] = useState<DashboardMenuItem>("overview");

  function handleChangeTab(tab: DashboardMenuItem) {
    setActiveTab(tab);
  }

  return (
    <section className={styles.section}>
      <TripDashboardMenu
        currentActiveTab={activeTab}
        onClick={handleChangeTab}
      />
    </section>
  );
}

export default TripDashboard;
