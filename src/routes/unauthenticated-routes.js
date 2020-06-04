import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import NotFound from '../pages/notFound';

export default () => (
  <Switch>
    <Route path="/" component={Welcome} exact />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="*" component={NotFound} />
  </Switch>
);
