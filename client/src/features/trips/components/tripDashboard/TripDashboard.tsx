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
    <section aria-labelledby="trip-dashboard-title">
      <h2
        id="trip-dashboard-title"
        className="sr-only"
      >
        Trip dashbaord
      </h2>

      <TripDashboardMenu
        activeTab={activeTab}
        onTabChange={handleChangeTab}
      />

      <div
        className={styles.tripDashboardWrapper}
        role="tabpanel"
        id={`${activeTab}-panel`}
        aria-labelledby={`${activeTab}-tab`}
        tabIndex={0}
      >
        {activeTab === "overview" && <TripOverview />}
      </div>
    </section>
  );
}

export default TripDashboard;
