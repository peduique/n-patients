import React from 'react';
import styles from './Menu.module.scss';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/plans" className={styles.menuItem}>
          <i className={`${styles.menuItemIcon} icon-meal`}></i>
        </Link>
      </li>
      <li>
        <Link to="/teste" className={styles.menuItem}>
          <i className={`${styles.menuItemIcon} icon-body`}></i>
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className={styles.menuItem}>
          <i className={`${styles.menuItemIcon} icon-home`}></i>
        </Link>
      </li>
      <li>
        <Link to="/teste" className={styles.menuItem}>
          <i className={`${styles.menuItemIcon} icon-message`}></i>
        </Link>
      </li>
      <li>
        <Link to="/teste" className={styles.menuItem}>
          <i className={`${styles.menuItemIcon} icon-config`}></i>
        </Link>
      </li>
    </ul>
  )
}

export default Menu;