import Link from '../../../../components/link/Link';
import Task from '../../../../components/task/Task';
import styles from './MyTasksPreview.module.css';

function MyTasksPreview() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My tasks</h2>

      <ul className={styles.list}>
        <li className={styles.listItem}><Task /></li>
        <li className={styles.listItem}><Task /></li>
        <li className={styles.listItem}><Task /></li>
      </ul>

      <div className={styles.link}>
        <Link path='/tasks'>View all tasks</Link>
      </div>
    </div>
  )
}

export default MyTasksPreview