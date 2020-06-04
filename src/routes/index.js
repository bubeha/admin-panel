import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/notFound';
import Welcome from '../pages/welcome';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';
import { CurrentUserContext } from '../contexts/currentUser';

export default () => {
  const [user] = useContext(CurrentUserContext);

  return (
    <Switch>
      <Route path="/" component={Welcome} exact />
      {user ? <Route path="/dashboard" component={Dashboard} exact /> : <Redirect from="/dashboard" to="/login" />}
      {user ? <Redirect from="/login" to="/" /> : <Route path="/login" component={Login} />}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
