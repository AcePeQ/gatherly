import { formatDate, formatDateRange } from '../../utils/dateFormatters';
import { CiCalendar } from "react-icons/ci";

import styles from './TripDateRange.module.css';

type TripDateRangeProps = {
  startDate: string;
  endDate: string;
}

function TripDateRange({ startDate, endDate }: TripDateRangeProps) {
  return (
    <p className={styles.date}>
      <CiCalendar aria-hidden="true" focusable="false" />
      <span aria-hidden="true">{formatDateRange(startDate, endDate)}</span>
      <span className="sr-only">
        <time dateTime={startDate}>{formatDate(startDate)}</time>
        {' to '}
        <time dateTime={endDate}>{formatDate(endDate)}</time>
      </span>
    </p>
  )
}

export default TripDateRange