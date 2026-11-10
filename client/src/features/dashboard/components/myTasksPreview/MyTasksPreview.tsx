import { useState } from "react";

import AppLink from "../../../../components/link/AppLink";
import Task from "../../../../components/task/Task";
import { taskPreviewsMock } from "../../mocks/taskPreviews";

import styles from "./MyTasksPreview.module.css";

function MyTasksPreview() {
  const [tasks, setTasks] = useState(taskPreviewsMock);

  function handleStatusChange(taskId: number, isDone: boolean) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, isDone } : task,
      ),
    );
  }

  console.log(tasks)

  return (
    <section className={styles.wrapper}>
      <hgroup>
        <h2 className={styles.title}>My tasks</h2>
        <p className={styles.subtitle}>A few things before you go</p>
      </hgroup>

      <ul className={styles.list}>
        {tasks.map((task) => (
          <li className={styles.listItem} key={task.id}>
            <Task
              title={task.title}
              tripName={task.tripName}
              deadline={task.deadline}
              isDone={task.isDone}
              onStatusChange={(isDone) =>
                handleStatusChange(task.id, isDone)
              }
            />
          </li>
        ))}
      </ul>

      <div className={styles.link}>
        <AppLink to="/tasks">View all tasks</AppLink>
      </div>
    </section>
  );
}

export default MyTasksPreview;
