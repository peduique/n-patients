import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
}

export default Loading;