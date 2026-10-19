import styles from './Task.module.css';
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import Checkbox from '../checkbox/Checkbox';
import { useState } from 'react';
import { formatDate } from '../../utils/dateFormatters';

const TASK_DEADLINE = '2026-10-20';

function Task() {
  const [isDone, setIsDone] = useState(false)

  const handleChange = (isChecked: boolean) => {
    setIsDone(isChecked)
  }

  return (
    <article className={`${styles.task} ${isDone ? styles.isDone : ""}`}>
      <Checkbox
        ariaLabel='Mark "Book the apartment" as done'
        isChecked={isDone}
        onChange={handleChange}
      />

      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>Book the apartment</h3>
        <p className={styles.tripName}>
          <IoBriefcaseOutline aria-hidden="true" focusable="false" />
          Weekend in Gdansk
        </p>
      </div>

      <time className={styles.deadline} dateTime={TASK_DEADLINE}>
        <CiCalendar aria-hidden="true" focusable="false" />
        Due tomorrow
        <span className="sr-only">, {formatDate(TASK_DEADLINE)}</span>
      </time>
    </article>
  )
}

export default Task
