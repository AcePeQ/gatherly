import styles from "./TripDashboardMenu.module.css";
import { motion } from "motion/react";

const TRIP_DASHBOARD_MENU = [
  { value: "overview", label: "Overview" },
  { value: "itinerary", label: "Itinerary" },
  { value: "tasks", label: "Tasks" },
  { value: "expenses", label: "Expenses" },
  { value: "members", label: "Members" },
] as const;

export type DashboardMenuItem = (typeof TRIP_DASHBOARD_MENU)[number]["value"];

type TripDashboardMenuProps = {
  activeTab: DashboardMenuItem;
  onTabChange: (tab: DashboardMenuItem) => void;
};

function TripDashboardMenu({ activeTab, onTabChange }: TripDashboardMenuProps) {
  return (
    <div className={styles.menu}>
      <ul
        role="tablist"
        aria-label="Trip sections"
        className={styles.menuList}
      >
        {TRIP_DASHBOARD_MENU.map((tab) => {
          const isActive = tab.value === activeTab;

          return (
            <li
              key={tab.value}
              className={`${styles.listItem} ${isActive ? styles.active : ""}`}
            >
              <button
                type="button"
                onClick={() => onTabChange(tab.value)}
                className={styles.menuBtn}
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.value}-panel`}
                id={`${tab.value}-tab`}
              >
                {tab.label}
              </button>

              {isActive && (
                <motion.div
                  aria-hidden="true"
                  className={styles.underline}
                  layoutId="trip-dashboard-underline"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TripDashboardMenu;
