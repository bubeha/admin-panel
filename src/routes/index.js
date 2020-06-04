import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/notFound';
import Welcome from '../pages/welcome';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import { CurrentUserContext } from '../contexts/currentUser';

const getUnAuthenticationRoutes = (user) => {
  if (user) {
    return (
      <Redirect to={{
        pathname: '/dashboard',
      }}
      />
    );
  }

  return (
    <>
      <Route path="/" component={Welcome} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </>
  );
};

const getAuthenticationRoutes = (user) => {
  if (user) {
    return (
      <>
        <Route path="/dashboard" component={Dashboard} />
      </>
    );
  }

  return (
    <Redirect to={{
      pathname: '/login',
    }}
    />
  );
};

export default () => {
  const [user] = useContext(CurrentUserContext);

  return (
    <Switch>
      <Route path="/">
        {getUnAuthenticationRoutes(user)}
        {getAuthenticationRoutes(user)}
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
