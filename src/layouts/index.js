import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from '../routes';

const AppLayout = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default AppLayout;
