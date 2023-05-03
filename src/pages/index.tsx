import { useState } from 'react';
import styles from '../styles/Index.module.css'

const IndexPage = () => {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count - 1);
  };
  const plus = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className={styles.container}>
      <div className={styles.count}>{count}</div>
      <div className={styles.buttons}>
        <button onClick={minus}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export default IndexPage;
