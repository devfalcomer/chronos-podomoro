import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export function CountDown() {
  const taskConext = useTaskContext();
  console.log(taskConext);

  return <div className={styles.container}></div>;
}
