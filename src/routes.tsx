import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages/Components
import LoginIndex from './pages/login/Index';
import Login from './pages/login/Login';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/index" component={LoginIndex} />
        <Route path="/login" component={Login} />
        <Route path="/teste" component={() => <h1>Teste</h1>} />
      </Switch>
    </Router>
  )
}

export default Routes;