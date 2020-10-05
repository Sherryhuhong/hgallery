import React from 'react';
import styles from './index.module.scss';

export default function PageLoading() {
  return (
    <div className={styles.loading}>
      <i className="fas fa-circle-notch fa-spin"></i>
    </div>
  );
}
