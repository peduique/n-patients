import React from 'react';
import logo from '../../logo.svg';
import styles from './Login.module.scss';
import Button from '../../components/shared/Button';

const Index = () => {
  return (
    <div className={styles.login}>
      <img src={logo} className={styles.logo} alt="logo" />

      <div className={styles.content}>
        <Button label="Entrar" style="btn-primary" />
        <Button label="Inscreva-se" style="btn-light" />
      </div>
    </div>
  )
}

export default Index;