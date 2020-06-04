import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/currentUser';

const Welcome = () => {
  const [user] = useContext(CurrentUserContext);

  if (user) {
    return (
      <Redirect to={{
        pathname: '/dashboard',
      }}
      />
    );
  }

  return (
    <Redirect to={{
      pathname: '/login',
    }}
    />
  );
};

export default Welcome;
