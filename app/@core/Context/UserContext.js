// UserContext.js
import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [connectedUsers, setConnectedUsers] = useState([]);

  const addUser = useCallback((user) => {
    // Check if the username is not already present in connectedUsers
    if (!connectedUsers.includes(user)) {
      setConnectedUsers((prevUsers) => [...prevUsers, user]);
    }
  }, [connectedUsers]);

  const removeUser = useCallback((username) => {
    setConnectedUsers((prevUsers) => prevUsers.filter((user) => user !== username));
  }, []);

  const contextValue = useMemo(() => ({
    connectedUsers,
    addUser,
    removeUser,
  }), [connectedUsers, addUser, removeUser]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
