import AppLink from '../../../../components/link/AppLink';
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
        <AppLink to="/tasks">View all tasks</AppLink>
      </div>
    </div>
  )
}

export default MyTasksPreview
