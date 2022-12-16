import { createContext } from "react";

export interface AuthContextValue {
  isVerified: boolean;
  isLoggedin: boolean;
  avatar: null;
}

const AuthContext = createContext<AuthContextValue>({
  isVerified: false,
  isLoggedin: false,
  avatar: null,
});

export default AuthContext;
