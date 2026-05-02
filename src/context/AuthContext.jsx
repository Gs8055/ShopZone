import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(false);

  // 🔥 Load from localStorage on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser === "true") {
      setUser(true);
    }
  }, []);

  const login = () => {
    setUser(true);
    localStorage.setItem("user", "true"); // save
  };

  const logout = () => {
    setUser(false);
    localStorage.removeItem("user"); // clear
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}