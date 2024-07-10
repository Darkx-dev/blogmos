"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/utils/api";
import { User, AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const response = await fetch("/api/auth/check");
      if (response.ok) {
        const userData: User = await response.json();
        console.log(userData)
        setUser(userData);
        setAuthToken(userData.token);
      }
    };
    checkToken();
  }, []);
  const login = (userData: User) => {
    setUser(userData);
    setAuthToken(userData.token);
  };

  const logout = async () => {
    const response = await fetch("/api/auth/logout", { method: "GET" });
    if (response.ok) {
      setUser(null);
      setAuthToken(null);
      router.push("/login");
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
