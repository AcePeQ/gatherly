import { CiCalendar } from "react-icons/ci";

import { formatDate } from "../../utils/dateFormatters";
import Checkbox from "../checkbox/Checkbox";

import styles from "./Task.module.css";

type TaskProps = {
  title: string;
  tripName: string;
  deadline: string;
  isDone: boolean;
  onStatusChange: (isDone: boolean) => void;
};

function Task({
  title,
  tripName,
  deadline,
  isDone,
  onStatusChange,
}: TaskProps) {
  const taskClassName = [styles.task, isDone ? styles.done : null]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={taskClassName}>
      <Checkbox
        aria-label={title}
        checked={isDone}
        onChange={(event) => onStatusChange(event.target.checked)}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tripName}>{tripName}</p>
      </div>

      {isDone && <p className={styles.deadline}>Done</p>}

      {!isDone && (
        <time className={styles.deadline} dateTime={deadline}>
          <CiCalendar aria-hidden="true" focusable="false" />
          {formatDate(deadline)}
        </time>
      )}
    </article>
  );
}

export default Task;
