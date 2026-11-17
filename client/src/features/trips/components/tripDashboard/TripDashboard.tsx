import { useState } from "react";
import TripDashboardMenu, { type DashboardMenuItem } from "../tripDashboardMenu/TripDashboardMenu";
import styles from "./TripDashboard.module.css";
import TripOverview from "../tripOverview/TripOverview";

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

      <div className={styles.tripDashboardWrapper}>
        {activeTab === "overview" && <TripOverview />}
      </div>
    </section>
  );
}

export default TripDashboard;
