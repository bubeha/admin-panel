import { BrowserRouter } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthorizedRoutes from '../routes/authenticated-routes';
import UnAuthorizedRoutes from '../routes/unauthenticated-routes';
import { CurrentUserContext } from '../contexts/currentUser';

const AppLayout = () => {
  const [user] = useContext(CurrentUserContext);

  return (
    <BrowserRouter>
      {user ? <AuthorizedRoutes /> : <UnAuthorizedRoutes />}
    </BrowserRouter>
  );
};

export default AppLayout;
