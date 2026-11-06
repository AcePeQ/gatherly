import styles from './Task.module.css';
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

  const taskClassName = [
    styles.task,
    isDone ? styles.done : null,
  ].filter(Boolean).join(" ")

  return (
    <article className={taskClassName}>
      <Checkbox aria-label='' checked={isDone} onChange={(e) => handleChange(e.target.checked)} />

      <div className={styles.content}>
        <h3 className={styles.title}>Book the apartment</h3>
        <p className={styles.tripName}>
          Weekend in Gdansk
        </p>
      </div>

      {isDone &&
        <p className={styles.deadline}>
          Done
        </p>
      }

      {!isDone &&
        <time className={styles.deadline} dateTime={TASK_DEADLINE}>
          <CiCalendar aria-hidden="true" focusable="false" />
          {formatDate(TASK_DEADLINE)}
          <span className="sr-only">, {formatDate(TASK_DEADLINE)}</span>
        </time>
      }
    </article>
  )
}

export default Task
