import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CurrentUserContext = createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [state, setState] = useState(null);

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
