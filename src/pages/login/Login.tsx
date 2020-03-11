import React from 'react';
import logo from '../../logo.svg';
import styles from './Login.module.scss';
import form from '../../components/shared/Form.module.scss';
import Button from '../../components/shared/Button';
import { useInputChange } from '../../useInputChange';
import api from "../../services/api";
import { login } from "../../services/auth";

const Login = props => {
  const [input, handleInputChange] = useInputChange();

  const handleSignIn = (evt) => {
    evt.preventDefault();

    api.post('/public/users/login', 
      { email: input.username, password: input.password }
    ).then(response => {
      login(response.data.token);
      props.history.push('/dashboard');
    });
  }

  return (
    <div className={styles.login}>
      <img src={logo} className={styles.logo} alt="logo" />

      <div className={styles.content}>
        <form className={form.content} onSubmit={handleSignIn}>
          <div className={form.formGroup}>
            <label className={form.label}>E-mail:</label>
            <input 
              type="email"
              name="username"
              className={form.input}
              onChange={handleInputChange} />
          </div>
          
          <div className={form.formGroup}>
            <label className={form.label}>Senha:</label>
            <input 
              type="password"
              name="password"
              className={form.input}
              onChange={handleInputChange} />
          </div>
          
          <Button 
            type="submit"
            style={`btn-primary`}
            label="Acessar" 
          />
        </form>
      </div>

    </div>
  )
}

export default Login;