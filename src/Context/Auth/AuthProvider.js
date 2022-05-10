import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("setAuth"));
    setAuth(savedUser);
  }, []);

  useEffect(() => {
    localStorage.setItem("setAuth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const UseAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
