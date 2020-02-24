import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Menu from './components/Menu';

/* 
  Pages/Components 
*/
import LoginIndex from './pages/login/Index';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Plans from './pages/plans/Plans';
import Plan from './pages/plans/Plan';
import Avaliations from './pages/avaliations/Avaliations';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      {isAuthenticated() ? <Menu /> : ''}
      <Switch>
        <Route exact path="/" component={LoginIndex} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/plans/:id" component={Plan} />
        <PrivateRoute path="/plans" component={Plans} />
        <PrivateRoute path="/avaliations" component={Avaliations} />
        <Route path="*" component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;