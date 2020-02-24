import React from 'react';
import styles from 'pages/avaliations/Avaliations.module.scss';

const AvaliationItem = props => {
  return (
    <li className={styles.avaliationItem}>
      <p>{props.checkin.date_format}</p>
    </li>
  )
}

export default AvaliationItem;