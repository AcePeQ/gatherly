import { useState } from "react";

import Search from "../../../../components/search/Search";
import TripCard from "../../../../components/tripCard/TripCard";
import { tripCardMock } from "../../../dashboard/mocks/tripPreviews";
import type { TripStatus } from "../../types/tripStatus";
import TripsFilters from "../tripsFilters/TripsFilters";

import styles from "./TripsGallery.module.css";

function TripsGallery() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<TripStatus>("upcoming");

  function handleFilterClick(status: TripStatus) {
    setActiveFilter(status);
  }

  return (
    <section
      aria-labelledby="trips-gallery-title"
      className={styles.tripsSection}
    >
      <h2 id="trips-gallery-title" className="sr-only">
        Trips
      </h2>

      <div className={styles.searchWrapper}>
        <Search
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by trip name or place"
        />
      </div>

      <TripsFilters
        upcoming={0}
        ongoing={0}
        past={0}
        activeFilter={activeFilter}
        onFilterClick={handleFilterClick}
      />

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
  );
}

export default TripsGallery;
