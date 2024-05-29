import React, { createContext } from 'react';

interface IAuthContextValue {
  signedIn: boolean;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{ signedIn: true }}>
      {children}
    </AuthContext.Provider>
  );
}
