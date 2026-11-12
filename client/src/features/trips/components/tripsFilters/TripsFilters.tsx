import type { TripStatus } from "../../types/tripStatus";

import styles from "./TripsFilters.module.css";

type TripsFiltersProps = {
  upcoming: number;
  ongoing: number;
  past: number;
  activeFilter: TripStatus;
  onFilterClick: (status: TripStatus) => void;
};

type TripStatusItem = {
  id: TripStatus;
  label: string;
};

const TRIPS_STATUS: TripStatusItem[] = [
  {
    id: "upcoming",
    label: "Upcoming",
  },
  {
    id: "ongoing",
    label: "Ongoing",
  },
  {
    id: "past",
    label: "Past",
  },
];

function TripsFilters({
  upcoming,
  ongoing,
  past,
  activeFilter,
  onFilterClick,
}: TripsFiltersProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {TRIPS_STATUS.map((status) => {
          const statusCount =
            status.id === "upcoming"
              ? upcoming
              : status.id === "ongoing"
                ? ongoing
                : past;

          return (
            <li key={status.id}>
              <button
                aria-pressed={activeFilter === status.id}
                onClick={() => onFilterClick(status.id)}
                className={`${styles.statusBtn} ${activeFilter === status.id ? styles.activeFilter : ""}`}
              >
                {`${status.label} (${statusCount})`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TripsFilters;
