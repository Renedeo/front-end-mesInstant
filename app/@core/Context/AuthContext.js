import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isClient = typeof window !== 'undefined';
  const initialIsLoggedIn = isClient ? localStorage.getItem('isLoggedIn') === 'true' : false;

  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  // Wrap the definition of 'login' in useCallback
  const login = useCallback(() => {
    setIsLoggedIn(true);
    isClient && localStorage.setItem('isLoggedIn', 'true');
  }, [isClient]);

  // Wrap the definition of 'logout' in useCallback
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    isClient && localStorage.removeItem('isLoggedIn');
  }, [isClient]);

  useEffect(() => {
    return () => {
      isClient && localStorage.removeItem('isLoggedIn');
    };
  }, [isClient]);

  // Memoize the context value
  const contextValue = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context;
};
