import { useState } from 'react';
import Search from '../../../../components/search/Search';
import styles from './TripsGallery.module.css';
import TripsFilters from '../tripsFilters/TripsFilters';
import TripCard from '../../../../components/tripCard/TripCard';
import { tripCardMock } from '../../../dashboard/mocks/tripPreviews';

export type FilterStatus = "upcoming" | "onGoing" | "past"

function TripsGallery() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("upcoming")

  function handleFilterClick(status: FilterStatus) {
    setActiveFilter(status)
  }

  return (
    <section className={styles.tripsSection}>
      <div className={styles.searchWrapper}>
        <Search value={query} onChange={(event) => setQuery(event.target.value)} placeholder='Search by trip name or place' />
      </div>

      <TripsFilters upcoming={0} onGoing={0} past={0} activeFilter={activeFilter} onFilterClick={handleFilterClick} />

      <div className={styles.tripsWrapper}>
        <ul className={styles.tripsList}>
          <li className={styles.tripsItem}>
            <TripCard {...tripCardMock} />
          </li>
          <li className={styles.tripsItem}>
            <TripCard {...tripCardMock} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TripsGallery