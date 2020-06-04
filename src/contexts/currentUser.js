import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../hooks/useLocalStorage';

const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser] = useLocalStorage('user');
  const [state, setState] = useState(currentUser ? JSON.parse(currentUser) : null);

  return (
    <CurrentUserContext.Provider value={[state, setState]}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  CurrentUserContext,
  CurrentUserProvider,
};
