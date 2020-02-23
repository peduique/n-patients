import React from 'react';
import logo from '../../logo.svg';
import styles from './Login.module.scss';
import Link from '../../components/shared/Link';

const Index = props => {
  return (
    <div className={styles.login}>
      <img src={logo} className={styles.logo} alt="logo" />

      <div className={styles.content}>
        <Link 
          label="Entrar" 
          style={`btn-primary`}
          target="/login"
        />
        <Link 
          label="Inscreva-se" 
          style={`btn-light`}
          target="/signup"
        />
      </div>
    </div>
  )
}

export default Index;