import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/notFound';

export default () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="*" component={NotFound} />
  </Switch>
);
