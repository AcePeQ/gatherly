import styles from './Task.module.css';
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import Checkbox from '../checkbox/Checkbox';
import { useState } from 'react';

function Task() {
  const [isDone, setIsDone] = useState(false)

  const handleChange = () => {
    setIsDone(prev => !prev)
  }

  return (
    <article className={styles.task}>
      <Checkbox isChecked={isDone} onChange={handleChange} />

      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>Book the appartment</h3>
        <p className={styles.tripName}>
          <IoBriefcaseOutline />
          Weekend in Gdansk
        </p>
      </div>

      <p className={styles.deadline}>
        <CiCalendar />
        Due tomorrow
      </p>
    </article>
  )
}

export default Task