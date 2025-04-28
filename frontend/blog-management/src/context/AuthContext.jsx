// This file creates a context for managing authentication state in a React application.
// It uses the Context API to provide a way to share authentication data across components without prop drilling.
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null); // Auth state is null initially

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
