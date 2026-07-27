import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

import {
  login as loginApi,
  signup as signupApi,
  getCurrentUser,
} from "../api/auth";

interface User {
  id: number;
  name: string;
  email: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;

  login: (email: string, password: string) => Promise<any>;
  signup: (data: SignupData) => Promise<any>;
  logout: () => void;

  fetchCurrentUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      if (!token) {
        setLoading(false);
        return;
      }

      const user = await getCurrentUser();

      setUser(user);
    } catch (error) {
      console.error(error);

      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [token]);

  const login = async (
    email: string,
    password: string
  ) => {
    const response = await loginApi({
      email,
      password,
    });

    console.log("LOGIN RESPONSE:", response);

    const jwt = response.access_token;

    localStorage.setItem("token", jwt);

    setToken(jwt);

    setUser(response.user);

    return response;
  };

  const signup = async (
    data: SignupData
  ) => {
    const response = await signupApi(data);

    console.log("SIGNUP RESPONSE:", response);

    const jwt = response.access_token;

    localStorage.setItem("token", jwt);

    setToken(jwt);

    setUser(response.user);

    return response;
  };

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);

    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        signup,
        logout,
        fetchCurrentUser,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}