import type { FilterStatus } from '../tripsGallery/TripsGallery';
import styles from './TripsFilters.module.css';

type TripsFiltersProps = {
  upcoming: number;
  onGoing: number;
  past: number;
  activeFilter: FilterStatus;
  onFilterClick: (status: FilterStatus) => void;
}

type TripStatusItem = {
  id: FilterStatus
  label: string;
}

const TRIPS_STATUS: TripStatusItem[] = [
  {
    id: "upcoming",
    label: "Upcoming"
  },
  {
    id: "onGoing",
    label: "On Going"
  },
  {
    id: "past",
    label: "Past"
  }
]

function TripsFilters({ upcoming, onGoing, past, activeFilter, onFilterClick }: TripsFiltersProps) {
  return (
    <div className={styles.wrapper}>
      <ul>
        {TRIPS_STATUS.map(status => {
          const statusCount = status.id === "upcoming" ? upcoming : status.id === "onGoing" ? onGoing : past;

          return (
            <li key={status.id}>
              <button onClick={() => onFilterClick(status.id)} className={`${styles.statusBtn} ${activeFilter === status.id ? styles.activeFilter : null}`}>
                {`${status.label} (${statusCount})`}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TripsFilters