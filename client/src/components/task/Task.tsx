import styles from './Task.module.css';
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";

function Task() {
  return (
    <article className={styles.task}>
      <div className={styles.checkboxWrapper}>
        BOXAD
      </div>

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