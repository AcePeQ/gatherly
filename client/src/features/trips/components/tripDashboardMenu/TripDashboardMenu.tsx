import styles from "./TripDashboardMenu.module.css";
import { motion } from "motion/react";

const TRIP_DASHBOARD_MENU = ["Overview", "Itinerary", "Tasks", "Expenses", "Members"] as const;

export type DashboardMenuItem = Lowercase<(typeof TRIP_DASHBOARD_MENU)[number]>;

type TripDashboardMenuTripProps = {
  currentActiveTab: DashboardMenuItem;
  onClick: (btnValue: DashboardMenuItem) => void;
};

function TripDashboardMenu({ currentActiveTab, onClick }: TripDashboardMenuTripProps) {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        {TRIP_DASHBOARD_MENU.map((label) => {
          const normalizedLabel = label.toLowerCase() as DashboardMenuItem;

          return (
            <li
              key={normalizedLabel}
              className={`${styles.listItem} ${normalizedLabel === currentActiveTab ? styles.active : ""}`}
            >
              <button
                type="button"
                onClick={() => onClick(normalizedLabel)}
                className={styles.menuBtn}
              >
                {label}
              </button>

              {normalizedLabel === currentActiveTab && (
                <motion.div
                  className={styles.underline}
                  layoutId="underline-tripdashboard"
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
