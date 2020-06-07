import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const renderRoute = (route) => {
  const Router = route.router ? route.router : Route;

  return (
    <Router
      exact={route.exact}
      path={route.path}
      component={route.component}
      key={route.key}
    />
  );
};

const renderRoutes = () => routes.map((route) => renderRoute(route));

export default () => (
  <Switch>
    {renderRoutes()}
  </Switch>
);
