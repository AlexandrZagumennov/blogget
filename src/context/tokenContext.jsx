import React from 'react';
import {useToken} from '../hooks/useToken';
import PropTypes from 'prop-types';

export const TokenContext = React.createContext({});

export const TokenContextProvider = ({children}) => {
  const [token, delToken] = useToken('');

  return (
    <TokenContext.Provider value={{token, delToken}}>
      {children}
    </TokenContext.Provider>
  );
};

TokenContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
