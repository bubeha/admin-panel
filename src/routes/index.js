import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../pages/notFound';
import { CurrentUserContext } from '../contexts/currentUser';
import Welcome from '../pages/welcome';
import Login from '../pages/auth/login';
import Dashboard from '../pages/dashboard';

export default () => {
  const [user] = useContext(CurrentUserContext);

  return (
    <Switch>
      <Route path="/" component={user ? Dashboard : Welcome} exact />
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
