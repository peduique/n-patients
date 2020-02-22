import React from 'react';
import styles from './Button.module.scss';


const Button = props => (
  <button className={`${styles.btn} ${styles[props.style]}`}>{props.label}</button>
);

export default Button;