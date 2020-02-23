import React from 'react';
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const LinkRedirect = props => (
  <Link 
    className={`${styles.btn} ${styles[props.style]}`}
    to={props.target}
  >
    {props.label}
  </Link>
);

export default LinkRedirect;