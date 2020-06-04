import React from 'react';
import { Redirect } from 'react-router-dom';

const welcome = () => (
  <Redirect to={{
    pathname: '/login',
  }}
  />
);

export default welcome;
