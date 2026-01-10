import { useContext } from 'react';
import styles from './styles.module.css';
import { TaskContext } from '../../contexts/TaskContext';

export function CountDown() {
  const taskConext = useContext(TaskContext);
  console.log(taskConext);
  
  return (
    <div className={styles.container}></div>
  );
}
