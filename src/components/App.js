import React from 'react';
import AppLayout from '../layouts';
import { CurrentUserProvider } from '../contexts/currentUser';

const App = () => (
  <CurrentUserProvider>
    <AppLayout />
  </CurrentUserProvider>
);

export default App;
