import { AllUser, UseAuthProviderType, UseAuthType, Users } from "../types/User";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const UseAuth = createContext({} as UseAuthType);

export const UserContextProvider = ({ children }: UseAuthProviderType) => {
  const [userConnected, setUserConnected] = useState<Users | null>(null);
  const [allUser, setAllUser] = useState<AllUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const isAuthenticated = userConnected !== null;

  const logout = () => {
    setUserConnected(null);
    localStorage.clear();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserConnected(foundUser);
    }
  }, []);
  
  const value = useMemo(
    () => ({
      userConnected,
      setUserConnected,
      error,
      setError,
      loading,
      setLoading,
      allUser,
      setAllUser,
      isAuthenticated,
      logout,
    }),
    [userConnected, error, loading, allUser, isAuthenticated]
  );
  
  return <UseAuth.Provider value={value}>{children}</UseAuth.Provider>
}

export const useAuth = () => {
  return useContext(UseAuth);
};