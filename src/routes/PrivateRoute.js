import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrentUserContext } from '../contexts/currentUser';

const PrivateRoute = ({ component, ...rest }) => {
  const [user] = useContext(CurrentUserContext);

  if (user) {
    return (
      <Route
        {...rest}
        component={component}
      />
    );
  }

  return (
    <Redirect
      {...rest}
      from={rest.to}
      to="/"
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;
