import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");

  // Safely parse the user data
  const [authUser, setAuthUser] = useState(() => {
    try {
      // Check if initialAuthUser is a valid JSON string and not "undefined"
      return initialAuthUser && initialAuthUser !== "undefined"
        ? JSON.parse(initialAuthUser)
        : undefined;
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error.message);
      return undefined;
    }
  });

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
