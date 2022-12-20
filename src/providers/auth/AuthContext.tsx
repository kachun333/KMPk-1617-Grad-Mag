import { UserCredential } from "firebase/auth";
import { createContext } from "react";

export interface AuthContextValue {
  userCredential: UserCredential | null;
  isVerified: boolean;
  isLoggedin: boolean;
  avatar: null;
}

const AuthContext = createContext<AuthContextValue>({
  userCredential: null,
  isVerified: false,
  isLoggedin: false,
  avatar: null,
});

export default AuthContext;
