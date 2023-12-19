import React, { createContext, useContext } from 'react';
import socketIO from 'socket.io-client';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = socketIO('http://localhost:3001');

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};
