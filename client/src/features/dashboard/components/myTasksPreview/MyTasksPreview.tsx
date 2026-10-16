import Link from '../../../../components/link/Link';
import styles from './MyTasksPreview.module.css';

function MyTasksPreview() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My tasks</h2>

      <div className={styles.link}>
        <Link path='/tasks'>View all tasks</Link>
      </div>
    </div>
  )
}

export default MyTasksPreview