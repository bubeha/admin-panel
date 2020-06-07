import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrentUserContext } from '../contexts/currentUser';

const GuestRoute = ({ component, ...rest }) => {
  const [user] = useContext(CurrentUserContext);

  if (user) {
    return (
      <Redirect
        {...rest}
        from={rest.to}
        to="/"
      />
    );
  }

  return (
    <Route
      {...rest}
      component={component}
    />
  );
};

GuestRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default GuestRoute;
