import React from 'react';
import styles from './Button.module.scss';

const Button = props => (
  <button 
    className={`${styles.btn} ${styles[props.style]}`}
    type={props.type}
  >
    {props.label}
  </button>
);

export default Button;